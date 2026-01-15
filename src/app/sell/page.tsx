import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const benefits = [
    "Earn up to 80% commission on every sale.",
    "We handle photography, listing, and shipping.",
    "Get paid instantly once your item sells.",
    "Join a community of sustainable fashion lovers."
];

const steps = [
    { title: "Snap", desc: "Send us photos of your items." },
    { title: "Ship", desc: "Use our prepaid label to ship." },
    { title: "Get Paid", desc: "Receive funds via Bank/PayPal." }
];

export default function SellPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-thrift-charcoal mb-6">
                    Clean Your Closet, <br />
                    <span className="text-thrift-olive">Fill Your Wallet.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-10">
                    The easiest way to sell your pre-loved premium fashion. We do the heavy lifting.
                </p>
                <Button size="lg" className="h-14 px-8 text-lg bg-thrift-charcoal">
                    Start Selling <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                <div className="bg-gray-50 p-10 rounded-3xl">
                    <h2 className="text-2xl font-serif font-bold mb-8">Why Sell With Thrift?</h2>
                    <ul className="space-y-4">
                        {benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-thrift-olive text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="font-medium text-thrift-charcoal">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-thrift-olive text-thrift-beige p-10 rounded-3xl flex flex-col justify-center">
                    <h2 className="text-2xl font-serif font-bold mb-4">What We Accept</h2>
                    <p className="opacity-90 mb-6">
                        We look for premium vintage, designer streetwear, and high-quality basics.
                        Brands like Carhartt, Levi&apos;s, Nike, Ralph Lauren, and luxury designers.
                    </p>
                    <Button variant="outline" className="w-fit text-thrift-olive border-white bg-white hover:bg-gray-100">
                        View Brand Directory
                    </Button>
                </div>
            </div>

            <div className="text-center">
                <h2 className="text-3xl font-serif font-bold mb-12">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="relative p-6 border rounded-2xl hover:shadow-lg transition-shadow">
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-thrift-charcoal text-white flex items-center justify-center font-bold">
                                {i + 1}
                            </span>
                            <h3 className="text-xl font-bold mt-4 mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
