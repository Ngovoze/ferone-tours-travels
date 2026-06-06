import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Mail, Menu, MessageCircle, Phone, Search, X } from "lucide-react";

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
    <div className="hidden bg-luxury-navy text-white md:block">
      <div className="container flex h-7 items-center justify-between text-xs font-semibold">
        <div className="flex items-center gap-5">
          <a href="https://wa.me/254710557164" className="flex items-center gap-1.5 transition hover:text-luxury-ocean"><MessageCircle size={13}/> {phoneDisplay}</a>
          <a href={`tel:${phoneLink}`} className="flex items-center gap-1.5 transition hover:text-luxury-ocean"><Phone size={13}/> {phoneDisplay}</a>
          <a href="mailto:info@feronetours.com" className="flex items-center gap-1.5 transition hover:text-luxury-ocean"><Mail size={13}/> info@feronetours.com</a>
        </div>
        <div className="flex items-center gap-4 text-white/85">
          <span>f</span>
          <span>ig</span>
          <span>x</span>
        </div>
      </div>
    </div>
    <div className="bg-white text-luxury-ink">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex min-w-0 items-center" aria-label="Ferone Tours & Travels home">
          <Image src="/logo-ferone.png" alt="Ferone Tours & Travels" width={190} height={55} className="h-auto w-32 sm:w-40 md:w-44" priority />
        </Link>
        <nav className="hidden items-center gap-7 text-[15px] font-semibold lg:flex">
          {nav.map(([label,href])=><Link key={href} href={href} className="transition hover:text-luxury-ocean">{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/tours-safaris" className="rounded-sm bg-luxury-ocean px-5 py-4 text-sm font-black text-luxury-navy shadow-brand transition hover:-translate-y-0.5 hover:bg-luxury-sky">Safari Packages</Link>
          <button aria-label="Search tours" className="flex h-12 w-12 items-center justify-center rounded-full bg-luxury-sand text-luxury-navy transition hover:bg-luxury-ocean"><Search size={21}/></button>
          <button className="flex items-center gap-2 rounded-sm bg-white px-4 py-3 font-bold shadow-lg"><span>EN</span> <ChevronDown size={16}/></button>
        </div>
        <details className="group lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full bg-luxury-sand text-luxury-navy [&::-webkit-details-marker]:hidden" aria-label="Open menu">
            <Menu className="group-open:hidden" size={22}/>
            <X className="hidden group-open:block" size={22}/>
          </summary>
          <div className="absolute left-4 right-4 top-[4.7rem] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl md:top-[6.7rem]">
            <nav className="grid divide-y divide-slate-100 text-base font-bold">
              {nav.map(([label,href])=><Link key={href} href={href} className="px-5 py-4 transition hover:bg-luxury-sand hover:text-luxury-ocean">{label}</Link>)}
            </nav>
            <div className="grid gap-3 bg-luxury-sand p-4 sm:grid-cols-2">
              <a href="https://wa.me/254710557164" className="rounded-full bg-[#25D366] px-4 py-3 text-center text-sm font-black text-white">WhatsApp Us</a>
              <a href={`tel:${phoneLink}`} className="rounded-full bg-luxury-navy px-4 py-3 text-center text-sm font-black text-white">Call {phoneDisplay}</a>
            </div>
          </div>
        </details>
      </div>
    </div>
  </header>
}
