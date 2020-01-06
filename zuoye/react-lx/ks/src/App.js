import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link, BrowserRouter, Route } from 'react-router-dom'
import goods from './page/goods'
import axios from 'axios'
axios.defaults.baseURL='http://127.0.0.1:7878/api/v1'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link to="/">商品列表</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/cart">礼物列表</Link></Menu.Item>
              <Menu.Item key="3">用户管理</Menu.Item>
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
                      APP
                </span>
                  }
                >
                  <Menu.Item key="1"><Link to="/">商品列表</Link></Menu.Item>
                  <Menu.Item key="2">礼物管理</Menu.Item>
                  <Menu.Item key="3">用户管理</Menu.Item>

                </SubMenu>


              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
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

                <Route path='/' exact component={goods}></Route>


              </Content>
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}
