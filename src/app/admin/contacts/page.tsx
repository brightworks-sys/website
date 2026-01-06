import { createPublicClient } from "@/lib/supabase/server";
import { MessageSquare, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import ContactList from "./ContactList";

export const dynamic = "force-dynamic";

export default async function AdminContactsPage() {
    const supabase = await createPublicClient();

    const { data: contacts, error } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        return (
            <div className="flex h-64 flex-col items-center justify-center gap-4 glass rounded-3xl">
                <AlertCircle size={48} className="text-red-500" />
                <p className="text-zinc-500">お問い合わせデータの取得に失敗しました。</p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Contacts Manager</h1>
                <p className="mt-1 text-zinc-500">お客様からのお問い合わせを一覧管理。ステータス更新が可能です。</p>
            </div>

            <div className="glass overflow-hidden rounded-3xl">
                <ContactList initialContacts={contacts || []} />
            </div>
        </div>
    );
}
