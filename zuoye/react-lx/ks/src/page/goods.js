import React, { Component } from 'react'
import { Button, Table, Modal, Form, Icon, Input, message } from 'antd'
import axios from 'axios'

class goods extends Component {

   constructor(props) {
      super(props)
      this.state = {
         goodsList: [],
         page: 1,
         page_size: 2,
         total: 0,
         goodsModal: false,
         attr: '>.<',
         putId: '',
         columns: [
            {
               title: '编号',
               dataIndex: 'id',
               key: 'id',
            },
            {
               title: '商品名称',
               dataIndex: 'product_name',
               key: 'product_name',
            }, {
               title: '商品价格',
               dataIndex: 'product_price',
               key: 'product_price',
            }, {
               title: '商品数量',
               dataIndex: 'product_num',
               key: 'product_num',
            }, {
               title: '操作',
               render: (text, record) => (
                  <>
                     <Button onClick={() => {
                        this.delGoods(record)
                     }}>删除</Button>
                     <Button onClick={() => {
                        this.putGoods(record)
                     }}>修改</Button>
                  </>
               ),
            }

         ]

      }
   }

   componentDidMount() {
      
      this.getGoods()

   }
   getGoods = (page) => {
      axios.get(`/showproduct?page=${page || this.state.page}&page_size=${this.state.page_size}`).then(res => {
         console.log(res);
         this.setState({
            goodsList: res.data.data,
            total: res.data.total
         })
      })
   }
   // 分页
   pageChange = (page, pageSize) => {
      console.log(page);
      this.getGoods(page)
      this.setState({
         page
      })
   }
   // 取消对话框
   handleCancel = () => {
      this.setState({
         goodsModal: false,
         putId: '',
      })
      this.props.form.resetFields()

   }
   // ok添加或修改
   handleOk = () => {
      // 如果修改id为空，则为添加
      if (this.state.putId == '') {
         // this.props.form
         this.props.form.validateFields((err, values) => {
            if (!err) {
               console.log(values);
               axios.post(`addproduct`, values).then(res => {
                  console.log(res);
                  if (res.data.code == 200) {
                     message.success('添加成功')
                     this.getGoods()
                     this.setState({
                        goodsModal: false
                     })
                     this.props.form.resetFields()
                  } else {
                     message.error(res.data.error)
                  }
               })
            }
         });
         // id不为空 则为修改
      } else {
         this.props.form.validateFields((err, values) => {
            if (!err) {
               console.log(values);
               axios.put(`updateproduct?id=${this.state.putId}`, values).then(res => {
                  console.log(res);
                  if (res.data.code == 200) {
                     message.success('修改成功')
                     this.getGoods()
                     this.setState({
                        goodsModal: false
                     })
                     this.props.form.resetFields()
                  } else {
                     message.error(res.data.error)
                  }
               })
            }
         });
      }




   }
   // 添加
   addGoods = () => {
      this.setState({
         goodsModal: true,
         putId: '',
         attr: '添加商品'
      })
   }

   // 修改
   putGoods = (record) => {

      console.log(record);
      this.setState({
         goodsModal: true,
         putId: record.id,
         attr: '修改商品'
      })
      // 回显数据
      axios.get(`updateproduct/${record.id}`).then(res => {
         console.log(res);
         console.log(this.props.form);
         this.props.form.setFieldsValue({
            product_name: res.data.data[0].product_name,
            product_price: res.data.data[0].product_price,
            product_num: res.data.data[0].product_num
         })
      })

   }
   // 删除
   delGoods = (record) => {
      console.log(record.id);
      Modal.confirm({
         title: '确认要删除吗?',
         content: '删除后将不可恢复',
         okText: '是',
         okType: '0',
         cancelText: '否',
         onOk: () => {
            axios.delete(`delproduct/${record.id}`).then(res => {
               console.log(res);
               if (res.data.code == 200) {
                  message.success('删除成功！')
                  this.getGoods()
               }

            })

         },
         onCancel() {
            message.success('删除取消')
         },
      });


   }


   render() {
      const { getFieldDecorator } = this.props.form;
      return (
         <div>
            <Button type="danger" onClick={this.addGoods}>添加商品</Button>
            <Table rowKey='id' dataSource={this.state.goodsList} columns={this.state.columns} pagination={{

               total: this.state.total,
               pageSize: this.state.page_size,
               current: this.state.page,
               onChange: this.pageChange


            }}></Table>

            {/* 对话框 */}
            <Modal
               title={this.state.attr}
               visible={this.state.goodsModal}
               onOk={this.handleOk}
               onCancel={this.handleCancel}
            >
               <Form>
                  <Form.Item>
                     {getFieldDecorator('product_name', {
                        rules: [{ required: true, message: '商品名称不能为空' }],
                     })(
                        <Input

                           prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                           placeholder="请输入商品名称"
                        />,
                     )}
                  </Form.Item>
                  <Form.Item>
                     {getFieldDecorator('product_price', {
                        rules: [{ required: true, message: '商品价格不能为空' },
                        { pattern: /^[1-9]\d*$/, message: '商品价格必须为数字' }
                        ],
                     })(
                        <Input

                           prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                           placeholder="请输入商品价格"
                        />,
                     )}
                  </Form.Item>
                  <Form.Item>
                     {getFieldDecorator('product_num', {
                        rules: [{ required: true, message: '商品数量不能为空' }, 
                        { pattern: /^[1-9]\d*$/, message: '商品数量必须为数字' }],
                     })(
                        <Input
                           prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                           placeholder="请输入商品数量"
                        />,
                     )}
                  </Form.Item>
               </Form>

            </Modal>
         </div>
      )
   }
}
export default Form.create()(goods);