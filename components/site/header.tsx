import Image from "next/image";
import Link from "next/link";
import { Mail, Menu, MessageCircle, Phone, X } from "lucide-react";

const nav = [
  ["Home", "/"],
  ["Safaris & Tours", "/tours-safaris"],
  ["Destinations", "/destinations"],
  ["About", "/about"],
  ["Gallery", "/gallery"],
  ["Blog", "/blog"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"]
];

const phoneDisplay = "+254 114 195 2775";
const phoneLink = "+2541141952775";

export function Header(){
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
      <div className="hidden bg-luxury-navy text-white md:block">
        <div className="container flex h-8 items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-5">
            <a href={`tel:${phoneLink}`} className="flex items-center gap-1.5 transition hover:text-luxury-ocean"><Phone size={13}/>{phoneDisplay}</a>
            <a href="mailto:info@feronetours.com" className="flex items-center gap-1.5 transition hover:text-luxury-ocean"><Mail size={13}/>info@feronetours.com</a>
          </div>
          <a href="https://wa.me/254710557164" className="flex items-center gap-1.5 transition hover:text-luxury-ocean"><MessageCircle size={13}/>Chat with a travel expert</a>
        </div>
      </div>

      <div className="bg-white text-luxury-ink">
        <div className="container flex h-16 items-center justify-between md:h-[84px]">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Ferone Tours & Travels home">
            <Image src="/logo-ferone.png" alt="Ferone Tours & Travels" width={144} height={105} className="h-14 w-auto object-contain md:h-[72px]" priority />
          </Link>

          <nav className="hidden items-center gap-4 text-[13px] font-bold xl:flex 2xl:gap-6 2xl:text-sm">
            {nav.map(([label,href])=><Link key={href} href={href} className="whitespace-nowrap transition hover:text-luxury-ocean">{label}</Link>)}
          </nav>

          <div className="hidden items-center lg:flex">
            <Link href="/tours-safaris" className="rounded-full bg-luxury-ocean px-5 py-3.5 text-sm font-black text-luxury-navy shadow-brand transition hover:-translate-y-0.5 hover:bg-luxury-navy hover:text-white">Explore Packages</Link>
          </div>

          <details className="group xl:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full bg-luxury-sand text-luxury-navy [&::-webkit-details-marker]:hidden" aria-label="Open menu">
              <Menu className="group-open:hidden" size={22}/>
              <X className="hidden group-open:block" size={22}/>
            </summary>
            <div className="absolute left-4 right-4 top-[4.5rem] overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-2xl md:top-[7.75rem]">
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
  );
}
