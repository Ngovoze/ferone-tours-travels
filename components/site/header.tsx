import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Mail, Menu, MessageCircle, Phone, Search } from "lucide-react";

const nav = [
  ["Home", "/"],
  ["Safaris & Tours", "/tours-safaris"],
  ["Destinations", "/destinations"],
  ["About", "/about"],
  ["Gallery", "/gallery"],
  ["Blog", "/blog"],
  ["Contact Us", "/contact"]
];

const phoneDisplay = "+254 710 557164";
const phoneLink = "+254710557164";

export function Header(){
  return <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
    <div className="hidden bg-luxury-navy text-white sm:block">
      <div className="container flex h-7 items-center justify-between text-xs font-semibold">
        <div className="flex items-center gap-5">
          <a href="https://wa.me/254710557164" className="flex items-center gap-1.5 transition hover:text-luxury-ocean"><MessageCircle size={13}/> {phoneDisplay}</a>
          <a href={`tel:${phoneLink}`} className="flex items-center gap-1.5 transition hover:text-luxury-ocean"><Phone size={13}/> {phoneDisplay}</a>
          <a href="mailto:info@feronetours.com" className="flex items-center gap-1.5 transition hover:text-luxury-ocean"><Mail size={13}/> info@feronetours.com</a>
        </div>
        <div className="flex items-center gap-4 text-white/85">
          <span>f</span>
          <span>◎</span>
          <span>✈</span>
        </div>
      </div>
    </div>
    <div className="bg-white text-luxury-ink">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Ferone Tours & Travels home">
          <Image src="/logo-ferone.svg" alt="Ferone Tours & Travels" width={190} height={55} className="h-auto w-44" priority />
        </Link>
        <nav className="hidden items-center gap-7 text-[15px] font-semibold lg:flex">
          {nav.map(([label,href])=><Link key={href} href={href} className="transition hover:text-luxury-ocean">{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/tours-safaris" className="rounded-sm bg-luxury-ocean px-5 py-4 text-sm font-black text-luxury-navy shadow-brand transition hover:-translate-y-0.5 hover:bg-luxury-sky">☞ Safari Packages</Link>
          <button aria-label="Search tours" className="flex h-12 w-12 items-center justify-center rounded-full bg-luxury-sand text-luxury-navy transition hover:bg-luxury-ocean"><Search size={21}/></button>
          <button className="flex items-center gap-2 rounded-sm bg-white px-4 py-3 font-bold shadow-lg"><span className="text-xl">🇬🇧</span> EN <ChevronDown size={16}/></button>
        </div>
        <button className="lg:hidden" aria-label="Open menu"><Menu /></button>
      </div>
    </div>
  </header>
}
