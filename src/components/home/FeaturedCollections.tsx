"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const collections = [
    {
        id: 1,
        title: "90s Vintage",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
        link: "/collections/vintage",
    },
    {
        id: 2,
        title: "Streetwear",
        image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&q=80&w=800",
        link: "/collections/streetwear",
    },
    {
        id: 3,
        title: "Denim Reworked",
        image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=800",
        link: "/collections/denim",
    },
];

export function FeaturedCollections() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-thrift-charcoal">
                            Latest Drops
                        </h2>
                        <p className="text-thrift-charcoal/60 max-w-md">
                            Hand-picked collections updated weekly. Once they&apos;re gone, they&apos;re gone forever.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/collections" className="group inline-flex items-center text-lg font-medium border-b border-thrift-charcoal pb-1 hover:text-thrift-olive transition-colors">
                            View All Collections
                            <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer"
                        >
                            <Link href={collection.link}>
                                <Image
                                    src={collection.image}
                                    alt={collection.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-2xl font-serif font-bold text-thrift-charcoal flex justify-between items-center">
                                            {collection.title}
                                            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
