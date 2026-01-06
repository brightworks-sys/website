import { createPublicClient } from "@/lib/supabase/server";
import {
    Users,
    Activity,
    ArrowUpRight,
    ExternalLink,
    MessageSquare,
    Zap,
    Package,
    Clock
} from "lucide-react";
import Link from "next/link";

const apps = [
    { name: "Commission Flow", url: "#", status: "Healthy", type: "FinTech" },
    { name: "Prism (ERP)", url: "#", status: "Healthy", type: "Management" },
    { name: "BRIGHT-MATCH", url: "#", status: "Healthy", type: "Matching" },
];

export default async function AdminDashboard() {
    const supabase = await createPublicClient();

    // お問い合わせ件数の取得（モック/DB）
    const { count: contactCount } = await supabase
        .from("contacts")
        .select("*", { count: "exact", head: true });

    return (
        <div className="space-y-8">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Dashboard Overview</h1>
                    <p className="mt-1 text-zinc-500">最新の運用状況とアクティビティを確認します。</p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 sm:grid-cols-3">
                <div className="glass p-6 rounded-3xl">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
                        <MessageSquare size={24} />
                    </div>
                    <p className="text-sm font-medium text-zinc-500">Marketing Stat</p>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-3xl font-bold dark:text-white">{contactCount || 0}</span>
                        <span className="text-xs text-zinc-400 text-zinc-400">Inquiries</span>
                    </div>
                </div>

                <div className="glass p-6 rounded-3xl">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400">
                        <Zap size={24} />
                    </div>
                    <p className="text-sm font-medium text-zinc-500">Product Health</p>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-3xl font-bold dark:text-white">100%</span>
                        <span className="text-xs text-green-500 font-medium italic">All Systems Operational</span>
                    </div>
                </div>

                <div className="glass p-6 rounded-3xl">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400">
                        <Activity size={24} />
                    </div>
                    <p className="text-sm font-medium text-zinc-500">Active Units</p>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-3xl font-bold dark:text-white">700+</span>
                        <span className="text-xs text-zinc-400 underline underline-offset-4">Scale Ready</span>
                    </div>
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                {/* Product Portal */}
                <div className="glass overflow-hidden rounded-3xl p-8">
                    <h2 className="mb-6 flex items-center gap-2 text-xl font-bold dark:text-white">
                        <Package className="text-blue-500" /> Product Portal
                    </h2>
                    <div className="space-y-4">
                        {apps.map((app) => (
                            <Link
                                key={app.name}
                                href={app.url}
                                className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white/50 p-4 transition-all hover:bg-white dark:border-zinc-800 dark:bg-black/50 dark:hover:bg-black"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                    <div>
                                        <h3 className="font-bold dark:text-white">{app.name}</h3>
                                        <p className="text-xs text-zinc-500">{app.type}</p>
                                    </div>
                                </div>
                                <ArrowUpRight size={18} className="text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="glass overflow-hidden rounded-3xl p-8">
                    <h2 className="mb-6 flex items-center gap-2 text-xl font-bold dark:text-white">
                        <Clock className="text-purple-500" /> Recent Activity
                    </h2>
                    <div className="space-y-6">
                        {[
                            { text: "System Audit: Build success v1.0", time: "10 mins ago", type: "System" },
                            { text: "New Inquiry from: 株式会社Brightworks", time: "2 hours ago", type: "Contact" },
                            { text: "Security Update: Middleware protection active", time: "5 hours ago", type: "Auth" },
                        ].map((activity, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                <div>
                                    <p className="text-sm text-zinc-800 dark:text-zinc-200">{activity.text}</p>
                                    <p className="text-xs text-zinc-500">{activity.time} · {activity.type}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
