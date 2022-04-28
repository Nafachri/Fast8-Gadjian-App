import React, { useEffect, useState } from "react";
import AppLayout from "../../Layout/AppLayout";
import {
  Avatar,
  Row,
  Col,
  Input,
  Button,
  Card,
  Pagination,
  Image,
  Typography,
} from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import "./index.css";

const PersonelPage = () => {
  const [listPersonels, setListPersonels] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(4);
  const [current, setCurrent] = useState(0);

  const { Title } = Typography;
  const { Meta } = Card;

  const getAllPersonel = async (limit, offset) => {
    try {
      const response = await fetch(
        `https://randomuser.me/api/?results=${limit}&offset=${offset}`
      )
        .then((res) => res.json())
        .then((json) => {
          const data = json.results;
          setPage(json.info.page);
          return data;
        });

      setListPersonels(response);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getAllPersonel(4, 0);
  }, []);

  useEffect(() => {
    getAllPersonel(size, size * (current - 1));
  }, [current]);

  useEffect(() => {
    getAllPersonel(size, size * (current - 1));
  }, [size]);

  const showTotal = (total) => {
    return `Total ${total} personels`;
  };

  const onChange = (currentPage) => {
    setCurrent(currentPage);
  };

  const onSizeChange = (_, pageSize) => {
    setSize(pageSize);
  };

  return (
    <>
      <AppLayout
        menu={[
          <p level={4} style={{ color: "turquoise" }}>
            Gadjian User
          </p>,
          <Avatar src="https://joeschmoe.io/api/v1/random" />,
        ]}
        content={
          <>
            <div className="site-card-border-less-wrapper">
              <Row align="middle">
                <Col span={12}>
                  <Title style={{ color: "turquoise" }}>
                    <b>Personel List</b>
                  </Title>
                  <h3>List of all personels</h3>
                </Col>
                <Col span={12}>
                  <Row>
                    <Col style={{ marginRight: "5px" }} span={6}>
                      <Input
                        placeholder="Find Personels"
                        suffix={<SearchOutlined />}
                      ></Input>
                    </Col>
                    <Col span={6}>
                      <Button
                        style={{ backgroundColor: "turquoise", color: "white" }}
                      >
                        Tambah Personel
                        <PlusOutlined />
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <Row style={{ margin: "20px" }}>
              {listPersonels.map((v) => {
                return (
                  <Col
                    xs={{ span: 12, offset: 1 }}
                    sm={{ span: 12, offset: 1 }}
                    md={{ span: 5, offset: 1 }}
                    lg={{ span: 5, offset: 1 }}
                  >
                    <Card
                      title={`Personel ID : ${v?.id?.value}`}
                      style={{ width: 230 }}
                      cover={
                        <Image
                          className="personel-pict"
                          src={v.picture.medium}
                        />
                      }
                      // actions={[
                      //   <SettingOutlined key="setting" />,
                      //   <EditOutlined key="edit" />,
                      //   <EllipsisOutlined key="ellipsis" />,
                      // ]}
                    >
                      <h5>Name</h5>
                      <p>{`${v.name.title}. ${v.name.first} ${v.name.last}`}</p>
                      <h5>Telephone</h5>
                      <p>{v.phone}</p>
                      <h5>Birthday</h5>
                      <p>{v.dob.date}</p>
                      <h5>Email</h5>
                      <p>{v.email}</p>
                    </Card>
                  </Col>
                );
              })}
            </Row>

            <div style={{ textAlign: "center" }}>
              <Pagination
                size="small"
                pageSize={size}
                current={current}
                total={28}
                showTotal={showTotal}
                onChange={onChange}
                onShowSizeChange={onSizeChange}
                responsive={true}
              />
            </div>
          </>
        }
      />
    </>
  );
};

export default PersonelPage;
