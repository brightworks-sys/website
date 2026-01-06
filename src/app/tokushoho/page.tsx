import { Metadata } from "next";

export const metadata: Metadata = {
    title: "特定商取引法に基づく表記",
    description: "Bright Worksの特定商取引法に基づく表記に関する情報を掲載しています。",
};

const items = [
    { label: "販売業者", value: "Bright Works (大澤圭一)" },
    { label: "代表責任者", value: "大澤圭一" },
    { label: "所在地", value: "神奈川県大和市渋谷2-1-15-103" },
    { label: "電話番号", value: "07048080196" },
    { label: "メールアドレス", value: "brightworks.kanagawa@gmail.com" },
    { label: "販売価格", value: "各サービス紹介ページ（/services）に記載" },
    { label: "商品代金以外の必要料金", value: "インターネット接続料金、銀行振込時の振込手数料" },
    { label: "支払方法", value: "クレジットカード決済、銀行振込" },
    { label: "支払時期", value: "クレジットカードは各カード会社、銀行振込は申込後5日以内" },
    { label: "サービスの提供時期", value: "決済完了後、即時利用可能" },
    { label: "返品・キャンセル", value: "デジタルコンテンツの性質上、決済完了後の返品・返金はできません。" },
    { label: "動作環境", value: "最新版のGoogle Chrome, Safari, Microsoft Edge" },
];

export default function TokushohoPage() {
    return (
        <main className="min-h-screen pb-24">
            <section className="bg-mesh py-24">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
                        特定商取引法に基づく表記
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                        法的義務に基づき、販売者・サービスに関する重要情報を記載いたします。
                    </p>
                </div>
            </section>

            <section className="container mx-auto mt-12 px-6">
                <div className="mx-auto max-w-4xl glass overflow-hidden rounded-3xl">
                    <table className="w-full text-left">
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                            {items.map((item) => (
                                <tr key={item.label} className="bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                                    <th className="w-1/3 px-6 py-6 font-semibold text-zinc-900 dark:text-white sm:px-12">
                                        {item.label}
                                    </th>
                                    <td className="px-6 py-6 text-zinc-600 dark:text-zinc-400 sm:px-12 whitespace-pre-wrap">
                                        {item.value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-12 text-center text-sm text-zinc-500">
                    <p>更新日: 2026年1月7日</p>
                </div>
            </section>
        </main>
    );
}
