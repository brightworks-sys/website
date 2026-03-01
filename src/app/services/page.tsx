import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
    title: "Services | Bright Works",
    description: "完成済みの高品質な基盤をカスタマイズ・OEM提供。短納期・低コストで次世代のビジネスインフラストラクチャを実現します。",
};

export default function ServicesPage() {
    return <ServicesContent />;
}
