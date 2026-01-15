import { Button } from "@/components/ui/button";
import { Package, User, MapPin, CreditCard } from "lucide-react";

const orders = [
    { id: "#TH-8821", date: "Jan 12, 2024", total: "$120.00", status: "Delivered" },
    { id: "#TH-8902", date: "Jan 18, 2024", total: "$85.00", status: "Processing" },
];

export default function AccountPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-serif font-bold mb-2">My Account</h1>
            <p className="text-muted-foreground mb-12">Welcome back, Alex.</p>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Sidebar nav */}
                <aside className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start gap-3 bg-gray-100 font-bold">
                        <Package className="w-4 h-4" /> Orders
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3">
                        <User className="w-4 h-4" /> Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3">
                        <MapPin className="w-4 h-4" /> Addresses
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3">
                        <CreditCard className="w-4 h-4" /> Payment
                    </Button>
                </aside>

                {/* Main Content (Orders) */}
                <div className="lg:col-span-3">
                    <h2 className="text-2xl font-bold mb-6">Recent Orders</h2>
                    <div className="space-y-4">
                        {orders.map(order => (
                            <div key={order.id} className="border rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 hover:shadow-sm transition-shadow">
                                <div className="flex-1 text-center sm:text-left">
                                    <span className="font-bold text-lg block">{order.id}</span>
                                    <span className="text-sm text-muted-foreground">{order.date}</span>
                                </div>
                                <div className="flex-1 text-center">
                                    <span className="block font-medium">{order.total}</span>
                                    <span className="text-sm text-muted-foreground">2 items</span>
                                </div>
                                <div className="flex-1 text-center">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                                        {order.status}
                                    </span>
                                </div>
                                <Button variant="outline" size="sm">View Details</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
