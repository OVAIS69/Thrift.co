"use client";

import { Product, ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

// Mock Wishlist Data
const wishlistItems: Product[] = [
    { id: "4", title: "Ralph Lauren Knit", price: 65, image: "https://images.unsplash.com/photo-1624378439575-d8aa138f48de?w=800&q=80", size: "M", condition: "good", category: "Tops" },
    { id: "6", title: "Beige Trench Coat", price: 180, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80", size: "S", condition: "excellent", category: "Outerwear" }
];

export default function WishlistPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex items-center gap-3 mb-12">
                <Heart className="w-8 h-8 text-thrift-charcoal fill-current" />
                <h1 className="text-4xl font-serif font-bold text-thrift-charcoal">Your Wishlist</h1>
            </div>

            {wishlistItems.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {wishlistItems.map(item => (
                        <ProductCard key={item.id} product={item} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 bg-gray-50 rounded-2xl">
                    <Heart className="w-16 h-16 text-gray-300 mx-auto mb-6" />
                    <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
                    <p className="text-muted-foreground mb-8">Save items you love to track their availability.</p>
                    <Button>Browse Collections</Button>
                </div>
            )}
        </div>
    );
}
