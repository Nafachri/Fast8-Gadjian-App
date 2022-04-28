import React from "react";
import { Layout, Menu } from "antd";
// import {
//   AppstoreOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   ShopOutlined,
//   TeamOutlined,
//   UserOutlined,
//   UploadOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
const items = ["GADJIAN", "Beranda", "Personels", "Daily Attendant"].map(
  (link, index) => ({
    key: String(index + 1),
    label: link,
  })
);
const AppLayout = ({ menu, content }) => {
  const navMenu = menu.map((key) => ({
    key,
    label: key,
  }));
  return (
    <Layout hasSider>
      <Sider
        className="sidebar"
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="light" mode="inline" items={items} />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <Menu theme="light" mode="horizontal" items={navMenu} />
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          {content}
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              textAlign: "center",
            }}
          ></div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
