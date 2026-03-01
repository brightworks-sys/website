import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MessageSquare, CreditCard, LayoutDashboard, Database, Smartphone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'プロダクト・機能一覧 | Bright Works',
    description: 'Bright Works Platformの提供する700の機能ユニット。予約、CRM、決済など、柔軟な組み合わせで業務システムを構築します。',
};

export default function ProductsPage() {
    return (
        <main className="flex-1 flex flex-col bg-slate-50">
            {/* Header Section */}
            <section className="bg-brand-950 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl text-center">
                    <Badge variant="outline" className="mb-4 border-brand-400 text-brand-100 bg-brand-900/50">標準パッケージ</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">機能ユニット一覧</h1>
                    <p className="text-xl text-brand-100 max-w-2xl mx-auto">
                        700以上の機能ユニットから、必要なものだけを選択。<br className="hidden md:block" />
                        レゴブロックのように組み合わせることで、独自の業務システムが完成します。
                    </p>
                </div>
            </section>

            {/* Main Features Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Reservation Package */}
                    <Card className="hover:shadow-lg transition-shadow bg-white border-0 shadow-md">
                        <CardHeader>
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">予約・スケジュール管理</CardTitle>
                            <CardDescription className="text-base mt-2">
                                店舗の予約枠管理、スタッフのシフトとの連動、空き状況のリアルタイム表示と自動確定機能。
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {/* CRM & Matching */}
                    <Card className="hover:shadow-lg transition-shadow bg-white border-0 shadow-md">
                        <CardHeader>
                            <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                                <Users className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">顧客管理・マッチング</CardTitle>
                            <CardDescription className="text-base mt-2">
                                顧客カルテ、来店履歴の保存のほか、スタッフと顧客の条件マッチング機能など高度なCRM用途。
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {/* LINE Integration */}
                    <Card className="hover:shadow-lg transition-shadow bg-white border-0 shadow-md">
                        <CardHeader>
                            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 text-green-600">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">LINE連携・通知</CardTitle>
                            <CardDescription className="text-base mt-2">
                                LINEログインによるシームレスな会員登録、予約リマインド、セグメント別の一斉配信機能。
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {/* Billing & Settlement */}
                    <Card className="hover:shadow-lg transition-shadow bg-white border-0 shadow-md">
                        <CardHeader>
                            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">決済・定額課金管理</CardTitle>
                            <CardDescription className="text-base mt-2">
                                クレジットカードの単発決済、サロンなどの月額サブスクリプション(継続課金)の管理と自動更新。
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {/* Dashboard */}
                    <Card className="hover:shadow-lg transition-shadow bg-white border-0 shadow-md">
                        <CardHeader>
                            <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4 text-amber-600">
                                <LayoutDashboard className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">管理者ダッシュボード</CardTitle>
                            <CardDescription className="text-base mt-2">
                                売上推移、稼働率、顧客属性などの直感的なグラフ表示と、CSVエクスポート機能。
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {/* Enterprise Database */}
                    <Card className="hover:shadow-lg transition-shadow bg-white border-0 shadow-md">
                        <CardHeader>
                            <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4 text-brand-600">
                                <Database className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">DB & セキュリティ基盤</CardTitle>
                            <CardDescription className="text-base mt-2">
                                テナント間の完全なデータ分離、RLSを活用したエンタープライズ水準のセキュアなデータ保管。
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </section>

            {/* Feature Component Section */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">モバイル最適化されたUI</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                BWSのすべての機能ユニットは、スマートフォンの画面サイズに最適化されています。顧客用画面はもちろんのこと、現場のスタッフが利用する管理・運用画面もスマホのフルブラウザで快適に操作できるため、PCを開く必要がありません。
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <Smartphone className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                                    <span className="text-slate-700">ネイティブアプリのような滑らかな操作感</span>
                                </li>
                                <li className="flex items-start">
                                    <ShieldCheck className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                                    <span className="text-slate-700">WCAG準拠の高アクセシビリティ設計</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-100 rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-x-0 bottom-0 h-3/4 bg-brand-500/10 rounded-t-[3rem] blur-3xl mix-blend-multiply" />
                            <div className="w-64 h-[500px] border-8 border-slate-800 rounded-[3rem] bg-white shadow-2xl relative z-10 flex flex-col overflow-hidden">
                                <div className="bg-brand-900 h-16 w-full flex items-center px-4">
                                    <div className="h-4 w-24 bg-brand-700 rounded-full"></div>
                                </div>
                                <div className="flex-1 p-4 space-y-4">
                                    <div className="h-24 bg-slate-100 rounded-xl"></div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-16 bg-slate-100 rounded-xl"></div>
                                        <div className="h-16 bg-slate-100 rounded-xl"></div>
                                    </div>
                                    <div className="h-32 bg-slate-100 rounded-xl"></div>
                                    <div className="h-12 bg-primary rounded-full mt-auto"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-brand-50 py-16 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-4">これらの機能を使って理想のシステムを</h2>
                    <p className="text-slate-600 mb-8">ご自身のビジネスに合わせた導入プランをお選びください。</p>
                    <div className="flex justify-center gap-4">
                        <Button asChild size="lg"><Link href="/direct">自社で導入する (直販)</Link></Button>
                        <Button asChild size="lg" variant="outline" className="bg-white"><Link href="/oem">販売パートナーになる (OEM)</Link></Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
