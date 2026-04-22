import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { MessageSquare, Mail, MapPin, Building2 } from 'lucide-react';
import Image from 'next/image';

const InquiryForm = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16 bg-white text-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-7">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-[#003B4A] mb-2">Send an Inquiry</h2>
                        <div className="w-12 h-1 bg-[#003B4A]"></div>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold   text-dark-gray">Full Name</label>
                                <Input placeholder="John Doe" className="bg-[#F3EFEF] border-none h-12 rounded-sm" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold   text-dark-gray">Company Name</label>
                                <Input placeholder="Global Logistics Corp" className="bg-[#F3EFEF] border-none h-12 rounded-sm" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold   text-dark-gray">Work Email</label>
                            <Input type="email" placeholder="email@example.com" className="bg-[#F3EFEF] border-none h-12 rounded-sm" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold   text-dark-gray">I am inquiring about:</label>
                            <Select>
                                <SelectTrigger className="bg-[#F3EFEF] border-none h-12 rounded-sm">
                                    <SelectValue placeholder="Paper Chemicals" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="chemicals">Paper Chemicals</SelectItem>
                                    <SelectItem value="logistics">Logistics Services</SelectItem>
                                    <SelectItem value="consultancy">Enterprise Solutions</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-dark-gray">Project Details</label>
                            <Textarea
                                placeholder="Tell us about your requirements..."
                                className="bg-[#F3EFEF] border-none min-h-[150px] rounded-sm resize-none"
                            />
                        </div>

                        <Button className="bg-[#289FCE] hover:bg-[#2889B0] text-white px-10 h-12 rounded-md font-semibold transition-all">
                            Send Inquiry
                        </Button>
                    </form>
                </div>
                <div className="lg:col-span-5 space-y-10">
                    <div className="bg-[#F9F5F6] p-8 rounded-md space-y-8">
                        <h3 className="font-bold text-slate-700 text-lg">Contact Channels</h3>

                        <div className="flex items-start gap-4">
                            <div className="bg-white p-3 rounded-sm shadow-sm">
                                <MessageSquare className="w-5 h-5 text-[#32A3D1]" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-dark-gray  tracking-widest">Direct Line (WhatsApp)</p>
                                <p className="text-[#006688] font-bold text-lg">+88-013-3991-0486</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white p-3 rounded-sm shadow-sm">
                                <Mail className="w-5 h-5 text-[#32A3D1]" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-dark-gray  tracking-widest">Email Inquiry</p>
                                <p className="text-[#006688] font-bold">manjur_hossain@snh-jh.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8 px-2">
                        <div className="flex gap-4">
                            <MapPin className="w-5 h-5 text-[#4A7C44] shrink-0" />
                            <div className="text-sm">
                                <h4 className="font-bold text-slate-800 mb-1">Bangladesh HQ</h4>
                                <p className="text-dark-gray leading-relaxed">
                                    House #160 (2nd Floor), Road #1,<br />
                                    Baridhara DOHS, Dhaka-1206
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Building2 className="w-5 h-5 text-[#4A7C44] shrink-0" />
                            <div className="text-sm">
                                <h4 className="font-bold text-slate-800 mb-1">Korea Office</h4>
                                <p className="text-dark-gray leading-relaxed">
                                    03967 6F, 77 Worldcupbuk-ro,<br />
                                    Mapo-gu, Seoul
                                </p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
    );
};

export default InquiryForm;