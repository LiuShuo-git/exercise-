import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Route, Link } from 'react-router-dom';
import Product from './home/product'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default class home extends Component {
    render() {
        return (
            <div >
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">商品列表</Menu.Item>
                            <Menu.Item key="2">订单管理</Menu.Item>
                            <Menu.Item key="3">图片管理</Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="user" />
                                            商品管理
              </span>
                                    }
                                >
                                    <Menu.Item key="1"><Link to="/product">商品列表</Link></Menu.Item>
                                    <Menu.Item key="2">商品图片库</Menu.Item>
                                    <Menu.Item key="3">商品评价</Menu.Item>
                                </SubMenu>

                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>商品管理</Breadcrumb.Item>
                                <Breadcrumb.Item>商品列表</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                {/* 显示子页面 */}
                                <Route path="/product" component={Product} />
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
