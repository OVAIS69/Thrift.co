"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Truck, RefreshCw, ShieldCheck, Ruler } from "lucide-react";
import { ProductCard, Product } from "@/components/shop/ProductCard";
// import { useParams } from "next/navigation"; // Not needed if using props in Server Component, but this is a client component for now

// Mock Data (In a real app, fetch based on params.id)
const product = {
    id: "1",
    title: "Vintage Levi's 501 '93 Straight",
    price: 85,
    description: "Authentic 1990s Levi's 501 jeans in a classic medium wash. Features the iconic button fly and straight leg fit. These jeans have been professionally cleaned and are ready for a second life. Slight softening of the denim adds character.",
    images: [
        "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80",
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
        "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&q=80",
    ],
    size: "32/30",
    condition: "Good - Minor fading on knees",
    fabric: "100% Cotton",
    measurements: {
        waist: "16.5\"",
        inseam: "30\"",
        rise: "11\""
    }
};

const relatedProducts: Product[] = [
    { id: "2", title: "90s Nike Windbreaker", price: 120, image: "https://images.unsplash.com/photo-1606105961732-6332671f2500?w=800&q=80", size: "L", condition: "excellent", category: "Outerwear" },
    { id: "7", title: "Cargo Pants Olive", price: 70, image: "https://images.unsplash.com/photo-1517445312882-efe44357b9fc?w=800&q=80", size: "30", condition: "good", category: "Bottoms" },
    { id: "4", title: "Ralph Lauren Knit", price: 65, image: "https://images.unsplash.com/photo-1624378439575-d8aa138f48de?w=800&q=80", size: "M", condition: "good", category: "Tops" },
];

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const [mainImage, setMainImage] = useState(product.images[0]);

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                {/* Product Images */}
                <div className="space-y-4">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-100">
                        <Image
                            src={mainImage}
                            alt={product.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {product.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setMainImage(img)}
                                className={`relative aspect-[3/4] rounded-lg overflow-hidden border-2 transition-colors ${mainImage === img ? "border-thrift-olive" : "border-transparent"}`}
                            >
                                <Image
                                    src={img}
                                    alt={`View ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-thrift-charcoal mb-2">
                            {product.title}
                        </h1>
                        <p className="text-2xl font-semibold text-thrift-olive">${product.price}</p>
                    </div>

                    <div className="space-y-6 mb-8">
                        <div className="flex items-center gap-4 text-sm">
                            <span className="font-semibold bg-gray-100 px-3 py-1 rounded-full">Size: {product.size}</span>
                            <span className="font-semibold bg-gray-100 px-3 py-1 rounded-full">Condition: {product.condition}</span>
                        </div>

                        <p className="text-thrift-charcoal/80 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                                <Ruler className="w-4 h-4" /> Measurements
                            </h3>
                            <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
                                <div>
                                    <span className="block text-xs uppercase tracking-wider">Waist</span>
                                    {product.measurements.waist}
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-wider">Inseam</span>
                                    {product.measurements.inseam}
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-wider">Rise</span>
                                    {product.measurements.rise}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <Button size="lg" className="flex-1 text-lg h-14 bg-thrift-charcoal hover:bg-thrift-charcoal/90">
                            Add to Cart
                        </Button>
                        <Button variant="outline" size="icon" className="h-14 w-14 border-gray-300">
                            <Heart className="w-6 h-6" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted-foreground border-t pt-6">
                        <div className="flex items-center gap-2">
                            <Truck className="w-4 h-4" />
                            <span>Free Shipping on orders over $100</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <RefreshCw className="w-4 h-4" />
                            <span>30-Day Returns</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Authenticity Guaranteed</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Similar Products */}
            <div className="border-t pt-16">
                <h2 className="text-2xl font-serif font-bold mb-8">You Might Also Like</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {relatedProducts.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    );
}
