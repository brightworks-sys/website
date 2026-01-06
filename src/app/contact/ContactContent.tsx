"use client";

import { useActionState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { submitContact } from "./actions";

const formSchema = z.object({
    name: z.string().min(2, "お名前は2文字以上で入力してください。"),
    email: z.string().email("有効なメールアドレスを入力してください。"),
    company: z.string().optional(),
    message: z.string().min(10, "お問い合わせ内容は10文字以上で入力してください。"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactContent() {
    const [state, formAction] = useActionState(submitContact, { success: false });
    const [isPending, startTransition] = useTransition();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormValues) => {
        startTransition(async () => {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                if (value) formData.append(key, value);
            });
            await formAction(formData);
        });
    };

    return (
        <main className="min-h-screen pb-24">
            <section className="bg-mesh py-24">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl"
                    >
                        Contact
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
                    >
                        プロジェクトのご相談、お見積りなど、お気軽にお問い合わせください。
                    </motion.p>
                </div>
            </section>

            <section className="container mx-auto mt-12 px-6">
                <div className="mx-auto max-w-3xl">
                    <AnimatePresence mode="wait">
                        {!state.success ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="glass p-8 rounded-3xl sm:p-12"
                            >
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    {state.error && (
                                        <div className="flex items-center gap-2 rounded-xl bg-red-500/10 p-4 text-sm text-red-500 dark:bg-red-500/20">
                                            <AlertCircle size={16} />
                                            {state.error}
                                        </div>
                                    )}

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-zinc-900 dark:text-white">お名前</label>
                                            <input
                                                {...register("name")}
                                                className="w-full rounded-xl border border-zinc-200 bg-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-black/50 dark:text-white"
                                                placeholder="山田 太郎"
                                            />
                                            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-zinc-900 dark:text-white">メールアドレス</label>
                                            <input
                                                {...register("email")}
                                                className="w-full rounded-xl border border-zinc-200 bg-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-black/50 dark:text-white"
                                                placeholder="example@mail.com"
                                            />
                                            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-zinc-900 dark:text-white">会社・組織名（任意）</label>
                                        <input
                                            {...register("company")}
                                            className="w-full rounded-xl border border-zinc-200 bg-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-black/50 dark:text-white"
                                            placeholder="株式会社Brightworks"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-zinc-900 dark:text-white">お問い合わせ内容</label>
                                        <textarea
                                            {...register("message")}
                                            rows={6}
                                            className="w-full rounded-xl border border-zinc-200 bg-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-black/50 dark:text-white"
                                            placeholder="プロジェクトの詳細やご相談内容を入力してください。"
                                        />
                                        {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isPending}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-center font-bold text-white transition-all hover:bg-blue-700 disabled:opacity-50"
                                    >
                                        {isPending ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                                        {isPending ? "送信中..." : "メッセージを送信する"}
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="thanks"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="glass p-12 text-center rounded-3xl"
                            >
                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
                                    <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
                                </div>
                                <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white">お問い合わせありがとうございます</h2>
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    内容を確認の上、通常2〜3営業日以内に担当者より折り返しご連絡させていただきます。
                                </p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="mt-8 text-sm font-semibold text-blue-600 hover:text-blue-700"
                                >
                                    ← フォームに戻る
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </main>
    );
}
