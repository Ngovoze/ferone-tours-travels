import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer(){
  return <footer className="bg-luxury-navy text-white">
    <div className="container grid gap-10 py-16 md:grid-cols-4">
      <div className="md:col-span-2"><h2 className="font-display text-3xl font-bold">FERONE TOURS & TRAVELS</h2><p className="mt-4 max-w-md text-white/70">Explore Beyond Borders with premium tours, safaris, visa assistance, flights, hotel bookings and complete travel consultation.</p></div>
      <div><h3 className="font-bold">Quick links</h3><div className="mt-4 grid gap-2 text-white/70"><Link href="/tours-safaris">Tours & Safaris</Link><Link href="/destinations">Destinations</Link><Link href="/visa-services">Visa Services</Link><Link href="/contact">Contact</Link></div></div>
      <div><h3 className="font-bold">Contact</h3><div className="mt-4 grid gap-3 text-white/70"><p className="flex gap-2"><Phone size={18}/> +254 712 345 678</p><p className="flex gap-2"><Mail size={18}/> info@feronetours.com</p><p className="flex gap-2"><MapPin size={18}/> Nairobi, Kenya</p></div></div>
    </div>
    <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">© {new Date().getFullYear()} Ferone Tours & Travels. All rights reserved.</div>
  </footer>
}
