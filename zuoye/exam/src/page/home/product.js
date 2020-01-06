import React, { Component } from 'react'
import { Table, Button, Form, Icon, Input, Modal, message } from 'antd'
import axios from 'axios'
class product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // 修改id
            putId: undefined,
            // 总条数
            total: 0,
            // 第几页
            page: 1,
            columns: [
                {
                    title: '编号',
                    dataIndex: 'id',

                },
                {
                    title: '商品名称',
                    dataIndex: 'product_name',

                },
                {
                    title: '商品价格',
                    dataIndex: 'product_price',

                },
                {
                    title: '商品数量',
                    dataIndex: 'product_num',

                },
                {
                    title: '操作',
                    render: (text, record) => (
                        <>
                            <Button onClick={() => {
                                this.delProduct(record.id)
                            }}>删除</Button>
                            <Button onClick={() => {
                                this.addProduct(record)
                            }}> 修改</Button>
                        </>
                    ),

                },
            ],
            productList: [],
            // 对话框
            visible: false

        }
    }
    componentDidMount() {
        this.getShowproduct()
    }
    handleOk = e => {
        this.props.form.validateFields((error, value) => {
            if (error) {
                return false
            } else {
                let putId = this.state.putId;
                // 添加
                if (putId == undefined) {
                    axios.post('/addproduct', value).then(res => {
                        console.log(res);
                        if (res.data.code == 200) {
                            message.success('添加成功！')
                            this.getShowproduct()
                            this.setState({
                                visible: false
                            })
                        } else {
                            message.success('添加失败！')
                        }

                    })
                    // 修改数据
                } else {
                    axios.put(`/updateproduct?id=${putId}`, value).then(res => {
                        console.log(res);
                        if (res.data.code == 200) {
                            message.success('修改成功！')
                            this.getShowproduct()
                            this.setState({
                                visible: false
                            })
                        } else {
                            message.success('修改失败！')
                        }

                    })

                }

                console.log(value);

            }
        })

    };

    handleCancel = e => {

        this.setState({
            visible: false,
            putId: undefined
        })
    }
    addProduct = (record) => {
        console.log(record);
        if (!record) {

        } else {
            this.setState({
                putId: record.id
            })
            // 回显数据
            this.props.form.setFieldsValue({
                product_name: record.product_name,
                product_price: record.product_price,
                product_num: record.product_num
            })
        }



        this.setState({
            visible: true,
        })
    }
    getShowproduct = (page) => {
        axios.get(`/showproduct?page=${page || this.state.page}&page_size=2`).then(res => {
            console.log(res);
            this.setState({
                productList: res.data.data,
                total: res.data.total
            })

        })
    }
    onPage = (page, pageSize) => {
        // console.log(page,pageSize);
        this.getShowproduct(page)

    }
    // 删除
    delProduct = (id) => {
        console.log(id);
        Modal.confirm({
            title: '确定要删除?',
            content: '删除不可恢复',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: () => {
                axios.delete(`/delproduct/${id}`).then(res => {
                    console.log(res);
                    if (res.data.code == 200) {
                        message.success('删除成功！')
                        this.getShowproduct(this.state.page)
                    }

                })
            },
            onCancel() {
                console.log('Cancel');
            },
        });

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Button type="danger" onClick={this.addProduct}>添加商品</Button>
                <Table rowKey='id' dataSource={this.state.productList} columns={this.state.columns} pagination={{
                    total: this.state.total,
                    pageSize: 2,
                    onChange: this.onPage
                }} />
                {/* 添加修改的弹框 */}
                <Modal
                    title={this.state.putId == undefined ? '添加用户' : '修改用户'}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form>
                        <Form.Item>
                            {getFieldDecorator('product_name', {
                                rules: [{ required: true, message: '请输入商品名!' }
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="商品名不能为空"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('product_price', {
                                rules: [{ required: true, message: '请输入商品价格!' },
                                { pattern: /^[1-9]\d*$/, message: '商品价格必须为数字' }
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}

                                    placeholder="商品价格不能为空"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('product_num', {
                                rules: [{ required: true, message: '请输入商品数量!' }, ,
                                { pattern: /^[1-9]\d*$/, message: '商品数量必须为数字' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}

                                    placeholder="商品数量不能为空"
                                />,
                            )}
                        </Form.Item>

                    </Form>
                </Modal>

            </div>
        )
    }
}

export default Form.create()(product)