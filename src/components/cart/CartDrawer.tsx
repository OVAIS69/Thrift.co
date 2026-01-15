"use client";

import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function CartDrawer() {
    const { items, removeItem, updateQuantity, isOpen, toggleCart } = useCartStore();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 bottom-0 w-full md:w-[400px] bg-background z-[51] shadow-2xl flex flex-col border-l"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b">
                            <h2 className="text-xl font-serif font-bold flex items-center gap-2">
                                Your Cart <span className="text-sm font-sans font-normal text-muted-foreground">({items.length})</span>
                            </h2>
                            <Button variant="ghost" size="icon" onClick={toggleCart}>
                                <X className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                                        <ShoppingBag className="w-8 h-8 text-muted-foreground" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-lg">Your cart is empty</p>
                                        <p className="text-muted-foreground text-sm">Looks like you haven't found your treasure yet.</p>
                                    </div>
                                    <Button onClick={toggleCart} className="mt-4">
                                        Continue Shopping
                                    </Button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="relative w-20 h-24 rounded-md overflow-hidden bg-muted flex-shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <h3 className="font-medium text-sm line-clamp-2">{item.title}</h3>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-muted-foreground hover:text-destructive transition-colors"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-1 capitalize">{item.size}</p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2 border rounded-md p-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:bg-accent rounded"
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="text-xs w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:bg-accent rounded"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                                <p className="font-semibold text-sm">${item.price * item.quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t bg-muted/20 space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Subtotal</span>
                                        <span className="font-medium">${subtotal}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Shipping</span>
                                        <span className="font-medium">Calculated at checkout</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-bold text-lg pt-2 border-t">
                                        <span>Total</span>
                                        <span>${subtotal}</span>
                                    </div>
                                </div>
                                <Button className="w-full h-12 text-lg" onClick={toggleCart}>
                                    <Link href="/checkout" className="w-full h-full flex items-center justify-center">
                                        Checkout
                                    </Link>
                                </Button>
                                <div className="text-center">
                                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Free Shipping & Returns</span>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
