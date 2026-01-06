import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "プロジェクトのご相談、お見積りなど、お気軽にお問い合わせください。専門のエンジニアが丁寧に対応いたします。",
};

import ContactContent from "./ContactContent";

export default function ContactPage() {
    return <ContactContent />;
}
