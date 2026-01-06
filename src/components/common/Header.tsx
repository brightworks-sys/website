"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "glass py-2" : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto flex items-center justify-between px-6">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-zinc-900 dark:text-white">
                    Bright<span className="text-blue-600">works</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden space-x-8 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-white"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="p-2 text-zinc-600 md:hidden dark:text-zinc-400"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full border-b border-zinc-200 bg-white/95 px-6 py-8 backdrop-blur-xl md:hidden dark:border-zinc-800 dark:bg-black/95"
                    >
                        <nav className="flex flex-col space-y-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium text-zinc-900 dark:text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
