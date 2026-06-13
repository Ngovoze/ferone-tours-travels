import type { Metadata } from "next";
import { BadgeCheck, Headphones, SlidersHorizontal, WalletCards } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { TourFilterGrid } from "@/components/tour-filter-grid";
import { tours } from "@/lib/data";

export const metadata: Metadata = {
  title: "Safari Tours & Packages 2026/2027 with Ferone Tours & Travels",
  description: "Explore safari tours and travel packages for 2026/2027 with Ferone Tours & Travels. Filter Kenya safaris, Tanzania adventures, Zanzibar holidays, beach escapes and international travel packages."
};

const promises = [
  { icon: BadgeCheck, title: "Carefully selected", text: "Packages built around trusted routes, practical timing and suitable accommodation options." },
  { icon: WalletCards, title: "Clear quotations", text: "Your quotation shows the confirmed inclusions, exclusions and supplier conditions before payment." },
  { icon: Headphones, title: "Direct support", text: "Speak with Ferone through WhatsApp, phone or email while planning your trip." },
  { icon: SlidersHorizontal, title: "Flexible itineraries", text: "Dates, duration, room category and activities can be adjusted before confirmation." }
];

export default function ToursPage(){
  return <>
    <PageHero
      title="Safari Tours & Packages 2026/2027 with Ferone Tours & Travels"
      text="Explore curated Kenya safaris, Tanzania adventures, Zanzibar holidays, beach escapes and international travel packages designed for comfort, value and unforgettable memories."
    />

    <section className="bg-luxury-ocean py-7 text-luxury-navy">
      <div className="container grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {promises.map((item)=>{
          const Icon = item.icon;
          return <article key={item.title} className="rounded-3xl bg-white/90 p-5 shadow-sm">
            <Icon className="text-luxury-ocean" size={23}/>
            <h2 className="mt-3 text-lg font-black">{item.title}</h2>
            <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.text}</p>
          </article>;
        })}
      </div>
    </section>

    <TourFilterGrid tours={tours}/>
  </>;
}
