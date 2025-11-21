import React from "react";
import Image from "next/image";
import { Footer } from "antd/es/layout/layout";
import { Space, Row, Col, Input, Button, Divider } from "antd";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";

const containerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: 1200,
};

export default function Footers() {
    return (
        <Footer style={{ display: "flex", justifyContent: "center", background: "#ed1b24", padding: "32px 0" }}>
            <div style={containerStyle}>

                <Row justify="center">
                    <Col xs={24} sm={24} md={24} style={{ textAlign: "left", marginBottom: 20 }}>
                        <Image
                            src="/logo_footer3.png"
                            alt="Logo_Footer"
                            width={50}
                            height={50}
                            style={{ objectFit: "contain", borderRadius: 4 }}
                        />
                    </Col>
                </Row>

                <Row gutter={[16, 32]} style={{ color: "#fff", textAlign: "center" }}>

                    <Col xs={24} sm={24} md={8} style={{ textAlign: "left" }}>
                        <h2 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 12 }}>GM STORE</h2>
                        <p>Jl. Raya Bukittinggi - Payakumbuh</p>
                        <p>Jl. Sungai Jernih No.Simpang, Canduang Koto Laweh</p>
                        <p>Kec. Candung, Kabupaten Agam</p>
                        <p>Sumatera Barat 26192</p>
                    </Col>

                    <Col xs={24} sm={24} md={8}>
                        <h2 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 12 }}>Terhubung Bersama Kami</h2>
                        <Space size="large">
                            <FacebookFilled style={{ fontSize: 26 }} />
                            <InstagramFilled style={{ fontSize: 26 }} />
                        </Space>
                    </Col>

                    <Col xs={24} sm={24} md={8}>
                        <h2 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 12 }}>Kirim Email</h2>
                        <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
                            <Input placeholder="Masukkan Email" />
                            <Button type="default" style={{ borderColor: "#fff", borderWidth: 1 }}>
                                Submit
                            </Button>
                        </div>
                    </Col>
                </Row>

                <Divider style={{ borderColor: "#fff", margin: "24px 0" }} />

                <Row>
                    <Col span={24} style={{ color: "#fff", textAlign: "center" }}>
                        © {new Date().getFullYear()} GM Store — All Rights Reserved
                    </Col>
                </Row>
            </div>
        </Footer>
    );
}
