"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { motion } from "framer-motion";
import { LogIn, Loader2, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const supabase = createClient();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const { error: loginError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (loginError) {
            setError("ログインに失敗しました。メールアドレスとパスワードを確認してください。");
            setIsLoading(false);
        } else {
            router.push("/admin");
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-mesh px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass w-full max-w-md p-8 rounded-3xl sm:p-12"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">BW-OS Login</h1>
                    <p className="text-zinc-600 dark:text-zinc-400">管理者用ダッシュボードへログイン</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    {error && (
                        <div className="flex items-center gap-2 rounded-xl bg-red-500/10 p-4 text-sm text-red-500 dark:bg-red-500/20">
                            <AlertCircle size={16} />
                            {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-900 dark:text-white">メールアドレス</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full rounded-xl border border-zinc-200 bg-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-black/50 dark:text-white"
                            placeholder="admin@bright-works.jp"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-900 dark:text-white">パスワード</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full rounded-xl border border-zinc-200 bg-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-black/50 dark:text-white"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-center font-bold text-white transition-all hover:bg-blue-700 disabled:opacity-50"
                    >
                        {isLoading ? <Loader2 className="animate-spin" /> : <LogIn size={20} />}
                        {isLoading ? "ログイン中..." : "ログインする"}
                    </button>
                </form>
            </motion.div>
        </main>
    );
}
