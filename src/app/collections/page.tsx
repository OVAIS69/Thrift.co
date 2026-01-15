"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const collections = [
    {
        id: 1,
        title: "90s Vintage",
        description: "Iconic styles from the golden era of streetwear.",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
        link: "/shop?category=Vintage",
        count: "42 items"
    },
    {
        id: 2,
        title: "Streetwear Essentials",
        description: "Modern staples for your everyday rotation.",
        image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&q=80&w=800",
        link: "/shop?category=Outerwear",
        count: "28 items"
    },
    {
        id: 3,
        title: "Denim Reworked",
        description: "Upcycled denim pieces with unique character.",
        image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=800",
        link: "/shop?category=Denim",
        count: "15 items"
    },
    {
        id: 4,
        title: "Curated Accessories",
        description: "The finishing touches for any fit.",
        image: "https://images.unsplash.com/photo-1517445312882-efe44357b9fc?auto=format&fit=crop&q=80&w=800", // Placeholder
        link: "/shop?category=Accessories",
        count: "35 items"
    },
    {
        id: 5,
        title: "Summer Drops",
        description: "Lightweight fabrics and breezy cuts.",
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&q=80&w=800",
        link: "/shop?category=Tops",
        count: "50+ items"
    },
    {
        id: 6,
        title: "Outerwear Archive",
        description: "Heavy duty coats and jackets for colder days.",
        image: "https://images.unsplash.com/photo-1551488852-080175b22596?auto=format&fit=crop&q=80&w=800",
        link: "/shop?category=Outerwear",
        count: "18 items"
    }
];

export default function CollectionsPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 bg-background">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center max-w-2xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-thrift-charcoal mb-6">
                        Curated Collections
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Explore our hand-picked selections of vintage and sustainable fashion.
                        Each collection tells a unique story of style and history.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
                        >
                            <Link href={collection.link} className="block h-full w-full">
                                <Image
                                    src={collection.image}
                                    alt={collection.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-sm font-medium uppercase tracking-wider mb-2 opacity-80">
                                            {collection.count}
                                        </p>
                                        <h2 className="text-3xl font-serif font-bold mb-2 flex items-center gap-2">
                                            {collection.title}
                                            <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0" />
                                        </h2>
                                        <p className="text-white/80 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            {collection.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
