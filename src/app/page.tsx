"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-mesh">
      {/* 装飾的な背景要素 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px]"
        />
      </div>

      <div className="container relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-sm font-medium text-zinc-600 backdrop-blur-xl dark:border-zinc-800 dark:bg-black/50 dark:text-zinc-400"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
          New Version 2.0 Released
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 max-w-4xl text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-7xl"
        >
          We Build The <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Future of Web
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl"
        >
          Brightworksは、最先端の技術と卓越したデザインを融合させ、
          あなたのビジネスを次のレベルへと加速させるデジタルエクスペリエンスを提供します。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-medium text-white transition-all hover:bg-zinc-800 hover:scale-105 active:scale-95 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
            プロジェクトを開始する
          </Link>
          <Link href="/services" className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white/50 px-8 text-sm font-medium text-zinc-900 backdrop-blur-xl transition-all hover:bg-zinc-50 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:bg-black/50 dark:text-white dark:hover:bg-zinc-900/50">
            実績を見る
          </Link>
        </motion.div>

        {/* サービス紹介セクション */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-24 grid w-full max-w-5xl gap-6 sm:grid-cols-3"
        >
          {[
            { title: "UI/UX Design", desc: "洗練された直感的なインターフェース設計" },
            { title: "Development", desc: "Next.jsによる高速でスケーラブルな実装" },
            { title: "DX Consulting", desc: "デジタルトランスフォーメーションの戦略立案" },
          ].map((service, i) => (
            <div
              key={i}
              className="glass group flex flex-col items-center p-8 rounded-3xl transition-all hover:-translate-y-2"
            >
              <h3 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
                {service.desc}
              </p>
              <ArrowRight className="h-5 w-5 text-blue-500 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
            </div>
          ))}
        </motion.div>
      </div>

      <footer className="absolute bottom-4 py-4 text-sm text-zinc-500 dark:text-zinc-600">
        © 2026 Brightworks. All rights reserved.
      </footer>
    </main>
  );
}
