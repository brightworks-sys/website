import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, Blocks, Zap, ShieldCheck, Banknote, Smartphone, Store, Building2 } from 'lucide-react';

export default function HomePage() {
    return (
        <main className="flex-1 flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-24 pb-32">
                <div className="absolute inset-0 bg-slate-100/[0.04] bg-[size:40px_40px]" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center max-w-4xl mx-auto">
                        <Badge variant="outline" className="mb-6 border-brand-200 text-brand-700 bg-brand-50 hover:bg-brand-100 px-4 py-1.5 text-sm">
                            LINE完結型・マルチテナントSaaS基盤
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
                            「作らない DX」<br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-primary">
                                700のユニットを組み合わせるだけで、<br className="hidden md:block" />あらゆる業務アプリが御社ブランドで完成する。
                            </span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                            Bright Works Platform (BWS) は、予約・決済・CRMなどの標準パッケージを組み合わせ、
                            最短1週間で自社専用の業務システムを構築できる画期的なインフラです。
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg" asChild>
                                <Link href="/oem">
                                    <Building2 className="mr-2 h-5 w-5" />
                                    OEMパートナー向け詳細
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg bg-white" asChild>
                                <Link href="/direct">
                                    <Store className="mr-2 h-5 w-5" />
                                    直販・店舗向け導入
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Hero Visual Placeholder */}
                    <div className="mt-20 relative mx-auto max-w-5xl rounded-2xl border bg-white/50 backdrop-blur-sm shadow-xl overflow-hidden aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-100/30 to-white/10" />
                        <div className="text-center z-10 flex flex-col items-center p-8">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                <Smartphone className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">LINE完結のモバイルファーストUI</h3>
                            <p className="text-slate-600 max-w-md">顧客もスタッフも、使い慣れたLINEアプリからすべての操作が完結。これまでにない滑らかな体験を提供します。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - 4大差別化要素 */}
            <section className="py-24 bg-white relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">BWSの4大差別化要素</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            スクラッチ開発の「遅い・高い」を覆す、新しい業務システム構築のあり方を提供します。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="border-slate-100 shadow-md hover:shadow-lg transition-shadow bg-slate-50/50">
                            <CardHeader>
                                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4">
                                    <Zap className="w-6 h-6 text-yellow-500" />
                                </div>
                                <CardTitle>圧倒的なスピード</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base text-slate-600">
                                    700種類以上の事前構築済みユニットを組み合わせることで、要件定義から実装までの時間を数十倍に短縮。最短1週間でローンチ可能です。
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="border-slate-100 shadow-md hover:shadow-lg transition-shadow bg-slate-50/50">
                            <CardHeader>
                                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4">
                                    <Banknote className="w-6 h-6 text-green-500" />
                                </div>
                                <CardTitle>開発コスト1/10以下</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base text-slate-600">
                                    「作らない」アプローチにより、数千万円かかるスクラッチ開発のコストを劇的に削減。初期費用を抑えたスモールスタートを可能にします。
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="border-slate-100 shadow-md hover:shadow-lg transition-shadow bg-slate-50/50">
                            <CardHeader>
                                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4">
                                    <Blocks className="w-6 h-6 text-blue-500" />
                                </div>
                                <CardTitle>OEM展開が容易</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base text-slate-600">
                                    最初からマルチテナントを前提としたアーキテクチャ。Web制作会社は自社ブランドでシステムを再販し、ストック収益を構築できます。
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="border-slate-100 shadow-md hover:shadow-lg transition-shadow bg-slate-50/50">
                            <CardHeader>
                                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4">
                                    <ShieldCheck className="w-6 h-6 text-brand-500" />
                                </div>
                                <CardTitle>エンタープライズ品質</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base text-slate-600">
                                    シングルDB・RLSによる堅牢なセキュリティ体制など、大企業でも採用可能な技術スタックを標準提供します。
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-brand-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9InAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGMtNS41IDAtMTAgNC41LTEwIDEwczQuNSAxMCAxMCAxMCAxMC00LjUgMTAtMTAtNC41LTEwLTEwLTEweiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwKSIvPjwvc3ZnPg==')]" />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">御社のビジネスを次のステージへ</h2>
                    <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
                        Bright Worksは、規模や業種を問わず、すべてのビジネスに「作らない DX」の価値を提供します。
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/oem" className="group flex items-center justify-between bg-white text-brand-950 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-colors w-full sm:w-[320px] shadow-lg">
                            <div className="flex items-center">
                                <Building2 className="mr-3 h-6 w-6 text-primary" />
                                OEMパートナーになる
                            </div>
                            <ArrowRight className="h-5 w-5 text-brand-400 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/direct" className="group flex items-center justify-between border-2 border-brand-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-900 transition-colors w-full sm:w-[320px]">
                            <div className="flex items-center">
                                <Store className="mr-3 h-6 w-6 text-brand-200" />
                                直販・自社導入する
                            </div>
                            <ArrowRight className="h-5 w-5 text-brand-400 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <p className="mt-8 text-sm text-brand-200 opacity-80">
                        初期費用・導入フローの詳細については各ページをご覧ください。
                    </p>
                </div>
            </section>
        </main>
    );
}
