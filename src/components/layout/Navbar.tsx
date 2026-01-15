"use client";

import Link from "next/link";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/collections", label: "Collections" },
    { href: "/sustainability", label: "Sustainability" },
    { href: "/about", label: "About" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { toggleCart, items } = useCartStore();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-3"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Mobile Menu Trigger */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Logo */}
                <Link href="/" className="text-2xl font-serif font-bold tracking-tighter">
                    THRIFT.<span className="text-thrift-olive">co</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium hover:text-thrift-olive transition-colors relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-thrift-olive transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                        <Search className="w-5 h-5" />
                    </Button>
                    <Link href="/account">
                        <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                            <User className="w-5 h-5" />
                        </Button>
                    </Link>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative"
                        onClick={toggleCart}
                    >
                        <ShoppingBag className="w-5 h-5" />
                        {items.length > 0 && (
                            <span className="absolute top-0 right-0 w-2 h-2 bg-thrift-olive rounded-full" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/40 lg:hidden z-40"
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-3/4 max-w-xs bg-background z-50 p-6 flex flex-col shadow-xl"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-xl font-serif font-bold">Menu</span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <X className="w-6 h-6" />
                                </Button>
                            </div>
                            <nav className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-lg font-medium hover:text-thrift-olive transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                            <div className="mt-auto pt-6 border-t flex flex-col gap-4">
                                <Link href="/account" className="flex items-center gap-3">
                                    <User className="w-5 h-5" />
                                    <span>My Account</span>
                                </Link>
                                <button className="flex items-center gap-3">
                                    <Search className="w-5 h-5" />
                                    <span>Search</span>
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
