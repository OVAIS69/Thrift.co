"use client";

import { useState } from "react";
import { Product, ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Expanded Dummy Data
const products: Product[] = [
    {
        id: "1",
        title: "Vintage Levi's 501",
        price: 85,
        image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80", // Jeans folded/flat
        hoverImage: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80", // Denim texture/detail
        size: "32/30",
        condition: "good",
        category: "Denim"
    },
    {
        id: "2",
        title: "90s Colorblock Windbreaker",
        price: 120,
        image: "https://images.unsplash.com/photo-1606105961732-6332671f2500?w=800&q=80", // Jacket Front
        hoverImage: "https://images.unsplash.com/photo-1551488852-080175b22596?w=800&q=80", // Jacket Detail/Back context
        size: "L",
        condition: "excellent",
        category: "Outerwear"
    },
    {
        id: "3",
        title: "Carhartt Detroit Jacket",
        price: 250,
        image: "https://images.unsplash.com/photo-1551488852-080175b22596?w=800&q=80", // Carhartt Front
        hoverImage: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=800&q=80", // Lifestyle/Back
        size: "XL",
        condition: "fair",
        category: "Outerwear"
    },
    {
        id: "4",
        title: "Ralph Lauren Knit",
        price: 65,
        image: "https://images.unsplash.com/photo-1624378439575-d8aa138f48de?w=800&q=80",
        hoverImage: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
        size: "M",
        condition: "good",
        category: "Tops"
    },
    {
        id: "5",
        title: "Vintage Graphic Tee",
        price: 55,
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80",
        hoverImage: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80",
        size: "L",
        condition: "excellent",
        category: "Tops"
    },
    {
        id: "6",
        title: "Beige Trench Coat",
        price: 180,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
        hoverImage: "https://images.unsplash.com/photo-1591047626797-35f6067b6a16?w=800&q=80",
        size: "S",
        condition: "excellent",
        category: "Outerwear"
    },
    {
        id: "7",
        title: "Olive Cargo Pants",
        price: 70,
        image: "https://images.unsplash.com/photo-1517445312882-efe44357b9fc?w=800&q=80", // Front
        hoverImage: "https://images.unsplash.com/photo-1624378439575-d8aa138f48de?w=800&q=80", // Detail
        size: "30",
        condition: "good",
        category: "Bottoms"
    },
    {
        id: "8",
        title: "Varsity Jacket",
        price: 200,
        image: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=800&q=80",
        hoverImage: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
        size: "M",
        condition: "fair",
        category: "Outerwear"
    },
    {
        id: "9",
        title: "Adidas Track Jacket",
        price: 80,
        image: "https://images.unsplash.com/photo-1618354691438-675e38df6085?w=800&q=80",
        hoverImage: "https://images.unsplash.com/photo-1618354691229-88d47f285158?w=800&q=80",
        size: "L",
        condition: "excellent",
        category: "Outerwear"
    },
    {
        id: "10",
        title: "Oversized Graphic Tee",
        price: 45,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
        hoverImage: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80",
        size: "XL",
        condition: "good",
        category: "Tops"
    },
    {
        id: "11",
        title: "Corduroy Shirt",
        price: 60,
        image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80",
        hoverImage: "https://images.unsplash.com/photo-1562157635-7a412999e5a8?w=800&q=80",
        size: "M",
        condition: "excellent",
        category: "Tops"
    },
    {
        id: "12",
        title: "Pleated Trousers",
        price: 95,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
        hoverImage: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
        size: "32",
        condition: "excellent",
        category: "Bottoms"
    },
    {
        id: "13",
        title: "Leather Biker Jacket",
        price: 300,
        image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=800&q=80",
        hoverImage: "https://images.unsplash.com/photo-1520975954738-35dd31d90558?w=800&q=80",
        size: "M",
        condition: "fair",
        category: "Outerwear"
    },
    {
        id: "14",
        title: "Wool Trench Coat",
        price: 210,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
        hoverImage: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80",
        size: "L",
        condition: "good",
        category: "Outerwear"
    },
    {
        id: "15",
        title: "Silk Scarf Patterned",
        price: 40,
        image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=800&q=80",
        hoverImage: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=800&q=80",
        size: "OS",
        condition: "excellent",
        category: "Accessories"
    }
];

const filters = {
    categories: ["All", "Tops", "Bottoms", "Outerwear", "Denim", "Accessories"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    price: ["Under $50", "$50 - $100", "$100 - $200", "$200+"]
}

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = products.filter(product =>
        selectedCategory === "All" || product.category === selectedCategory
    );

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-serif font-bold text-thrift-charcoal mb-2">Shop All</h1>
                    <p className="text-muted-foreground">Found {filteredProducts.length} unique items</p>
                </motion.div>

                <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    <Button variant="outline" className="gap-2">
                        <SlidersHorizontal className="w-4 h-4" /> Filters
                    </Button>
                    <Button variant="outline" className="gap-2">
                        Sort By <ChevronDown className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                {/* Sidebar (Desktop) */}
                <aside className="hidden lg:block space-y-8 sticky top-24 h-fit">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h3 className="font-semibold mb-4 text-lg">Categories</h3>
                        <ul className="space-y-2">
                            {filters.categories.map(cat => (
                                <li key={cat}>
                                    <button
                                        onClick={() => setSelectedCategory(cat)}
                                        className={cn(
                                            "text-sm hover:text-thrift-olive transition-all duration-200 text-left w-full px-2 py-1 rounded-md",
                                            selectedCategory === cat
                                                ? "text-thrift-olive font-medium bg-thrift-olive/10 translate-x-1"
                                                : "text-muted-foreground hover:translate-x-1"
                                        )}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <h3 className="font-semibold mb-4 text-lg">Size</h3>
                        <div className="flex flex-wrap gap-2">
                            {filters.sizes.map(size => (
                                <button key={size} className="w-10 h-10 border rounded-md text-sm hover:border-thrift-olive hover:text-thrift-olive transition-colors">
                                    {size}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <h3 className="font-semibold mb-4 text-lg">Price</h3>
                        <ul className="space-y-2">
                            {filters.price.map(range => (
                                <li key={range} className="text-sm text-muted-foreground hover:text-thrift-charcoal cursor-pointer">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input type="checkbox" className="rounded border-gray-300 text-thrift-olive focus:ring-thrift-olive" />
                                        <span className="group-hover:text-thrift-olive transition-colors">{range}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </aside>

                {/* Product Grid */}
                <div className="lg:col-span-3">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8"
                        variants={container}
                        initial="hidden"
                        animate="show"
                        key={selectedCategory} // Re-animate on category change
                    >
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </motion.div>

                    {filteredProducts.length === 0 && (
                        <div className="col-span-full py-20 text-center text-muted-foreground">
                            <p>No unique pieces found in this category.</p>
                            <Button variant="link" onClick={() => setSelectedCategory("All")}>Clear Filters</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
