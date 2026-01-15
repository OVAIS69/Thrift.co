"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export interface Product {
    id: string;
    title: string;
    price: number;
    image: string;
    hoverImage?: string;
    size: string;
    condition: "excellent" | "good" | "fair";
    category: string;
    isSoldOut?: boolean;
}

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={item}
            className="group relative"
        >
            <Link href={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100">
                    {product.isSoldOut && (
                        <div className="absolute top-2 left-2 z-10 bg-thrift-charcoal text-white text-xs font-bold px-2 py-1 uppercase rounded-sm">
                            Sold Out
                        </div>
                    )}
                    {!product.isSoldOut && (
                        <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 uppercase rounded-sm animate-pulse">
                            Only 1 Left
                        </div>
                    )}

                    <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-105">
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover transition-opacity duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {product.hoverImage && (
                            <Image
                                src={product.hoverImage}
                                alt={`${product.title} - Back`}
                                fill
                                className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        )}
                    </div>

                    {/* Quick Add Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                        <Button className="w-full bg-white/90 text-thrift-charcoal hover:bg-white font-medium shadow-sm backdrop-blur-sm">
                            Quick Add
                        </Button>
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-start">
                    <div>
                        <h3 className="text-sm font-medium text-thrift-charcoal group-hover:text-thrift-olive transition-colors line-clamp-1">
                            {product.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 capitalize">
                            {product.size} / {product.condition} Condition
                        </p>
                    </div>
                    <p className="text-sm font-semibold">${product.price}</p>
                </div>
            </Link>

            {/* Wishlist Button */}
            <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white text-thrift-charcoal transition-all duration-200 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                <Heart className="w-4 h-4 hover:fill-current hover:text-red-500" />
            </button>
        </motion.div>
    );
}
