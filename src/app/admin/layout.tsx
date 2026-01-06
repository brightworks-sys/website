"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    MessageSquare,
    Newspaper,
    ExternalLink,
    LogOut,
    Settings,
    ShieldCheck
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const menuItems = [
    { href: "/admin", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { href: "/admin/contacts", label: "Contacts", icon: <MessageSquare size={20} /> },
    { href: "/admin/news", label: "News Post", icon: <Newspaper size={20} /> },
];

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const supabase = createClient();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/");
    };

    return (
        <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 hidden h-full w-64 border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 lg:block">
                <div className="flex h-full flex-col p-6">
                    <div className="mb-10 flex items-center gap-2 px-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                            <ShieldCheck size={20} />
                        </div>
                        <span className="text-xl font-bold tracking-tight dark:text-white">BW-OS</span>
                    </div>

                    <nav className="flex-1 space-y-2">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${pathname === item.href
                                        ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                                        : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                                    }`}
                            >
                                {item.icon}
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto space-y-2 border-t border-zinc-200 pt-6 dark:border-zinc-800">
                        <button
                            onClick={handleLogout}
                            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                        >
                            <LogOut size={20} />
                            Sign Out
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 lg:pl-64">
                <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-zinc-200 bg-white/80 px-8 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80">
                    <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">
                        Bright Works Operational System v1.0
                    </h2>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            target="_blank"
                            className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-blue-600 dark:text-zinc-400"
                        >
                            View Site <ExternalLink size={14} />
                        </Link>
                    </div>
                </header>

                <main className="p-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {children}
                    </motion.div>
                </main>
            </div>
        </div>
    );
}
