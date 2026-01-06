"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap } from "lucide-react";

export default function AboutContent() {
    return (
        <main className="min-h-screen pb-24">
            <section className="bg-mesh py-24">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl"
                    >
                        About Brightworks
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
                    >
                        ビジネスとテクノロジーの架け橋となり、持続可能な進化を共創します。
                    </motion.p>
                </div>
            </section>

            <section className="container mx-auto mt-12 px-6">
                <div className="grid gap-16 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-white">Mission</h2>
                        <p className="mb-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                            私たちは単なる開発会社ではありません。お客様の「パートナー」として、
                            ビジネスの本質的な課題を深く理解し、エンジニアリングの力で解決策を具現化します。
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                            元マネージャーエンジニアとしての知見を活かし、スピード感のある開発と、
                            将来の拡張性を見据えた高品質なアーキテクチャを両立させます。
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {[
                            {
                                title: "スピードと品質の両立",
                                desc: "最新のモダンスタックを熟知し、迅速なプロトタイピングから商用レベルの実装まで最短距離で提供します。",
                                icon: <Zap className="h-6 w-6 text-yellow-500" />
                            },
                            {
                                title: "ビジネス視点の技術提案",
                                desc: "技術を目的化せず、ROI（投資対効果）を重視した最適な技術選定と機能実装を提案します。",
                                icon: <Award className="h-6 w-6 text-blue-500" />
                            },
                            {
                                title: "徹底した透明性",
                                desc: "開発プロセスの可視化と密なコミュニケーションにより、安心してお任せいただける信頼関係を構築します。",
                                icon: <CheckCircle2 className="h-6 w-6 text-green-500" />
                            },
                        ].map((strength) => (
                            <div key={strength.title} className="flex gap-4">
                                <div className="mt-1 flex-shrink-0">{strength.icon}</div>
                                <div>
                                    <h3 className="mb-2 font-bold text-zinc-900 dark:text-white">{strength.title}</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400">{strength.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800"
                >
                    <table className="w-full text-left">
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
                            {[
                                { label: "屋号", value: "Brightworks (ブライトワークス)" },
                                { label: "設立", value: "2024年4月" },
                                { label: "代表", value: "内田 亮 (Ryo Uchida)" },
                                { label: "所在地", value: "神奈川県藤沢市" },
                                { label: "事業内容", value: "Webアプリケーション開発、DXコンサルティング、技術顧問" },
                            ].map((row) => (
                                <tr key={row.label} className="bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                                    <th className="w-1/3 px-6 py-6 font-semibold sm:px-12">{row.label}</th>
                                    <td className="px-6 py-6 sm:px-12">{row.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </section>
        </main>
    );
}
