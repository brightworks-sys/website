"use client";

import { motion } from "framer-motion";
import { Laptop, Database, Users, ArrowRight } from "lucide-react";

const services = [
    {
        title: "DX導入支援",
        description: "アナログな業務プロセスをデジタル化し、業務効率を劇的に改善します。現状分析からツール選定、導入教育まで伴走支援します。",
        icon: <Users className="h-8 w-8 text-blue-600" />,
        features: ["業務フロー分析", "クラウドツール導入", "社内IT教育"],
    },
    {
        title: "カスタムシステム開発",
        description: "Next.jsやSupabaseを活用した、高速で拡張性の高いWebアプリケーションを開発します。高品質なUI/UXと堅牢なバックエンドを提供します。",
        icon: <Laptop className="h-8 w-8 text-purple-600" />,
        features: ["モダンWebアプリ", "API構築", "DB設計・最適化"],
    },
    {
        title: "伴走型技術コンサルティング",
        description: "エンジニアマネージャーの経験を活かし、組織の技術課題解決を支援します。採用支援、コードレビュー、技術選定など多角的にサポート。",
        icon: <Database className="h-8 w-8 text-pink-600" />,
        features: ["技術選定・アーキテクチャ", "チームビルディング", "開発プロセス改善"],
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
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
                    >
                        お客様のビジネス課題に合わせ、最新技術を駆使した最適なソリューションをご提案します。
                    </motion.p>
                </div>
            </section>

            <section className="container mx-auto mt-12 px-6">
                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass group flex flex-col p-8 rounded-3xl transition-all hover:-translate-y-2"
                        >
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                                {service.icon}
                            </div>
                            <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
                                {service.title}
                            </h2>
                            <p className="mb-6 flex-grow text-zinc-600 dark:text-zinc-400">
                                {service.description}
                            </p>
                            <ul className="mb-8 space-y-3">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-sm text-zinc-500 dark:text-zinc-400">
                                        <ArrowRight className="mr-2 h-4 w-4 text-blue-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="group mt-auto inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700">
                                詳細を見る
                                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
