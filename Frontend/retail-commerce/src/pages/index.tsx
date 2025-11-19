import React from 'react';
import {ConfigProvider, Layout, Menu, Divider, Carousel, Col, Row, Space } from 'antd';
import Image from 'next/image';

const { Header, Content, Footer } = Layout;

const items = [
    { key: '1', label: 'Home' },
    { key: '2', label: 'Marketplace' },
    { key: '3', label: 'About' },
];

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '450px',
    color: '#ffff',
    lineHeight: '400px',
    textAlign: 'center',
    background: '#e30613',
};


export default function Home() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#ed1b24',
                    colorLink: '#e30613',
                    colorText: '#111111',
                    colorBgBase: '#ffffff',
                    borderRadius: 12,
                },
                components: {
                    Layout: {
                        headerBg: '#ffffff',
                        bodyBg: '#ffffff',
                        footerBg: '#ed1b24',
                    },
                    Menu: {
                        itemColor: '#231f20',
                        itemHoverColor: '#ed1b24',
                        itemSelectedColor: '#231f20',
                        itemSelectedBg: '#ed1b24',
                        horizontalItemHoverBg: 'transparent',
                    },
                },
            }}
        >
            <Layout>
                <Header style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: 16,
                            flexShrink: 0,
                        }}
                    >
                        <Image
                            src="/logo.jpeg"
                            alt="Logo"
                            width={70}
                            height={70}
                            style={{ objectFit: 'contain', borderRadius: 4 }}
                        />

                        <span style={{ marginLeft: 8, fontSize: 24, fontWeight: 'bold',fontFamily: 'cursive' }}>
                            GM Store
                        </span>
                    </div>

                    <Menu
                        mode="horizontal"
                        theme="light"
                        defaultSelectedKeys={['1']}
                        items={items}
                        style={{ flex: 1, minWidth: 0 , justifyContent: 'flex-end', fontWeight: 'bold'}}
                    />
                </Header>
                <Divider style={{borderColor: "#231f20"}}></Divider>


                <Content style={{ padding: '0 40px' }}>
                    <div style={{ padding: 10, fontWeight : 'bold', fontSize: 24 }}>
                        Promo
                    </div>
                    <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
                        <div>
                            <h3 style={contentStyle}>
                                <Image
                                    src="/carousel_promo.png"
                                    alt="Promo_carousel"
                                    width={875}
                                    height={450}
                                    style={{ objectFit: 'fill', borderRadius: 4}}
                                />
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>
                                <Image
                                    src="/carousel_promo.png"
                                    alt="Promo_carousel"
                                    width={875}
                                    height={450}
                                    style={{ objectFit: 'fill', borderRadius: 4}}
                                />
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>
                                <Image
                                    src="/carousel_promo.png"
                                    alt="Promo_carousel"
                                    width={875}
                                    height={450}
                                    style={{ objectFit: 'fill', borderRadius: 4}}
                                />
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>
                                <Image
                                    src="/carousel_promo.png"
                                    alt="Promo_carousel"
                                    width={875}
                                    height={450}
                                    style={{ objectFit: 'fill', borderRadius: 4}}
                                />
                            </h3>
                        </div>
                    </Carousel>
                </Content>

                <Divider style={{borderColor: "#231f20"}}></Divider>
                <Footer>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <Row>
                        <Col span={24}>
                            <Image
                                src="/logo_footer3.png"
                                alt="Logo_Footer"
                                width={70}
                                height={70}
                                style={{ objectFit: 'contain', borderRadius: 4 }}
                            />
                        </Col>
                    </Row>
                    <Row style={{color: "#ffff", textAlign: "center"}}>
                        <Col span={8} style={{fontWeight: 'bold', textAlign: 'left'}}>
                            <div>
                                GM STORE
                            </div>
                        </Col>
                        <Col span={8}>
                            GM Store ©{new Date().getFullYear()}
                        </Col>
                        <Col span={8}>
                            GM Store ©{new Date().getFullYear()}
                        </Col>
                    </Row>
                    <Divider style={{borderColor: "#ffff"}}></Divider>
                    <Row style={{color: "#ffff", textAlign: "center"}}>
                        <Col span={24}>
                            Copyright ©{new Date().getFullYear()} GM Store
                        </Col>
                    </Row>
                    </Space>
                </Footer>
            </Layout>
        </ConfigProvider>
    );
}