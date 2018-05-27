import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Row, Col } from 'antd';
import { List, Avatar } from 'antd';
import './App.css';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Icon style={{ fontSize: '1.5rem' }} type="compass" /></Menu.Item>
            <Menu.Item key="2"><Icon style={{ fontSize: '1.5rem' }} type="heart-o" /></Menu.Item>
            <Menu.Item key="3"><Icon style={{ fontSize: '1.5rem' }} type="user" /></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '60px 50px' }}>
          <Row type="flex" justify="center" align="top">
            <Col lg={18}>
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
            </Col>
            <Col span={6}>
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar icon="user" />}
                      title={<a href="https://ant.design">{item.title}</a>}
                    />
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
