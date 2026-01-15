// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion" // Placeholder if using ShadCN interactive accordion, for now manual implementation for simplicity without extra installation steps if shadcn component not present
import { Plus } from "lucide-react";

// Manual simple accordion for speed without full shadcn setup check
function SimpleAccordion({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <details className="group border-b last:border-none">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 text-lg hover:text-thrift-olive transition-colors">
                {title}
                <span className="transition group-open:rotate-45">
                    <Plus className="w-5 h-5" />
                </span>
            </summary>
            <div className="text-muted-foreground mt-2 pb-6 leading-relaxed">
                {children}
            </div>
        </details>
    )
}

export default function FAQPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">Frequently Asked Questions</h1>

            <div className="space-y-4">
                <SimpleAccordion title="How do you ensure authenticity?">
                    All items go through a rigorous 22-point authentication process by our expert authenticators.
                    We guarantee 100% authenticity or your money back.
                </SimpleAccordion>

                <SimpleAccordion title="What is your return policy?">
                    We accept returns within 14 days of delivery for store credit.
                    Items must be in the same condition as received with tags attached.
                </SimpleAccordion>

                <SimpleAccordion title="How is shipping calculated?">
                    We offer flat rate shipping of $15 for domestic orders.
                    International shipping is calculated based on weight and destination at checkout.
                </SimpleAccordion>

                <SimpleAccordion title="Can I sell my own clothes?">
                    Yes! Visit our "Sell With Us" page to request a selling kit.
                    We accept premium brands and vintage items in good condition.
                </SimpleAccordion>

                <SimpleAccordion title="Are the clothes cleaned?">
                    Absolutely. Every garment is professionally cleaned using eco-friendly detergents
                    and steamed before being photographed and shipped.
                </SimpleAccordion>
            </div>
        </div>
    );
}
