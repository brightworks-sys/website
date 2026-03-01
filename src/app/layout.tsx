import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "Bright Works",
    description: "Innovative business solutions by Bright Works",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" className="scroll-smooth">
            <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
