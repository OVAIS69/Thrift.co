"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <span className="text-sm font-bold uppercase tracking-widest text-thrift-olive mb-4 block">Get in Touch</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">We&apos;d love to hear from you.</h1>
                    <p className="text-muted-foreground text-lg mb-12">
                        Have a question about a product, your order, or just want to say hi?
                        Drop us a line and our team will get back to you within 24 hours.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                <Mail className="w-5 h-5 text-thrift-charcoal" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Email</h3>
                                <p className="text-muted-foreground">hello@thrift.co</p>
                                <p className="text-muted-foreground">support@thrift.co</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                <Phone className="w-5 h-5 text-thrift-charcoal" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Phone</h3>
                                <p className="text-muted-foreground">+1 (555) 000-0000</p>
                                <p className="text-sm text-muted-foreground mt-1">Mon-Fri from 8am to 5pm EST</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-5 h-5 text-thrift-charcoal" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Office</h3>
                                <p className="text-muted-foreground">123 Sustainable Ave</p>
                                <p className="text-muted-foreground">Brooklyn, NY 11211</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-3xl">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">First Name</label>
                                <input type="text" className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-thrift-olive" placeholder="Jane" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Last Name</label>
                                <input type="text" className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-thrift-olive" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <input type="email" className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-thrift-olive" placeholder="jane@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Message</label>
                            <textarea rows={5} className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-thrift-olive" placeholder="How can we help?" />
                        </div>

                        <Button className="w-full h-12 bg-thrift-charcoal text-lg">Send Message</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
