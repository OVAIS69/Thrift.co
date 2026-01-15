import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const posts = [
    {
        id: 1,
        title: "How to Style Vintage Denim for 2024",
        excerpt: "The complete guide to finding the perfect fit and pairing it with modern basics.",
        image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80",
        date: "Jan 12, 2024",
        category: "Style Guide"
    },
    {
        id: 2,
        title: "The Environmental Cost of Fast Fashion",
        excerpt: "Why your $5 t-shirt costs way more than you think, and what you can do about it.",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80",
        date: "Jan 08, 2024",
        category: "Impact"
    },
    {
        id: 3,
        title: "Identifying Authentic Vintage Levis",
        excerpt: "Red tabs, care tags, and selvage lines. Learn how to spot the real deal.",
        image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&q=80",
        date: "Dec 28, 2023",
        category: "Education"
    }
];

export default function JournalPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="border-b mb-16 pb-8">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-thrift-charcoal mb-4">
                    The Journal
                </h1>
                <p className="text-xl text-muted-foreground">Stories from the world of sustainable style.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {posts.map(post => (
                    <div key={post.id} className="group cursor-pointer flex flex-col h-full">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                {post.category}
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                <span>{post.date}</span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                <span>5 min read</span>
                            </div>
                            <h2 className="text-2xl font-serif font-bold mb-3 group-hover:text-thrift-olive transition-colors flex items-start justify-between">
                                {post.title}
                                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {post.excerpt}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
