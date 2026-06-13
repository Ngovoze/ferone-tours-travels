import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export function Footer(){
  return <footer className="bg-luxury-navy text-white">
    <div className="container grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <h2 className="font-display text-3xl font-bold">FERONE TOURS & TRAVELS</h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-white/70">Explore Beyond Borders with premium tours, safaris, visa assistance, flights, hotel bookings and complete travel consultation.</p>
        <a href="https://wa.me/254710557164" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-white"><MessageCircle size={17}/> Chat on WhatsApp</a>
      </div>

      <div>
        <h3 className="font-black">Explore</h3>
        <div className="mt-4 grid gap-2.5 text-sm text-white/70">
          <Link href="/tours-safaris" className="transition hover:text-luxury-ocean">Tours & Safaris</Link>
          <Link href="/destinations" className="transition hover:text-luxury-ocean">Destinations</Link>
          <Link href="/visa-services" className="transition hover:text-luxury-ocean">Visa Services</Link>
          <Link href="/gallery" className="transition hover:text-luxury-ocean">Gallery</Link>
          <Link href="/blog" className="transition hover:text-luxury-ocean">Travel Blog</Link>
        </div>
      </div>

      <div>
        <h3 className="font-black">Help & information</h3>
        <div className="mt-4 grid gap-2.5 text-sm text-white/70">
          <Link href="/faq" className="transition hover:text-luxury-ocean">Frequently Asked Questions</Link>
          <Link href="/booking-terms" className="transition hover:text-luxury-ocean">Booking Terms</Link>
          <Link href="/reviews" className="transition hover:text-luxury-ocean">Verified Reviews</Link>
          <Link href="/about" className="transition hover:text-luxury-ocean">About Ferone</Link>
          <Link href="/contact" className="transition hover:text-luxury-ocean">Contact Us</Link>
        </div>
      </div>

      <div>
        <h3 className="font-black">Contact</h3>
        <div className="mt-4 grid gap-3 text-sm text-white/70">
          <a href="tel:+2541141952775" className="flex items-start gap-2 transition hover:text-luxury-ocean"><Phone size={18} className="mt-0.5 shrink-0"/> +254 114 195 2775</a>
          <a href="mailto:info@feronetours.com" className="flex items-start gap-2 transition hover:text-luxury-ocean"><Mail size={18} className="mt-0.5 shrink-0"/> info@feronetours.com</a>
          <p className="flex items-start gap-2"><MapPin size={18} className="mt-0.5 shrink-0"/> Nairobi, Kenya</p>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container flex flex-col gap-2 py-5 text-center text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>© {new Date().getFullYear()} Ferone Tours & Travels. All rights reserved.</p>
        <p>Package details remain subject to availability and written confirmation.</p>
      </div>
    </div>
  </footer>;
}
