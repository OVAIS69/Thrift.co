import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-thrift-charcoal mb-6">
                    Reimagining Fashion&apos;s Future
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Thrift.co isn&apos;t just a marketplace; it&apos;s a movement against fast fashion.
                    We believe style shouldn't come at the cost of the planet.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80"
                        alt="Team sorting clothes"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-serif font-bold">Our Story</h2>
                    <p className="text-muted-foreground">
                        Founded in 2024, Thrift.co started as a small garage sale project in Brooklyn.
                        We saw thousands of high-quality garments ending up in landfills simply because
                        they lost their "trend" status.
                    </p>
                    <p className="text-muted-foreground">
                        We curated a small collection, put it online, and it sold out in minutes.
                        That&apos;s when we knew: people crave uniqueness. They want clothes with a soul.
                    </p>
                </div>
            </div>

            <div className="bg-thrift-olive/10 rounded-3xl p-12 mb-24 text-center">
                <h2 className="text-3xl font-serif font-bold text-thrift-charcoal mb-8">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-bold text-xl mb-2">Authenticity</h3>
                        <p className="text-sm text-muted-foreground">Every item is verified, cleaned, and truthfully graded.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Circularity</h3>
                        <p className="text-sm text-muted-foreground">We keep clothes in the loop and out of the trash.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Community</h3>
                        <p className="text-sm text-muted-foreground">Empowering individuals to express their unique style.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
