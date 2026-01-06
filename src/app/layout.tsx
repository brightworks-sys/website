import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Brightworks | 次世代のWebソリューション",
    template: "%s | Brightworks"
  },
  description: "Brightworksは、最新技術を駆使してビジネスのデジタル変革を加速させるWeb開発パートナーです。",
  keywords: ["Web開発", "Next.js", "DX", "ソリューション", "Supabase", "UXデザイン"],
  authors: [{ name: "Ryo Uchida" }],
  metadataBase: new URL("https://bright-works.jp"), // プレースホルダー
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://bright-works.jp",
    title: "Brightworks | 次世代のWebソリューション",
    description: "最新技術とデザインでビジネスを加速させるデジタルパートナー。DXを通じた価値創造を支援します。",
    siteName: "Brightworks",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brightworks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brightworks | 次世代のWebソリューション",
    description: "最新技術とデザインでビジネスを加速させるデジタルパートナー。",
    images: ["/og-image.png"],
    creator: "@brightworks_ryo", // プレースホルダー
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50`}
      >
        <Header />
        <div className="pt-16 md:pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
