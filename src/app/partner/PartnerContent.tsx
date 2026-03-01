"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Handshake, MessageSquare, Rocket, ArrowRight, CheckCircle2, PhoneCall, Code2, LineChart, Cpu } from "lucide-react";
import Link from "next/link";

const benefits = [
    {
        title: "完全黒衣（くろこ）サポート",
        description: "開発、インフラ構築、保守運用はプロフェッショナルチームである我々がフルリモートで裏方として完結。御社はクライアントとの折衝・提案に専念できます。",
        icon: Code2,
    },
    {
        title: "圧倒的な利益率と短納期",
        description: "ゼロからの受託開発ではないため、原価を抑えつつ短納期での納品が可能。御社の営業利益率を最大化します。",
        icon: LineChart,
    },
    {
        title: "柔軟なカスタマイズ対応",
        description: "予約、決済、マッチングなど、クライアントの業種に合わせた柔軟なUI/UXカスタマイズや機能追加開発もシームレスに対応します。",
        icon: Cpu,
    },
];

const steps = [
    {
        step: "01",
        title: "ヒアリング",
        description: "貴社の抱えるクライアントの課題やご要望についてオンラインでヒアリングを行います。",
    },
    {
        step: "02",
        title: "デモ環境の提供",
        description: "要件に合わせた最適な基盤パッケージのデモ環境をスピーディにご用意いたします。",
    },
    {
        step: "03",
        title: "クライアントへの提案",
        description: "必要に応じて提案資料の作成支援や、黒衣としてのオンライン営業同行サポートも行います。",
    },
    {
        step: "04",
        title: "カスタマイズ開発",
        description: "ご契約後、クライアント固有の要件に合わせて我々のエンジニアチームが開発・構築を行います。",
    },
    {
        step: "05",
        title: "納品・保守",
        description: "貴社ブランド（ホワイトレーベル）として納品。その後の保守運用・追加開発もお任せください。",
    },
];

export default function PartnerContent() {
    return (
        <main className="flex-1 w-full flex flex-col pt-16">
            <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between px-4 md:px-8 mx-auto">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-bold text-xl tracking-tight text-foreground">Bright Works</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
                        <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link>
                        <Link href="/partner" className="text-foreground transition-colors">Partner</Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-brand-950 text-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                <div className="container px-4 md:px-8 mx-auto text-center relative z-10 max-w-4xl">
                    <Badge variant="outline" className="text-brand-100 border-brand-500/50 bg-brand-500/20 mb-6">
                        Web制作会社・広告代理店・コンサルタント様へ
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-balance leading-tight">
                        開発ゼロで、御社の<br />
                        <span className="text-brand-400">「自社サービス」</span>を増やしませんか？
                    </h1>
                    <p className="text-lg md:text-xl text-brand-100/80 leading-relaxed mb-10 text-balance max-w-3xl mx-auto">
                        Bright Worksの高品質な汎用パッケージを、貴社ブランド（ホワイトレーベル）としてエンドクライアントへご提案いただけます。
                        エンジニアの採用・マネジメントリスクを負うことなく、高利益率なシステムソリューションを提供可能です。
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="w-full sm:w-auto text-brand-950 bg-white hover:bg-brand-50 font-bold group">
                            <PhoneCall className="mr-2 h-5 w-5" />
                            パートナー提携のご相談
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-brand-400 hover:bg-brand-900">
                            サービス概要資料ダウンロード
                        </Button>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-background">
                <div className="container px-4 md:px-8 mx-auto">
                    <div className="text-center mb-16">
                        <Handshake className="h-12 w-12 text-brand mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">パートナー提携 3つのメリット</h2>
                        <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                            Bright Worksをシステム開発の「裏方」として活用することで、貴社のビジネススケールを加速させます。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {benefits.map((benefit, i) => {
                            const Icon = benefit.icon;
                            return (
                                <Card key={i} className="border-border/50 hover:border-brand/50 transition-colors duration-300">
                                    <CardHeader>
                                        <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                                            <Icon className="h-6 w-6 text-brand" />
                                        </div>
                                        <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Flow Section */}
            <section className="py-24 bg-muted/30">
                <div className="container px-4 md:px-8 mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <Rocket className="h-12 w-12 text-brand mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">協業のフロー</h2>
                        <p className="text-lg text-muted-foreground text-balance">
                            ご相談からローンチまで、ワンストップで伴走いたします。
                        </p>
                    </div>

                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 bg-card rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-center h-16 w-16 shrink-0 rounded-full bg-brand font-bold text-2xl text-brand-foreground">
                                    {step.step}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                                <div className="hidden md:flex shrink-0 opacity-20">
                                    {index !== steps.length - 1 && <ArrowRight className="h-8 w-8 text-foreground" />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-brand text-brand-foreground text-center">
                <div className="container px-4 md:px-8 mx-auto max-w-3xl">
                    <MessageSquare className="h-16 w-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">まずはカジュアルにお話ししませんか？</h2>
                    <p className="text-lg text-brand-100 mb-10 leading-relaxed text-balance">
                        具体的な案件がお決まりでなくても問題ありません。<br className="hidden md:block" />
                        我々のパッケージ基盤が、貴社のビジネスにどう貢献できるかディスカッションしましょう。
                    </p>
                    <div className="flex justify-center">
                        <Link href="/contact" passHref>
                            <Button size="lg" variant="secondary" className="font-bold px-10 text-lg h-14 w-full sm:w-auto">
                                パートナー提携に関するご相談
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
