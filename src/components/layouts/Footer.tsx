import Link from 'next/link';
import { LayoutDashboard } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full border-t bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <LayoutDashboard className="h-6 w-6 text-primary" />
                            <span className="font-bold text-xl tracking-tight">Bright Works</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            700のユニットを組み合わせるだけで、<br />あらゆる業務アプリが御社ブランドで完成する。
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">プラットフォーム</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/products" className="hover:text-primary transition-colors">機能一覧</Link></li>
                            <li><Link href="/pricing" className="hover:text-primary transition-colors">料金プラン</Link></li>
                            <li><Link href="/docs" className="hover:text-primary transition-colors">ドキュメント (開発中)</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">ソリューション</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/oem" className="hover:text-primary transition-colors">OEMパートナー向け提案</Link></li>
                            <li><Link href="/direct" className="hover:text-primary transition-colors">直販・店舗向け導入</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">会社情報</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/pricing#company" className="hover:text-primary transition-colors">事業者概要</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">お問い合わせ</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Shonan Bright. All rights reserved.
                    </p>
                    <div className="flex space-x-4 text-sm text-muted-foreground">
                        <Link href="/privacy" className="hover:text-primary transition-colors">プライバシーポリシー</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">利用規約</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
