import { Metadata } from "next";
import { createPublicClient } from "@/lib/supabase/server";
import NewsList from "./NewsList";

export const metadata: Metadata = {
    title: "News & Works",
    description: "最新のお知らせ、制作実績、技術ブログなどの最新情報を発信しています。",
};

export const revalidate = 3600; // 1時間ごとに再生成 (ISR)

interface NewsItem {
    id: string;
    date: string;
    category: "News" | "Work" | "Blog";
    title: string;
    excerpt: string;
}

export default async function NewsPage() {
    let newsData: NewsItem[] = [];

    try {
        const supabase = await createPublicClient();
        const { data, error } = await supabase
            .from("news")
            .select("*")
            .order("published_at", { ascending: false });

        if (error || !data) {
            throw new Error("Failed to fetch news");
        }

        newsData = data.map((item: any) => ({
            id: item.id,
            date: new Date(item.published_at).toLocaleDateString('ja-JP').replace(/\//g, '.'),
            category: item.category as any,
            title: item.title,
            excerpt: item.content.slice(0, 100) + (item.content.length > 100 ? "..." : ""),
        }));
    } catch (err) {
        console.error("News fetch error:", err);
        // フォールバック用のダミーデータ（開発中や環境変数未設定時）
        newsData = [
            {
                id: "1",
                date: "2026.01.06",
                category: "News",
                title: "Webサイトを全面リニューアルしました (Fallback)",
                excerpt: "最新の技術スタックを導入し、より快適なブラウジング体験を提供できるようになりました。",
            },
            {
                id: "2",
                date: "2025.12.20",
                category: "Work",
                title: "地域スポーツ振興プラットフォーム「Region Shift」を受注開発 (Fallback)",
                excerpt: "マルチテナント構成のSaaSとして、全国のスポーツ団体を支援するシステムを構築しました。",
            },
        ];
    }

    return (
        <main className="min-h-screen pb-24">
            <section className="bg-mesh py-24">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
                        News & Works
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                        最新のお知らせや、私たちが手がけたプロジェクト、技術に関する情報を発信します。
                    </p>
                </div>
            </section>

            <section className="container mx-auto mt-12 px-6">
                <NewsList initialData={newsData} />
            </section>
        </main>
    );
}
