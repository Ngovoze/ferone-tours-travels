import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const nav = [
  ['Home','/'],['About','/about'],['Tours & Safaris','/tours-safaris'],['Destinations','/destinations'],['Visa Services','/visa-services'],['Flights','/flight-booking'],['Gallery','/gallery'],['Blog','/blog'],['Contact','/contact']
];

export function Header(){
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-luxury-navy/88 text-white backdrop-blur-xl">
    <div className="container flex h-20 items-center justify-between">
      <Link href="/" className="flex items-center gap-3" aria-label="Ferone Tours & Travels home">
        <span className="flex h-14 w-44 items-center rounded-2xl bg-white px-3 shadow-brand">
          <Image src="/logo-ferone.svg" alt="Ferone Tours & Travels" width={176} height={52} className="h-auto w-full" priority />
        </span>
      </Link>
      <nav className="hidden items-center gap-5 text-sm font-semibold lg:flex">{nav.map(([label,href])=><Link key={href} href={href} className="text-white/80 transition hover:text-luxury-ocean">{label}</Link>)}</nav>
      <Link href="/contact" className="hidden rounded-full bg-luxury-ocean px-5 py-3 text-sm font-bold text-luxury-navy shadow-brand transition hover:bg-white lg:inline-flex">Get Quote</Link>
      <button className="lg:hidden" aria-label="Open menu"><Menu /></button>
    </div>
  </header>
}
