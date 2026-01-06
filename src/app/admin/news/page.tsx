"use client";

import { useTransition, useState } from "react";
import { createNews } from "../actions";
import { Newspaper, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminNewsPage() {
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        const formData = new FormData(e.currentTarget);

        startTransition(async () => {
            try {
                await createNews(formData);
                setSuccess(true);
                setTimeout(() => setSuccess(false), 3000);
                (e.target as HTMLFormElement).reset();
            } catch (err: any) {
                setError(err.message || "投稿に失敗しました。");
            }
        });
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">News Post</h1>
                <p className="mt-1 text-zinc-500">公式サイトのニュース・実績セクションへ即座に投稿します。</p>
            </div>

            <div className="max-w-3xl glass p-8 rounded-3xl sm:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <AnimatePresence>
                        {success && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-2 rounded-xl bg-green-500/10 p-4 text-sm text-green-600 dark:bg-green-500/20 dark:text-green-400"
                            >
                                <CheckCircle2 size={16} />
                                ニュースを正常に投稿しました！
                            </motion.div>
                        )}
                        {error && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex items-center gap-2 rounded-xl bg-red-500/10 p-4 text-sm text-red-500 dark:bg-red-500/20"
                            >
                                <AlertCircle size={16} />
                                {error}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-900 dark:text-white">タイトル</label>
                            <input
                                name="title"
                                required
                                className="w-full rounded-xl border border-zinc-200 bg-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-black/50 dark:text-white"
                                placeholder="新しいニュースのタイトルを入力"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-900 dark:text-white">カテゴリ</label>
                            <select
                                name="category"
                                required
                                className="w-full rounded-xl border border-zinc-200 bg-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-black/50 dark:text-white"
                            >
                                <option value="News">News</option>
                                <option value="Work">Work</option>
                                <option value="Blog">Blog</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-900 dark:text-white">本文・詳細</label>
                        <textarea
                            name="content"
                            required
                            rows={10}
                            className="w-full rounded-xl border border-zinc-200 bg-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-black/50 dark:text-white"
                            placeholder="記事の内容を詳細に記入してください。マークダウン形式は現在非対応ですが、将来的に対応予定です。"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-center font-bold text-white transition-all hover:bg-blue-700 disabled:opacity-50"
                    >
                        {isPending ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                        {isPending ? "投稿中..." : "記事を公開する"}
                    </button>
                </form>
            </div>
        </div>
    );
}
