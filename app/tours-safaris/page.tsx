import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { tours } from "@/lib/data";
import { TourCard } from "@/components/shared/tour-card";

export const metadata: Metadata = {
  title: "Safari Tours & Packages 2026/2027 with Ferone Tours & Travels",
  description: "Explore safari tours and travel packages for 2026/2027 with Ferone Tours & Travels. Book Kenya safaris, Tanzania adventures, Zanzibar holidays, beach escapes and international travel packages."
};

export default function ToursPage(){
  return <>
    <PageHero
      title="Safari Tours & Packages 2026/2027 with Ferone Tours & Travels"
      text="Explore curated Kenya safaris, Tanzania adventures, Zanzibar holidays, beach escapes and international travel packages designed for comfort, value and unforgettable memories."
    />
    <section className="bg-luxury-ocean py-8 text-center text-luxury-navy">
      <div className="container">
        <p className="text-lg font-black uppercase tracking-[.18em]">Book top holiday packages, safari deals and tailor-made tours</p>
      </div>
    </section>
    <section className="container grid gap-6 py-20 md:grid-cols-2 lg:grid-cols-3">
      {tours.map(t=><TourCard key={t.title} tour={t}/>) }
    </section>
  </>
}
