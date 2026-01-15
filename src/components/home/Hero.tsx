"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-thrift-beige">
            {/* Background Texture/Image Placeholder */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                {/* Creates a grainy/noise texture using CSS or SVG if needed, for now just a solid color variation */}
                <div className="w-full h-full bg-[url('/noise.png')]"></div>
            </div>

            {/* Abstract Shapes/Blobs */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-thrift-olive/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-thrift-clay/20 rounded-full blur-3xl" />

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-thrift-olive/10 text-thrift-olive text-sm font-semibold tracking-wide mb-6">
                        SUSTAINABLE FASHION REIMAGINED
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-thrift-charcoal mb-6 leading-[1.1]"
                >
                    Curated Thrift. <br />
                    <span className="italic font-light text-thrift-olive">One of a Kind.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-xl mx-auto text-lg md:text-xl text-thrift-charcoal/70 mb-10"
                >
                    Discover unique, pre-loved fashion pieces that tell a story.
                    Shop our exclusive drops and join the sustainable revolution.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-thrift-charcoal text-white hover:bg-thrift-charcoal/90">
                        Shop New Drop
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 border-thrift-charcoal/20 hover:bg-thrift-olive/10">
                        Our Mission <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-thrift-charcoal/40"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-px h-12 bg-thrift-charcoal/20" />
            </motion.div>
        </section>
    );
}
