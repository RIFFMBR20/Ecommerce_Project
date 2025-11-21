import "./globals.css";
import Navbar from "@/components/Navbar";
import Footers from "@/components/Footers";
import Themeconfig from "@/components/Themeconfig";

import Layout, { Content } from "antd/es/layout/layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Themeconfig>
            <Layout>
                <Navbar />
                <Content style={{ padding: "24px 50px" }}>
                    {children}
                </Content>
                <Footers />
            </Layout>
        </Themeconfig>
        </body>
        </html>
    );
}
