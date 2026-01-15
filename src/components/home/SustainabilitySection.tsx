"use client";

import { motion } from "framer-motion";
import { Leaf, Droplets, Recycle } from "lucide-react";

const stats = [
    {
        icon: Leaf,
        value: "2,500kg",
        label: "CO2 Emissions Saved",
        description: "By choosing pre-loved over new production.",
    },
    {
        icon: Droplets,
        value: "1.2M L",
        label: "Water Conserved",
        description: "Equivalent to 5 years of drinking water.",
    },
    {
        icon: Recycle,
        value: "15,000+",
        label: "Garments Rescued",
        description: "Kept out of landfills and given a second life.",
    },
];

export function SustainabilitySection() {
    return (
        <section className="py-24 bg-thrift-olive text-thrift-beige">
            <div className="container px-4 mx-auto text-center">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block py-1 px-3 rounded-full bg-white/10 text-sm font-semibold tracking-wide mb-6"
                >
                    OUR IMPACT
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-serif font-bold mb-16 max-w-3xl mx-auto"
                >
                    Fashion that doesn&apos;t cost the Earth.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                                <stat.icon className="w-8 h-8 text-thrift-beige" />
                            </div>
                            <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                            <p className="text-xl font-medium mb-3 opacity-90">{stat.label}</p>
                            <p className="text-thrift-beige/70 max-w-xs leading-relaxed">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
