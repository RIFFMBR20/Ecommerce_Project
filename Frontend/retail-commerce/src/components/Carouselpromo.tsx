import React from "react";
import Image from "next/image";
import { Carousel } from "antd";

const containerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: 1200,
};

const contentStyle: React.CSSProperties = {
    margin: 0,
    color: "#ffff",
    textAlign: "center",
    background: "#e30613",
};

export default function Carouselpromo() {
    return (
        <div style={{ ...containerStyle, padding: "0 40px", margin: "0 auto" }}>
            <div style={{ padding: 10, fontWeight: "bold", fontSize: 30 }}>
                HOT Promo
            </div>
            <Carousel autoplay autoplaySpeed={5000}>
                <div>
                    <h3 style={contentStyle}>
                        <Image
                            src="/carousel_promo.png"
                            alt="Promo_carousel"
                            width={875}
                            height={450}
                            style={{ width: "100%", height: "auto", borderRadius: 4 }}
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
                            style={{ width: "100%", height: "auto", borderRadius: 4 }}
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
                            style={{ width: "100%", height: "auto", borderRadius: 4 }}
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
                            style={{ width: "100%", height: "auto", borderRadius: 4 }}
                        />
                    </h3>
                </div>
            </Carousel>
        </div>
    );
}
