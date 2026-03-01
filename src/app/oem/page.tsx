import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Layers, PiggyBank, Briefcase } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'OEMパートナー向け | Bright Works',
    description: 'Web制作会社向けにBright Works Platformを活用したストック収益構築と黒衣型サポートを提案します。',
};

export default function OemPage() {
    return (
        <main className="flex-1 flex flex-col">
            {/* Hero */}
            <section className="bg-slate-900 text-white pt-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                    <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[150%] bg-gradient-to-b from-brand-600 to-transparent rotate-12" />
                </div>
                <div className="mx-auto max-w-5xl text-center relative z-10">
                    <Badge variant="outline" className="mb-6 border-brand-400 text-brand-300">Web制作会社・開発会社様へ</Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                        自社ブランドで<br />
                        「システム化」を販売しませんか。
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        制作の受託型ビジネスから、月額ストック型ビジネスへの転換。<br className="hidden md:block" />
                        システム開発の手間はすべてBWSが裏側（黒衣）で巻き取ります。
                    </p>
                    <Button size="lg" className="h-14 px-8 text-lg" asChild>
                        <Link href="/contact">OEMに関するお問い合わせ <ArrowRight className="ml-2 w-5 h-5" /></Link>
                    </Button>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">OEMパートナーの3つのメリット</h2>
                        <p className="text-lg text-slate-600">制作業務の「その先」の価値提供を強力にサポート</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="border-slate-100 shadow-md">
                            <CardHeader>
                                <Layers className="w-10 h-10 text-primary mb-4" />
                                <CardTitle className="text-xl">開発リソースゼロで提供可能</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600">
                                    高度な予約システムや決済基盤を、自社のエンジニアをアサインすることなく顧客に提供できます。API仕様を覚える必要すらありません。
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-slate-100 shadow-md">
                            <CardHeader>
                                <PiggyBank className="w-10 h-10 text-primary mb-4" />
                                <CardTitle className="text-xl">ストック収益の安定化</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600">
                                    納品して終わりの労働集約型ビジネスから脱却。クライアントがシステムを使い続ける限り継続的にシステム利用料（差益）を得られます。
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-slate-100 shadow-md">
                            <CardHeader>
                                <Building2 className="w-10 h-10 text-primary mb-4" />
                                <CardTitle className="text-xl">自社ブランドでの完全なホワイトラベル</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600">
                                    UIのロゴやカラーリング、通知メッセージのドメインまですべてを自社ブランド（または顧客ブランド）として設定可能な「黒衣」仕様です。
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Target Image/Business Model */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Briefcase className="w-16 h-16 mx-auto text-brand-300 mb-6" />
                    <h2 className="text-3xl font-bold mb-8">BWSによる強力な黒衣サポート</h2>
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-4xl mx-auto text-left">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1 space-y-6">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-lg">御社 ⇔ エンド顧客</h4>
                                        <p className="text-slate-600 text-sm mt-1">企画提案・フロントエンドの簡単なデザイン調整、カスタマーサクセスを担当して頂きます。</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-lg">BWS ⇔ 御社</h4>
                                        <p className="text-slate-600 text-sm mt-1">コアシステムのアップデート、DB保守、セキュリティパッチの適用などの面倒な裏側を担当します。</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 text-center md:border-l border-slate-200 md:pl-8">
                                <div className="text-slate-500 font-medium mb-2">卸売価格のイメージ</div>
                                <div className="text-5xl font-black text-slate-800 mb-4">月額 <span className="text-primary">X</span>円〜</div>
                                <p className="text-sm text-slate-600">※ご要件・提供テナント数に応じた特別テーブルをご用意しております。</p>
                                <Button asChild className="mt-6 w-full"><Link href="/pricing">料金体系を見る</Link></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
