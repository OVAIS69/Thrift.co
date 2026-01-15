import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function TrackOrderPage() {
    return (
        <div className="container mx-auto px-4 py-24 max-w-xl text-center">
            <h1 className="text-4xl font-serif font-bold mb-6">Track Your Order</h1>
            <p className="text-muted-foreground mb-12">
                Enter your order number and email address to find your shipment status.
            </p>

            <div className="bg-gray-50 p-8 rounded-2xl border text-left space-y-4">
                <div>
                    <label className="text-sm font-medium mb-1.5 block">Order Number</label>
                    <input type="text" placeholder="e.g. TH-1234" className="w-full rounded-lg border-gray-200 p-3 h-12 focus:ring-2 focus:ring-thrift-olive focus:outline-none" />
                </div>
                <div>
                    <label className="text-sm font-medium mb-1.5 block">Email Address</label>
                    <input type="email" placeholder="email@example.com" className="w-full rounded-lg border-gray-200 p-3 h-12 focus:ring-2 focus:ring-thrift-olive focus:outline-none" />
                </div>
                <Button className="w-full h-12 text-lg bg-thrift-charcoal mt-4">
                    <Search className="w-4 h-4 mr-2" /> Track
                </Button>
            </div>
        </div>
    );
}
