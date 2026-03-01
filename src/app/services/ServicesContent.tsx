"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, Users, CreditCard, BarChart, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const packages = [
    {
        id: "reservation",
        title: "予約・顧客管理基盤",
        target: "サロン、店舗、クリニック等の施設運営者",
        description: "24時間リアルタイム予約、スタッフ指名・シフト連動、電子カルテ、リマインド自動配信を網羅した統合顧客管理システム。",
        icon: Calendar,
        color: "bg-blue-500/10 text-blue-500",
        features: ["リアルタイム予約枠連動", "柔軟なスタッフシフト管理", "セキュアな電子カルテ", "LINE/SMS自動リマインド"],
    },
    {
        id: "staffing",
        title: "人材派遣・マッチング基盤",
        target: "外部指導者派遣、イベントスタッフ管理",
        description: "指導者・スタッフのアサイン管理、条件マッチング、稼働状況の可視化、活動報告フローをデジタル化し、業務効率を劇的に改善します。",
        icon: Users,
        color: "bg-emerald-500/10 text-emerald-500",
        features: ["スマートアサインメント", "稼働状況リアルタイム監視", "スキップレス活動報告", "スタッフ向けマイページ"],
    },
    {
        id: "billing",
        title: "会員連携・決済フロー基盤",
        target: "サブスクリプション提供者、継続課金ビジネス",
        description: "Stripe決済連携を標準搭載。カスタマーマイページから、複雑な手数料（コミッション）の自動計算・分配ロジックまでを完備。",
        icon: CreditCard,
        color: "bg-purple-500/10 text-purple-500",
        features: ["Stripe Connect完全統合", "柔軟なサブスクプラン管理", "複雑な分配ロジック対応", "セルフサービス型マイページ"],
    },
    {
        id: "analytics",
        title: "データ分析・帳票出力システム",
        target: "スポーツチーム、現場の業務統計を必要とする企業",
        description: "現場入力データのリアルタイム集計と、プロ品質のPDFレポート（スコアシート・業務報告書）の自動生成によるデータ活用基盤。",
        icon: BarChart,
        color: "bg-orange-500/10 text-orange-500",
        features: ["リアルタイムダッシュボード", "カスタムレポート生成", "プロ仕様PDFエクスポート", "柔軟なデータインポート"],
    },
];

export default function ServicesContent() {
    return (
        <main className="flex-1 w-full flex flex-col pt-16">
            <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between px-4 md:px-8 mx-auto">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-bold text-xl tracking-tight text-foreground">Bright Works</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
                        <Link href="/services" className="text-foreground transition-colors">Services</Link>
                    </nav>
                </div>
            </header>

            <section className="py-24 bg-muted/20">
                <div className="container px-4 md:px-8 mx-auto text-center max-w-4xl">
                    <Badge variant="secondary" className="mb-6">
                        OEM & Customization Bases
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        ゼロからの開発を凌駕する。<br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-400">完成済みの高品質基盤</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        フルスクラッチの受託開発は「高コスト」「長納期」「バグのリスク」を伴います。
                        Bright Worksでは、既に実戦投入され磨き上げられた4つのコアパッケージを基盤として提供。
                        お客様独自の要件に合わせてカスタマイズ（OEM化）することで、圧倒的な短納期と低コスト、
                        そしてエンタープライズ水準の安定性を同時に実現します。
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container px-4 md:px-8 mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {packages.map((pkg) => {
                            const Icon = pkg.icon;
                            return (
                                <Card key={pkg.id} className="flex flex-col h-full hover:shadow-md transition-shadow duration-300">
                                    <CardHeader>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`p-3 rounded-xl ${pkg.color}`}>
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl">{pkg.title}</CardTitle>
                                                <p className="text-sm font-medium text-muted-foreground mt-1">
                                                    対象: {pkg.target}
                                                </p>
                                            </div>
                                        </div>
                                        <CardDescription className="text-base leading-relaxed hidden sm:block">
                                            {pkg.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <CardDescription className="text-base leading-relaxed sm:hidden flex-1 mb-6">
                                            {pkg.description}
                                        </CardDescription>
                                        <ul className="space-y-3">
                                            {pkg.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                                                    <span className="text-sm font-medium text-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="pt-6 border-t border-border/50">
                                        <Button variant="ghost" className="w-full justify-between group">
                                            詳細をみる・デモをリクエスト
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-brand text-brand-foreground">
                <div className="container px-4 md:px-8 mx-auto text-center max-w-3xl">
                    <h2 className="text-3xl font-bold mb-6">圧倒的なスピードで事業を立ち上げませんか？</h2>
                    <p className="text-brand-foreground/80 mb-10 text-lg">
                        既存のパッケージ基盤を活用することで、最短1ヶ月でのMVPローンチも可能です。
                        まずは貴社のビジネス要件をお聞かせください。
                    </p>
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto font-bold px-8">
                        無料相談・お問い合わせ
                    </Button>
                </div>
            </section>
        </main>
    );
}
