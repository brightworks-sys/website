"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NewsItem {
    id: string;
    date: string;
    category: "News" | "Work" | "Blog";
    title: string;
    excerpt: string;
}

const categoryColors = {
    News: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    Work: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    Blog: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
};

export default function NewsList({ initialData }: { initialData: NewsItem[] }) {
    return (
        <>
            <div className="grid gap-8">
                {initialData.map((item, index) => (
                    <motion.article
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link
                            href={`/news/${item.id}`}
                            className="glass group block p-8 rounded-3xl transition-all hover:border-blue-500/50 hover:bg-white/70 dark:hover:bg-black/70"
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                                        {item.date}
                                    </span>
                                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[item.category]}`}>
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                            <h2 className="mt-4 text-2xl font-bold text-zinc-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                                {item.title}
                            </h2>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                                {item.excerpt}
                            </p>
                            <div className="mt-6 flex items-center text-sm font-semibold text-zinc-900 dark:text-white">
                                Read More
                                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                            </div>
                        </Link>
                    </motion.article>
                ))}
            </div>

            <div className="mt-16 flex justify-center gap-4">
                <button className="h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/50">1</button>
                <button className="h-10 w-10 items-center justify-center rounded-full border border-transparent text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800">2</button>
                <button className="h-10 w-10 items-center justify-center rounded-full border border-transparent text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800">3</button>
            </div>
        </>
    );
}
