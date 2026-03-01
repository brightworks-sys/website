import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Store, CalendarHeart, ClipboardList, Send, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: '直販・店舗導入 | Bright Works',
    description: '店舗向け（予約・カルテ・LINE通知）のシステムを統合。バラバラだった管理をBright Worksで一つにまとめます。',
};

export default function DirectPage() {
    return (
        <main className="flex-1 flex flex-col">
            {/* Hero */}
            <section className="bg-brand-50 pt-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="mx-auto max-w-5xl text-center relative z-10">
                    <Badge variant="outline" className="mb-6 border-brand-400 text-brand-700 bg-white">直販・自社導入</Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
                        バラバラのシステムから<br className="hidden md:block" />
                        解放される。
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        予約はA社、決済はB社、カルテは紙やExcel...。<br className="hidden md:block" />
                        BWSなら、店舗運営に必要なすべての機能を一つのシステム（シングル・ソース・オブ・トゥルース）に統合できます。
                    </p>
                    <Button size="lg" className="h-14 px-8 text-lg" asChild>
                        <Link href="/pricing">料金プランを見る <ArrowRight className="ml-2 w-5 h-5" /></Link>
                    </Button>
                </div>
            </section>

            {/* Issues & Solutions */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Store className="w-16 h-16 mx-auto text-primary mb-6" />
                        <h2 className="text-3xl font-bold mb-4">店舗とスタッフの負担を劇的に軽減</h2>
                        <p className="text-lg text-slate-600">顧客にはLINEのシームレスな体験を、スタッフには1つの画面で完結する操作性を。</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
                        <div className="space-y-8">
                            <div className="flex gap-4 p-6 bg-red-50 rounded-2xl border border-red-100 opacity-60">
                                <div className="text-red-500 font-bold text-xl flex-shrink-0">Before</div>
                                <div>
                                    <p className="text-slate-700">【予約表とカルテの往復】電話予約が入るたびにCRMソフトを開き、予約システムを手動で埋めて、LINEで返信する等、オペレーションが崩壊気味。</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 bg-brand-50/50 rounded-2xl border border-brand-100 shadow-md transform md:-translate-x-4">
                                <div className="text-primary font-bold text-xl flex-shrink-0">After</div>
                                <div>
                                    <p className="text-slate-800 font-semibold mb-2">BWSなら全てが連動します</p>
                                    <p className="text-slate-600">LINEからお客様が予約した瞬間に、顧客カルテに履歴が反映され、担当スタッフのスマホに通知。来店時はスマホ内で決済まで完了します。</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Card className="border-slate-100 shadow-md">
                                <CardHeader>
                                    <CalendarHeart className="w-8 h-8 text-rose-500 mb-3" />
                                    <CardTitle className="text-lg">LINEかんたん予約</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 text-sm">ホットペッパーなどの外部媒体に依存しない、自社のLINE公式アカウントからの直接導線を構築。</p>
                                </CardContent>
                            </Card>
                            <Card className="border-slate-100 shadow-md">
                                <CardHeader>
                                    <ClipboardList className="w-8 h-8 text-blue-500 mb-3" />
                                    <CardTitle className="text-lg">電子カルテ・同意書</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 text-sm">お客様の施術記録や写真、電子署名付きの同意書をスマホ一つで管理。ペーパーレス化を実現。</p>
                                </CardContent>
                            </Card>
                            <Card className="border-slate-100 shadow-md sm:col-span-2">
                                <CardHeader>
                                    <Send className="w-8 h-8 text-green-500 mb-3" />
                                    <CardTitle className="text-lg">自動リマインド＆ステップ配信</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 text-sm">「来店1日前の予約確認通知」や「来店3週間後のフォローアップ」をLINEで完全自動化。失客を防ぎ、リピート率を劇的に向上させます。</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
