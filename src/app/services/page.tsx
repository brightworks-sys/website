import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description: "中小企業・個人事業主向けのDX導入支援、カスタムシステム開発、技術コンサルティングを提供します。",
};

import ServicesContent from "./ServicesContent";

export default function ServicesPage() {
    return <ServicesContent />;
}
