'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Building2, Store } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
    const [activeTab, setActiveTab] = useState<'enduser' | 'oem'>('enduser');

    return (
        <main className="flex-1 flex flex-col bg-slate-50">
            {/* Header */}
            <section className="bg-brand-950 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">明朗でシンプルな料金体系</h1>
                    <p className="text-xl text-brand-100 max-w-2xl mx-auto mb-10">
                        初期費用の大きな「作らないDX」だからこそ可能な、納得のプライシングです。
                    </p>

                    {/* Tab Switcher */}
                    <div className="inline-flex bg-brand-900 rounded-lg p-1">
                        <button
                            onClick={() => setActiveTab('enduser')}
                            className={`flex items-center px-6 py-3 rounded-md text-sm font-medium transition-colors ${activeTab === 'enduser'
                                    ? 'bg-white text-brand-950 shadow-sm'
                                    : 'text-brand-100 hover:text-white hover:bg-brand-800'
                                }`}
                        >
                            <Store className="w-4 h-4 mr-2" />
                            直販・店舗向けプラン
                        </button>
                        <button
                            onClick={() => setActiveTab('oem')}
                            className={`flex items-center px-6 py-3 rounded-md text-sm font-medium transition-colors ${activeTab === 'oem'
                                    ? 'bg-white text-brand-950 shadow-sm'
                                    : 'text-brand-100 hover:text-white hover:bg-brand-800'
                                }`}
                        >
                            <Building2 className="w-4 h-4 mr-2" />
                            OEMパートナー向けプラン
                        </button>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full -mt-10">
                {activeTab === 'enduser' ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Card className="flex flex-col border-slate-200">
                            <CardHeader>
                                <CardTitle>ライト</CardTitle>
                                <CardDescription>小さく始めたい個人店舗様に。</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="text-4xl font-black mb-2">¥9,800<span className="text-lg font-normal text-slate-500"> / 月</span></div>
                                <p className="text-sm text-slate-500 mb-6">初期費用 ¥50,000</p>
                                <ul className="space-y-3 mt-8">
                                    <li className="flex items-center text-sm"><Check className="w-4 h-4 mr-2 text-primary" /> Web予約受付</li>
                                    <li className="flex items-center text-sm"><Check className="w-4 h-4 mr-2 text-primary" /> 基本CRM（顧客管理）</li>
                                    <li className="flex items-center text-sm"><Check className="w-4 h-4 mr-2 text-primary" /> テキスト通知</li>
                                    <li className="flex items-center text-sm text-slate-400"><Check className="w-4 h-4 mr-2 text-slate-300" /> LINE連携不可</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant="outline" asChild><Link href="/contact">問い合わせる</Link></Button>
                            </CardFooter>
                        </Card>

                        <Card className="flex flex-col border-primary shadow-xl scale-105 relative z-10 bg-white">
                            <div className="absolute top-0 inset-x-0 h-1 bg-primary rounded-t-xl" />
                            <Badge className="absolute top-0 right-4 -translate-y-1/2 bg-primary">一番人気</Badge>
                            <CardHeader>
                                <CardTitle>スタンダード</CardTitle>
                                <CardDescription>LINE連携と自動化で業務効率を最大化。</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="text-4xl font-black mb-2">¥29,800<span className="text-lg font-normal text-slate-500"> / 月</span></div>
                                <p className="text-sm text-slate-500 mb-6">初期費用 ¥150,000</p>
                                <ul className="space-y-3 mt-8">
                                    <li className="flex items-center text-sm"><Check className="w-4 h-4 mr-2 text-primary" /> ライトの全機能</li>
                                    <li className="flex items-center text-sm"><Check className="w-4 h-4 mr-2 text-primary" /> <strong className="ml-1 text-slate-800">LINEかんたん予約連動</strong></li>
                                    <li className="flex items-center text-sm"><Check className="w-4 h-4 mr-2 text-primary" /> リマインド自動化</li>
                                    <li className="flex items-center text-sm"><Check className="w-4 h-4 mr-2 text-primary" /> 決済機能（Stripe連動）</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" asChild><Link href="/contact">問い合わせる</Link></Button>
                            </CardFooter>
                        </Card>

                        <Card className="flex flex-col border-slate-200 bg-slate-50">
                            <CardHeader>
                                <CardTitle>エンタープライズ</CardTitle>
                                <CardDescription>複数店舗展開・フランチャイズ本部に。</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="text-4xl font-black mb-2">要お見積り</div>
                                <p className="text-sm text-slate-500 mb-6">要件定義からフルサポート</p>
                                <ul className="space-y-3 mt-8">
                                    <li className="flex items-center text-sm"><Check className="w-4 h-4 mr-2 text-primary" /> 専用カスタマイズ</li>
                                    <li className="flex items-center text-sm"><Check className="w-4 h-4 mr-2 text-primary" /> 複数店舗の権限管理</li>
                                    <li className="flex items-center text-sm"><Check className="w-4 h-4 mr-2 text-primary" /> 既存システムAPI連携</li>
                                    <li className="flex items-center text-sm"><Check className="w-4 h-4 mr-2 text-primary" /> 専任サクセス担当</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-slate-800 hover:bg-slate-900" asChild><Link href="/contact">資料請求</Link></Button>
                            </CardFooter>
                        </Card>
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto">
                        <Card className="border-primary shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="bg-brand-900 text-white p-8 md:w-2/5 flex flex-col justify-center">
                                    <Badge className="w-fit mb-4 bg-brand-700 hover:bg-brand-700">OEM特別テーブル</Badge>
                                    <h3 className="text-3xl font-bold mb-4">パートナー契約</h3>
                                    <p className="text-brand-100 mb-6">
                                        自社ブランドでBWSを展開し、顧客への導入支援とストック収益の獲得を実現します。
                                    </p>
                                    <div className="text-5xl font-black mt-auto">¥50,000<span className="text-xl font-normal text-brand-200"> / 月〜</span></div>
                                    <p className="text-sm text-brand-300 mt-2">※最小コミットメント枠数あり</p>
                                </div>
                                <div className="p-8 md:w-3/5">
                                    <h4 className="font-bold text-lg mb-4">OEMパートナー提供内容</h4>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start">
                                            <div className="bg-primary/10 p-1 rounded-full mr-3 mt-0.5"><Check className="w-4 h-4 text-primary" /></div>
                                            <div>
                                                <div className="font-medium">ホワイトラベル環境の提供</div>
                                                <div className="text-sm text-slate-500">独自ドメイン、ロゴ、ブランドカラーを用いた専用のプラットフォーム環境を構築。</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-primary/10 p-1 rounded-full mr-3 mt-0.5"><Check className="w-4 h-4 text-primary" /></div>
                                            <div>
                                                <div className="font-medium">特別卸価格の適用</div>
                                                <div className="text-sm text-slate-500">直販価格から大幅なディスカウントを適用。ご自身で販売価格を決めて頂けます。</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-primary/10 p-1 rounded-full mr-3 mt-0.5"><Check className="w-4 h-4 text-primary" /></div>
                                            <div>
                                                <div className="font-medium">技術サポート（黒衣対応）</div>
                                                <div className="text-sm text-slate-500">サーバー保守、障害対応、機能のアップデート等は弊社がバックグラウンドで実施。</div>
                                            </div>
                                        </li>
                                    </ul>
                                    <Button size="lg" className="w-full" asChild><Link href="/contact">パートナー制度の資料を取り寄せる</Link></Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                )}
            </section>

            {/* Company Info (事業者概要) */}
            <section id="company" className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-8 text-center">事業者概要</h2>
                    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
                        <dl className="divide-y divide-slate-200">
                            <div className="py-4 flex flex-col sm:flex-row">
                                <dt className="w-48 font-semibold text-slate-900 mb-1 sm:mb-0">事業主体</dt>
                                <dd className="text-slate-700">Shonan Bright</dd>
                            </div>
                            <div className="py-4 flex flex-col sm:flex-row">
                                <dt className="w-48 font-semibold text-slate-900 mb-1 sm:mb-0">事業内容</dt>
                                <dd className="text-slate-700">プロフェッショナルチームによるSaaS「Bright Works Platform」の開発・運営、およびOEM提供</dd>
                            </div>
                            <div className="py-4 flex flex-col sm:flex-row">
                                <dt className="w-48 font-semibold text-slate-900 mb-1 sm:mb-0">所在地</dt>
                                <dd className="text-slate-700">神奈川県茅ヶ崎市（詳細はご契約時に書面にてご案内）</dd>
                            </div>
                            <div className="py-4 flex flex-col sm:flex-row">
                                <dt className="w-48 font-semibold text-slate-900 mb-1 sm:mb-0">体制</dt>
                                <dd className="text-slate-700">フルスタックエンジニア・UI/UXデザイナーを中心としたアジャイル開発チーム</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
        </main>
    );
}
