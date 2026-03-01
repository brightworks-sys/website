import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LayoutDashboard } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <LayoutDashboard className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight">Bright Works</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/products" className="transition-colors hover:text-primary">プロダクト・機能</Link>
          <Link href="/oem" className="transition-colors hover:text-primary">OEMパートナー</Link>
          <Link href="/direct" className="transition-colors hover:text-primary">直販・店舗導入</Link>
          <Link href="/pricing" className="transition-colors hover:text-primary">料金プラン</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:inline-flex">ログイン</Button>
          <Button>無料で試す</Button>
        </div>
      </div>
    </header>
  );
}
