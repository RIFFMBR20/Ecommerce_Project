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
        <Footer style={{ display: "flex", justifyContent: "center", background: "#ed1b24" }}>
            <div style={containerStyle}>
                <Space direction="vertical" size="middle" style={{ display: "flex" }}>
                    <Row>
                        <Col span={24}>
                            <Image
                                src="/logo_footer3.png"
                                alt="Logo_Footer"
                                width={100}
                                height={100}
                                style={{ objectFit: "contain", borderRadius: 4 }}
                            />
                        </Col>
                    </Row>

                    <Row style={{ color: "#fff", textAlign: "center" }}>
                        <Col xs={24} sm={24} md={8} style={{ textAlign: "left", marginBottom: 20 }}>
                            <h2 style={{ fontSize: 25, fontWeight: "bold" }}>GM STORE</h2>
                            <p style={{ fontSize: 16, lineHeight: "26px" }}>Jl. Raya Bukittinggi - Payakumbuh</p>
                            <p style={{ fontSize: 16, lineHeight: "26px" }}>Jl. Sungai Jernih No.Simpang, Canduang Koto Laweh</p>
                            <p style={{ fontSize: 16, lineHeight: "26px" }}>Kec. Candung, Kabupaten Agam</p>
                            <p style={{ fontSize: 16, lineHeight: "26px" }}>Sumatera Barat 26192</p>
                        </Col>

                        <Col xs={24} sm={24} md={8} style={{ marginBottom: 20 }}>
                            <h2 style={{ fontSize: 25, fontWeight: "bold" }}>Terhubung Bersama Kami</h2>
                            <Space style={{ marginTop: 10 }}>
                                <FacebookFilled style={{ fontSize: 20 }} />
                                <InstagramFilled style={{ fontSize: 20 }} />
                            </Space>
                        </Col>

                        <Col xs={24} sm={24} md={8} style={{ marginBottom: 20 }}>
                            <h2 style={{ fontSize: 25, fontWeight: "bold" }}>Kirim Email</h2>
                            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 10 }}>
                                <Input placeholder="Masukkan Email" />
                                <Button type="default" style={{ borderColor: "#fff", borderWidth: 1 }}>Submit</Button>
                            </div>
                        </Col>
                    </Row>

                    <Divider style={{ borderColor: "#fff" }} />

                    <Row style={{ color: "#fff", textAlign: "center" }}>
                        <Col span={24}>
                            © {new Date().getFullYear()} GM Store
                        </Col>
                    </Row>
                </Space>
            </div>
        </Footer>
    );
}
