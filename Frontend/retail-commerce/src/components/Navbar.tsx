import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Menu, Layout,} from "antd";

const Header = Layout

const items = [
    { key: "1", label: <Link href="/">Home</Link> },
    { key: "2", label: <Link href="/marketplace">Marketplace</Link> },
    { key: "3", label: <Link href="/about">About</Link> },
];

export default function Navbar() {
    return (
        <Header
            style={{
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 90,
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: 1200,
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", flexShrink: 0, marginRight: 24 }}>
                    <Image
                        src="/logo.jpeg"
                        alt="Logo"
                        width={60}
                        height={60}
                        style={{ borderRadius: 4, objectFit: "contain" }}
                    />

                    <span style={{ marginLeft: 10, fontSize: 26, fontWeight: "bold", fontFamily: "cursive" }}>
                        GM Store
                    </span>
                </div>

                <Menu
                    mode="horizontal"
                    theme="light"
                    defaultSelectedKeys={["1"]}
                    items={items}
                    style={{
                        flex: 1,
                        justifyContent: "flex-end",
                        fontWeight: "bold",
                        border: "none",
                    }}
                />
            </div>
        </Header>
    );
}
