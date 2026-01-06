import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="container mx-auto px-6">
                <div className="grid gap-12 md:grid-cols-4">
                    <div className="col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-zinc-900 dark:text-white">
                            Bright<span className="text-blue-600">works</span>
                        </Link>
                        <p className="mt-4 max-w-sm text-zinc-600 dark:text-zinc-400">
                            最新技術とデザインでビジネスを加速させるデジタルパートナー。
                            中小企業から個人事業主まで、DXを通じた価値創造を支援します。
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-4 font-semibold text-zinc-900 dark:text-white">Links</h4>
                        <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
                            <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
                            <li><Link href="/news" className="hover:text-blue-600">News</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
                            <li><Link href="/tokushoho" className="hover:text-blue-600">特定商取引法に基づく表記</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 font-semibold text-zinc-900 dark:text-white">Social</h4>
                        <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <li><a href="#" className="hover:text-blue-600">Twitter (X)</a></li>
                            <li><a href="#" className="hover:text-blue-600">GitHub</a></li>
                            <li><a href="#" className="hover:text-blue-600">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
                    <p>© 2026 Brightworks. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
