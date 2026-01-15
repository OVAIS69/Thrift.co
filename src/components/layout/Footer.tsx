import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-thrift-charcoal text-thrift-beige pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-6">THRIFT.co</h3>
                        <p className="text-white/60 mb-6 max-w-xs">
                            Curated sustainable fashion for the modern era. Join the circular economy movement.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-thrift-olive transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="hover:text-thrift-olive transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="hover:text-thrift-olive transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="font-serif font-semibold mb-6">Shop</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="/new-arrivals" className="hover:text-white transition-colors">New Arrivals</Link></li>
                            <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
                            <li><Link href="/collections" className="hover:text-white transition-colors">Collections</Link></li>
                            <li><Link href="/sale" className="hover:text-white transition-colors">Sale</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-serif font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
                            <li><Link href="/journal" className="hover:text-white transition-colors">Journal</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-serif font-semibold mb-6">Stay in the Loop</h4>
                        <p className="text-white/60 mb-4">
                            Get notified about new drops – products are 1-of-1.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/10 border-none rounded-md px-4 py-2 w-full focus:ring-1 focus:ring-thrift-olive text-white placeholder:text-white/40"
                            />
                            <Button variant="vintage" size="sm">
                                Join
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>&copy; {new Date().getFullYear()} Thrift.co. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
