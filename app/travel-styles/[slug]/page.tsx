import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Compass, Lightbulb, MapPin, MessageCircle, Users } from "lucide-react";
import { travelStyles } from "@/lib/travel-styles";
import { tours } from "@/lib/data";
import { TourCard } from "@/components/shared/tour-card";

type TravelStylePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams(){
  return travelStyles.map((style)=>({ slug: style.slug }));
}

export async function generateMetadata({ params }: TravelStylePageProps): Promise<Metadata>{
  const { slug } = await params;
  const style = travelStyles.find((item)=>item.slug === slug);

  if(!style){
    return { title: "Travel style not found" };
  }

  return {
    title: `${style.title} | Ferone Tours & Travels`,
    description: style.shortDescription
  };
}

export default async function TravelStylePage({ params }: TravelStylePageProps){
  const { slug } = await params;
  const style = travelStyles.find((item)=>item.slug === slug);

  if(!style){
    notFound();
  }

  const relatedTours = tours.filter((tour)=>style.relatedTourSlugs.includes(tour.slug));
  const whatsappMessage = encodeURIComponent(`Hello Ferone Tours & Travels, I am interested in ${style.title}. Please help me plan a suitable package.`);

  return (
    <>
      <section className="relative mt-16 min-h-[500px] overflow-hidden bg-luxury-navy text-white md:mt-[116px] md:min-h-[560px]">
        <Image src={style.heroImage} alt={style.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy/95 via-luxury-navy/75 to-luxury-navy/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/85 via-transparent to-transparent" />
        <div className="container relative z-10 flex min-h-[500px] items-end pb-12 pt-16 md:min-h-[560px] md:pb-16">
          <div className="max-w-4xl">
            <Link href="/#travel-styles" className="inline-flex items-center gap-2 text-sm font-bold text-white/80 transition hover:text-luxury-ocean"><ArrowLeft size={17}/> Back to travel styles</Link>
            <p className="mt-6 text-xs font-black uppercase tracking-[.22em] text-luxury-ocean">Explore by travel style</p>
            <h1 className="mt-3 text-balance font-display text-4xl font-black leading-tight sm:text-5xl md:text-6xl">{style.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/85 md:text-xl md:leading-8">{style.shortDescription}</p>
            <a href={`https://wa.me/254710557164?text=${whatsappMessage}`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-black text-white"><MessageCircle size={19}/> Plan this type of trip</a>
          </div>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_.85fr] lg:items-start">
          <article>
            <p className="text-xs font-black uppercase tracking-[.22em] text-luxury-ocean">Overview</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-luxury-ink md:text-4xl">What to expect</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">{style.intro}</p>
          </article>

          <article className="rounded-3xl bg-luxury-sand p-6 md:p-8">
            <div className="flex items-center gap-3"><Users className="text-luxury-ocean"/><h2 className="text-2xl font-black text-luxury-ink">Ideal for</h2></div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {style.idealFor.map((item)=><div key={item} className="flex gap-3 rounded-2xl bg-white p-4 font-bold text-luxury-navy shadow-sm"><Check size={18} className="mt-0.5 shrink-0 text-luxury-ocean"/>{item}</div>)}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-luxury-sand py-10 md:py-14">
        <div className="container grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3"><MapPin className="text-luxury-ocean"/><h2 className="text-2xl font-black text-luxury-ink">Suggested destinations</h2></div>
            <div className="mt-5 flex flex-wrap gap-3">{style.destinations.map((item)=><span key={item} className="rounded-full bg-luxury-sand px-4 py-2 text-sm font-bold text-luxury-navy">{item}</span>)}</div>
          </article>

          <article className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3"><Compass className="text-luxury-ocean"/><h2 className="text-2xl font-black text-luxury-ink">Possible experiences</h2></div>
            <ul className="mt-5 space-y-3 text-slate-600">{style.experiences.map((item)=><li key={item} className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-luxury-ocean"/>{item}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <article className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-3"><Lightbulb className="text-luxury-ocean"/><h2 className="text-2xl font-black text-luxury-ink">Planning notes</h2></div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {style.planningNotes.map((item,index)=><div key={item} className="rounded-2xl bg-slate-50 p-5"><p className="text-xs font-black uppercase tracking-[.18em] text-luxury-ocean">Tip {index + 1}</p><p className="mt-2 leading-7 text-slate-600">{item}</p></div>)}
          </div>
        </article>
      </section>

      <section className="bg-luxury-navy py-10 text-white md:py-14">
        <div className="container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[.22em] text-luxury-ocean">Tailor-made planning</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Turn this travel style into your own itinerary</h2>
            <p className="mt-3 max-w-2xl leading-7 text-white/75">Share your dates, destination ideas, group size and budget. Ferone will help shape the right package before confirmation.</p>
          </div>
          <a href={`https://wa.me/254710557164?text=${whatsappMessage}`} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-black text-white"><MessageCircle size={19}/> Start on WhatsApp</a>
        </div>
      </section>

      {relatedTours.length > 0 && <section className="container py-10 md:py-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[.22em] text-luxury-ocean">Relevant packages</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-luxury-ink md:text-4xl">Packages that match this style</h2>
          </div>
          <Link href="/tours-safaris" className="inline-flex items-center gap-2 font-black text-luxury-ocean">View all packages <ArrowRight size={17}/></Link>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{relatedTours.map((tour)=><TourCard key={tour.slug} tour={tour}/>)}</div>
      </section>}
    </>
  );
}
