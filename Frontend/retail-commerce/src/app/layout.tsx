import "./globals.css";
import Navbar from "@/components/Navbar";
import Footers from "@/components/Footers";

import Layout, { Content } from "antd/es/layout/layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Layout>
            <Navbar />
            <Content style={{ padding: "24px 50px", justifyContent: "Center" }}>
                {children}
            </Content>
            <Footers />
        </Layout>
        </body>
        </html>
    );
}
