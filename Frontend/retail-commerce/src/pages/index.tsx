import React from 'react';
import { FacebookFilled, InstagramFilled } from '@ant-design/icons';
import {ConfigProvider, Layout, Menu, Divider, Carousel, Col, Row, Space, Input, Button} from 'antd';
import Image from 'next/image';

const {Header, Content, Footer} = Layout;

const items = [
    {key: '1', label: 'Home'},
    {key: '2', label: 'Marketplace'},
    {key: '3', label: 'About'},
];

const contentStyle: React.CSSProperties = {
    margin: 0,
    color: '#ffff',
    textAlign: 'center',
    background: '#e30613',
};

const containerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: 1200,
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
                    Button: {
                        colorPrimary: '#ed1b24',       // Warna dasar merah
                        colorPrimaryHover: '#ff4d4f',  // Warna saat hover (lebih terang)
                        colorPrimaryActive: '#bf161e', // Warna saat dipilih/klik (lebih gelap)
                    },
                },
            }}
        >
            <Layout>
                <Header style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{...containerStyle, display: 'flex', alignItems: 'center'}}>
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
                                style={{objectFit: 'contain', borderRadius: 4}}
                            />

                            <span style={{marginLeft: 8, fontSize: 24, fontWeight: 'bold', fontFamily: 'cursive'}}>
                            GM Store
                        </span>
                        </div>

                        <Menu
                            mode="horizontal"
                            theme="light"
                            defaultSelectedKeys={['1']}
                            items={items}
                            style={{flex: 1, minWidth: 0, justifyContent: 'flex-end', fontWeight: 'bold'}}
                        />
                    </div>
                </Header>
                <Divider style={{borderColor: "#231f20"}}></Divider>


                <Content style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{...containerStyle, padding: '0 40px'}}>
                        <div style={{padding: 10, fontWeight: 'bold', fontSize: 24}}>
                            Promo
                        </div>
                        <Carousel autoplay={{dotDuration: true}} autoplaySpeed={5000}>
                            <div>
                                <h3 style={contentStyle}>
                                    <Image
                                        src="/carousel_promo.png"
                                        alt="Promo_carousel"
                                        width={875}
                                        height={450}
                                        style={{width: '100%', height: 'auto', borderRadius: 4}}
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
                                        style={{width: '100%', height: 'auto', borderRadius: 4}}
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
                                        style={{width: '100%', height: 'auto', borderRadius: 4}}
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
                                        style={{width: '100%', height: 'auto', borderRadius: 4}}
                                    />
                                </h3>
                            </div>
                        </Carousel>
                    </div>
                </Content>

                <Divider style={{borderColor: "#231f20"}}></Divider>
                <Footer style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={containerStyle}>
                        <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                            <Row>
                                <Col span={24}>
                                    <Image
                                        src="/logo_footer3.png"
                                        alt="Logo_Footer"
                                        width={70}
                                        height={70}
                                        style={{objectFit: 'contain', borderRadius: 4}}
                                    />
                                </Col>
                            </Row>
                            <Row style={{color: "#ffff", textAlign: "center", fontWeight: 'bold'}}>
                                <Col span={8} style={{textAlign: 'left'}}>
                                    GM STORE
                                </Col>
                                <Col span={8} style={{
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                }}>
                                    Terhubung Bersama Kami
                                </Col>
                                <Col span={8} style={{textAlign: 'center'}}>
                                    Kirim Email
                                </Col>
                            </Row>
                            <Row style={{color: "#ffff", textAlign: "center"}}>
                                <Col span={8} style={{textAlign: 'left'}}>
                                    Jl. Raya Bukittinggi - Payakumbuh Jl. Sungai Jernih No.Simpang, Canduang Koto Laweh,
                                    Kec. Candung, Kabupaten Agam, Sumatera Barat 26192
                                </Col>
                                <Col span={8} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    <Space>
                                        <FacebookFilled />
                                        <InstagramFilled />
                                    </Space>
                                </Col>
                                <Col span={8} style={{textAlign: 'center'}}>
                                    <Row style={{textAlign: 'center'}}>
                                        <Col span={24}>
                                            {}
                                            <Space.Compact style={{width: '60%'}}>
                                                <Input placeholder="Masukkan Email"/>
                                                <Button
                                                    type="primary"
                                                    style={{
                                                        borderColor: '#ffffff',
                                                        borderStyle: 'solid',
                                                        borderWidth: '1px'
                                                    }}
                                                >
                                                    Submit
                                                </Button>
                                            </Space.Compact>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Divider style={{borderColor: "#ffff"}}></Divider>
                            <Row style={{color: "#ffff", textAlign: "center"}}>
                                <Col span={24}>
                                    Copyright ©{new Date().getFullYear()} GM Store
                                </Col>
                            </Row>
                        </Space>
                    </div>
                </Footer>
            </Layout>
        </ConfigProvider>
    );
}