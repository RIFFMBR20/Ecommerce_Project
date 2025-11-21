import { ConfigProvider } from "antd";

export default function Themeconfig({ children }: { children: React.ReactNode }) {
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
                        colorPrimary: '#ed1b24',
                        colorPrimaryHover: '#ff4d4f',
                        colorPrimaryActive: '#bf161e',
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
}
