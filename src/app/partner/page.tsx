import { Metadata } from "next";
import PartnerContent from "./PartnerContent";

export const metadata: Metadata = {
    title: "Partner Alliance | Bright Works",
    description: "Web制作会社・コンサルタント様向けOEM・パートナー募集。開発ゼロで自社サービスを増やし、圧倒的な利益率と短納期を実現します。",
};

export default function PartnerPage() {
    return <PartnerContent />;
}
