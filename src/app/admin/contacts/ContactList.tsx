"use client";

import { useTransition } from "react";
import { updateContactStatus } from "../actions";
import { Mail, Building2, User, Clock, CheckCircle2 } from "lucide-react";

export default function ContactList({ initialContacts }: { initialContacts: any[] }) {
    const [isPending, startTransition] = useTransition();

    const handleStatusUpdate = (id: string, status: string) => {
        startTransition(async () => {
            await updateContactStatus(id, status);
        });
    };

    if (initialContacts.length === 0) {
        return <div className="p-12 text-center text-zinc-500">まだお問い合わせはありません。</div>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead className="bg-zinc-50 dark:bg-zinc-900/50">
                    <tr className="border-b border-zinc-200 dark:border-zinc-800">
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500">Date/Status</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500">Sender</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500">Message</th>
                        <th className="px-4 py-4 sr-only">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    {initialContacts.map((contact) => (
                        <tr key={contact.id} className="bg-white/50 dark:bg-black/50 backdrop-blur-sm transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/40">
                            <td className="px-6 py-6 w-48">
                                <p className="text-sm text-zinc-500 mb-2">
                                    {new Date(contact.created_at).toLocaleDateString('ja-JP')}
                                </p>
                                <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${contact.status === 'completed'
                                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                    }`}>
                                    {contact.status === 'completed' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                                    {contact.status === 'completed' ? '完了' : '未対応'}
                                </div>
                            </td>
                            <td className="px-6 py-6 w-64">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 font-bold dark:text-white">
                                        <User size={14} className="text-zinc-400" /> {contact.name}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                                        <Building2 size={14} /> {contact.company || '個人'}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-blue-500 hover:underline">
                                        <Mail size={14} /> {contact.email}
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-6">
                                <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-3">
                                    {contact.message}
                                </p>
                            </td>
                            <td className="px-6 py-6 text-right">
                                <select
                                    disabled={isPending}
                                    value={contact.status}
                                    onChange={(e) => handleStatusUpdate(contact.id, e.target.value)}
                                    className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                                >
                                    <option value="pending">未対応にする</option>
                                    <option value="completed">完了にする</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
