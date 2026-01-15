import { Hero } from "@/components/home/Hero";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { SustainabilitySection } from "@/components/home/SustainabilitySection";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <FeaturedCollections />
            <SustainabilitySection />
        </div>
    );
}
