import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Brightworksのミッション、強み、代表プロフィールをご紹介します。",
};

import AboutContent from "./AboutContent";

export default function AboutPage() {
    return <AboutContent />;
}
