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
                            Bright Worksは、現場の「不便」を「感動」に変えるデジタルパートナーです。
                            単なる開発会社ではなく、お客様の事業を深く理解し、自社プロダクト開発で培ったノウハウを惜しみなく提供します。
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                            Commission Flow、Prism、BRIGHT-MATCHといった自社ソリューションを通じて培った
                            「現場で本当に使われるシステム」の知見を活かし、お客様のDXを成功に導きます。
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
                                title: "現場主義のプロダクト開発",
                                desc: "自社システムを自ら運用しているからこそわかる、現場の細かなニーズを形にします。",
                                icon: <Zap className="h-6 w-6 text-yellow-500" />
                            },
                            {
                                title: "最短距離での価値提供",
                                desc: "実績のあるモジュールを組み合わ、高品質なシステムを迅速に構築・提供します。",
                                icon: <Award className="h-6 w-6 text-blue-500" />
                            },
                            {
                                title: "伴走型のDX支援",
                                desc: "システムを作って終わりではなく、運用が定着し利益に貢献するまで徹底サポートします。",
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
                                { label: "屋号", value: "Bright Works (ブライトワークス)" },
                                { label: "代表", value: "大澤 圭一 (Keiichi Osawa)" },
                                { label: "所在地", value: "神奈川県大和市" },
                                { label: "連絡先", value: "brightworks.kanagawa@gmail.com" },
                                { label: "事業内容", value: "DXソリューション提供、システム開発（Commission Flow, Prism, BRIGHT-MATCH 等）" },
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
