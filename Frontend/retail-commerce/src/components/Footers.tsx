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
                                width={70}
                                height={70}
                                style={{ objectFit: "contain", borderRadius: 4 }}
                            />
                        </Col>
                    </Row>

                    <Row style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>
                        <Col span={8} style={{ textAlign: "left" }}>GM STORE</Col>
                        <Col span={8} style={{ textAlign: "center" }}>Terhubung Bersama Kami</Col>
                        <Col span={8} style={{ textAlign: "center" }}>Kirim Email</Col>
                    </Row>

                    <Row style={{ color: "#fff", textAlign: "center" }}>
                        <Col span={8} style={{ textAlign: "left" }}>
                            Jl. Raya Bukittinggi - Payakumbuh Jl. Sungai Jernih No.Simpang, Canduang Koto Laweh,
                            Kec. Candung, Kabupaten Agam, Sumatera Barat 26192
                        </Col>
                        <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
                            <Space>
                                <FacebookFilled />
                                <InstagramFilled />
                            </Space>
                        </Col>
                        <Col span={8} style={{ textAlign: "center" }}>
                            <div style={{ display: "flex", width: "60%", gap: 8 }}>
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
