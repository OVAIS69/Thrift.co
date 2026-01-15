"use client";

import { useCartStore } from "@/store/useCartStore";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CreditCard } from "lucide-react";

export default function CheckoutPage() {
    const { items } = useCartStore();

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 15; // Flat rate
    const total = subtotal + shipping;

    return (
        <div className="container mx-auto px-4 py-12">
            <Link href="/shop" className="inline-flex items-center text-sm text-muted-foreground hover:text-thrift-olive mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" /> Continue Shopping
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left: Form */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-serif font-bold mb-6">Shipping Information</h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">First Name</label>
                                <input type="text" className="w-full rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-thrift-olive" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Last Name</label>
                                <input type="text" className="w-full rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-thrift-olive" />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium">Address</label>
                                <input type="text" className="w-full rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-thrift-olive" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">City</label>
                                <input type="text" className="w-full rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-thrift-olive" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Postal Code</label>
                                <input type="text" className="w-full rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-thrift-olive" />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium">Email</label>
                                <input type="email" className="w-full rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-thrift-olive" />
                            </div>
                        </form>
                    </div>

                    <div>
                        <h2 className="text-2xl font-serif font-bold mb-6">Payment</h2>
                        <div className="bg-muted/30 p-4 rounded-lg border flex items-center gap-4">
                            <CreditCard className="w-6 h-6 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">Payment integration enabled via Stripe (Placeholder)</span>
                        </div>
                    </div>

                    <Button className="w-full h-12 text-lg bg-thrift-charcoal hover:bg-thrift-charcoal/90">
                        Place Order - ${items.length > 0 ? total : 0}
                    </Button>
                </div>

                {/* Right: Summary */}
                <div className="bg-gray-50 p-8 rounded-2xl h-fit sticky top-24">
                    <h3 className="text-xl font-serif font-bold mb-6">Order Summary</h3>
                    <div className="space-y-6 mb-6">
                        {items.length === 0 ? (
                            <p className="text-muted-foreground">Your cart is empty.</p>
                        ) : (
                            items.map(item => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="relative w-16 h-20 rounded-md overflow-hidden bg-muted flex-shrink-0">
                                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium text-sm line-clamp-2">{item.title}</h4>
                                        <p className="text-xs text-muted-foreground capitalize">{item.size} x {item.quantity}</p>
                                    </div>
                                    <span className="font-semibold text-sm">${item.price * item.quantity}</span>
                                </div>
                            ))
                        )}
                    </div>

                    {items.length > 0 && (
                        <div className="border-t pt-6 space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>${subtotal}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Shipping</span>
                                <span>${shipping}</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold border-t pt-2 mt-2">
                                <span>Total</span>
                                <span>${total}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
