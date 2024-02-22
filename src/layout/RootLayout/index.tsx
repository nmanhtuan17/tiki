import React from 'react';
import {Breadcrumb, Layout, theme} from 'antd';
import {Outlet} from "react-router-dom";
import Header from '../Header';
import Footer from "../Footer";

const {Content} = Layout;


const RootLayout: React.FC = () => {
  const {
    token: {borderRadiusLG},
  } = theme.useToken();

  return (
    <Layout>
      <Header/>
      <Content className='h-full container mb-5' style={{padding: '0 48px'}}>
        <Breadcrumb style={{margin: '16px 0'}}>
          <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item>Nhà sách tiki</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            minHeight: 280,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </div>
      </Content>
      <Footer/>
    </Layout>
  );
};

export default RootLayout;
