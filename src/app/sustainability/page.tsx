import { SustainabilitySection } from "@/components/home/SustainabilitySection";
import Image from "next/image";

export default function SustainabilityPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="relative h-[60vh] flex items-center justify-center bg-thrift-olive text-thrift-beige">
                <div className="container px-4 text-center z-10">
                    <span className="uppercase tracking-widest text-sm font-semibold mb-4 block">Our Promise</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Planet First. Always.</h1>
                    <p className="max-w-2xl mx-auto text-lg opacity-90">
                        We&apos;re on a mission to make the fashion industry sustainable, one garment at a time.
                    </p>
                </div>
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80"
                        alt="Nature texture"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Stats Reuse */}
            <SustainabilitySection />

            {/* Manifesto */}
            <div className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl font-serif font-bold mb-6">Why Pre-loved?</h2>
                        <div className="prose prose-lg text-muted-foreground">
                            <p>
                                The fashion industry is one of the largest polluters in the world.
                                Producing a single pair of jeans requires over 1,800 gallons of water.
                                By choosing vintage, you bypass this production cost entirely.
                            </p>
                            <p>
                                Our mission is to extend the lifecycle of luxury and high-quality garments.
                                We believe that the most sustainable garment is the one that already exists.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-96 rounded-2xl overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1472289065668-ce650ac443b2?w=800&q=80"
                            alt="Nature details"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
