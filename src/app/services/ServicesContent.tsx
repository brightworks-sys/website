"use client";

import { motion } from "framer-motion";
import { Laptop, Database, Users, ArrowRight } from "lucide-react";

const services = [
    {
        title: "Commission Flow",
        subtitle: "歩合制給与管理システム",
        price: "初期費用 0円 / 月額 10,000円〜（税込）",
        description: "複雑な歩合計算を自動化し、給与明細の発行までを一気通貫でサポート。エクセル管理の限界を突破し、計算ミスをゼロにします。",
        icon: <Database className="h-8 w-8 text-blue-600" />,
        features: ["自動歩合計算エンジン", "デジタル給与明細発行", "スタッフ売上分析パネル"],
        details: "多くの美容室や訪問マッサージ等の現場で発生する「複雑な歩合テーブル」に対応。スタッフ自身の売上確認もモバイルから可能になり、透明性の高い組織運営を実現します。"
    },
    {
        title: "Prism",
        subtitle: "スクール運営・教室DXプラットフォーム",
        price: "月額 5,000円〜（税込・生徒数に応じた従量課金）",
        description: "生徒管理、出席確認、月謝決済、振替調整を一つの画面で完結。事務作業を80%削減し、教育の質向上に集中できる環境を作ります。",
        icon: <Users className="h-8 w-8 text-purple-600" />,
        features: ["QRコード出席・入退室管理", "クレジット自動決済連携", "LINE通知自動化"],
        details: "小規模な教室から複数拠点のスクールまで対応。特に振替レッスンの調整や、未払月謝の自動催促機能により、経営の安定化と事務負担の軽減を同時に実現します。"
    },
    {
        title: "BRIGHT-MATCH",
        subtitle: "講師・スタッフ派遣管理システム",
        price: "個別見積もり（要相談）",
        description: "案件とスタッフの最適なマッチングをAIと独自アルゴリズムで支援。スケジュール調整から現場報告、請求管理までデジタルで一元化。",
        icon: <Laptop className="h-8 w-8 text-pink-600" />,
        features: ["AIマッチング・レコメンド", "シフト・スケジュール予約", "リアルタイム現場報告"],
        details: "講師派遣ビジネス特有の「多数対多数」の調整を効率化。スタッフのスキル、距離、希望条件を瞬時に照会し、最適なアサインを提案。ヒューマンエラーによる機会損失を防ぎます。"
    },
];

export default function ServicesContent() {
    return (
        <main className="min-h-screen pb-24">
            <section className="bg-mesh py-24">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl"
                    >
                        Our Products
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
                    >
                        現場の課題から生まれた、本当に使いやすいDXソリューションを提供します。
                    </motion.p>
                </div>
            </section>

            <section className="container mx-auto mt-12 px-6">
                <div className="grid gap-8 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass group flex flex-col p-8 rounded-3xl transition-all hover:-translate-y-2 border border-zinc-200/50 dark:border-zinc-800/50"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                                    {service.icon}
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">SaaS</span>
                            </div>

                            <h2 className="mb-1 text-2xl font-bold text-zinc-900 dark:text-white">
                                {service.title}
                            </h2>
                            <p className="mb-4 text-xs font-bold text-blue-600 dark:text-blue-400">
                                {service.subtitle}
                            </p>

                            <div className="mb-6 rounded-xl bg-blue-50/50 p-4 dark:bg-blue-900/10">
                                <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                                    {service.price}
                                </p>
                            </div>

                            <p className="mb-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                {service.description}
                            </p>

                            <div className="mb-8 space-y-4">
                                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Key Features</p>
                                <ul className="space-y-3">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                            <ArrowRight className="mr-2 h-4 w-4 text-blue-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <details className="group mt-auto">
                                <summary className="flex cursor-pointer items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 list-none">
                                    <span>詳細・解決できる課題</span>
                                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-open:rotate-90 group-hover:translate-x-1" />
                                </summary>
                                <div className="mt-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 p-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 animate-in fade-in slide-in-from-top-2">
                                    {service.details}
                                </div>
                            </details>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
