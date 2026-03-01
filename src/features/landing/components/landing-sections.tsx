import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Shield, Zap } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-100 via-background to-background dark:from-brand-950 dark:via-background dark:to-background"></div>

            <div className="container px-4 md:px-8 mx-auto text-center max-w-5xl">
                <div className="inline-flex items-center rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-sm text-brand mb-8 backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-brand mr-2 animate-pulse"></span>
                    次世代のビジネスインフラストラクチャ
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 text-balance">
                    Empowering Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-400">Bright Works</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
                    洗練されたデザインと堅牢なシステム基盤で、あらゆるクライアントのデジタル変革を加速します。
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="w-full sm:w-auto group">
                        お問い合わせ
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                        サービスを見る
                    </Button>
                </div>
            </div>
        </section>
    );
}

export function FeaturesSection() {
    const features = [
        {
            title: "柔軟なマルチテナント",
            description: "一つの堅牢なシステムで、複数クライアントのデータを安全かつ効率的に分離・管理します。",
            icon: Box,
        },
        {
            title: "高度なセキュリティ",
            description: "Row Level Security (RLS) を駆使し、データベース層からの情報漏洩を完全に防ぎます。",
            icon: Shield,
        },
        {
            title: "圧倒的なパフォーマンス",
            description: "最新のServer Componentsアーキテクチャで、高速なレンダリングとSEO最適化を実現します。",
            icon: Zap,
        },
    ];

    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-8 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Strengths</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Bright Worksプラットフォームを支える、3つの強力な基盤技術
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, i) => (
                        <div key={i} className="glass p-8 rounded-2xl flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                            <div className="h-16 w-16 rounded-full bg-brand/10 flex items-center justify-center mb-6 text-brand">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
