import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock, MapPin, MessageCircle, ShieldCheck, Sparkles, X } from "lucide-react";
import { tours } from "@/lib/data";
import { TourCard } from "@/components/shared/tour-card";

type TourPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams(){
  return tours.map((tour)=>({ slug: tour.slug }));
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata>{
  const { slug } = await params;
  const tour = tours.find((item)=>item.slug === slug);

  if(!tour){
    return { title: "Tour package not found" };
  }

  return {
    title: `${tour.title} | Ferone Tours & Travels`,
    description: tour.summary,
    openGraph: {
      title: tour.title,
      description: tour.summary,
      images: [{ url: tour.image }]
    }
  };
}

export default async function TourPackagePage({ params }: TourPageProps){
  const { slug } = await params;
  const tour = tours.find((item)=>item.slug === slug);

  if(!tour){
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Ferone Tours & Travels, I would like a quotation for the ${tour.title} package. Please help me customise it.`
  );
  const whatsappUrl = `https://wa.me/254710557164?text=${whatsappMessage}`;
  const relatedTours = tours.filter((item)=>item.slug !== tour.slug).slice(0,3);

  return (
    <>
      <section className="relative mt-16 min-h-[520px] overflow-hidden bg-luxury-navy text-white md:mt-[116px] md:min-h-[590px]">
        <Image
          src={tour.gallery[0]}
          alt={tour.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy/95 via-luxury-navy/72 to-luxury-navy/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/90 via-transparent to-transparent" />

        <div className="container relative z-10 flex min-h-[520px] items-end pb-12 pt-16 md:min-h-[590px] md:pb-16">
          <div className="max-w-4xl">
            <Link href="/tours-safaris" className="inline-flex items-center gap-2 text-sm font-bold text-white/85 transition hover:text-luxury-ocean">
              <ArrowLeft size={17}/> Back to all packages
            </Link>
            <p className="mt-6 text-xs font-black uppercase tracking-[.22em] text-luxury-ocean">Ferone featured package</p>
            <h1 className="mt-3 text-balance font-display text-4xl font-black leading-tight sm:text-5xl md:text-6xl">{tour.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/85 md:text-xl md:leading-8">{tour.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur"><MapPin size={16}/>{tour.destination}</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur"><Clock size={16}/>{tour.duration}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl lg:col-span-2 lg:row-span-2 lg:aspect-auto lg:min-h-[560px]">
            <Image src={tour.gallery[0]} alt={`${tour.title} main view`} fill sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover" />
          </div>
          {tour.gallery.slice(1,3).map((image,index)=><div key={image} className="relative aspect-[16/10] overflow-hidden rounded-3xl lg:min-h-[272px]">
            <Image src={image} alt={`${tour.title} gallery image ${index + 2}`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-700 hover:scale-105" />
          </div>)}
        </div>
        <p className="mt-3 text-xs leading-5 text-slate-500">Gallery images represent the destination and experiences that may form part of the package. Exact hotels, rooms, vehicles and activity operators are confirmed in the final quotation.</p>
      </section>

      <section className="container pb-12 md:pb-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div className="space-y-10">
            <article>
              <p className="text-xs font-black uppercase tracking-[.22em] text-luxury-ocean">Package overview</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-luxury-ink md:text-4xl">What this journey offers</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{tour.overview}</p>
            </article>

            <article className="rounded-3xl bg-luxury-sand p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Sparkles className="text-luxury-ocean" />
                <h2 className="text-2xl font-black text-luxury-ink">Package highlights</h2>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {tour.highlights.map((highlight)=><div key={highlight} className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold text-luxury-navy shadow-sm"><Check size={18} className="shrink-0 text-luxury-ocean"/>{highlight}</div>)}
              </div>
            </article>

            <article>
              <p className="text-xs font-black uppercase tracking-[.22em] text-luxury-ocean">Suggested programme</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-luxury-ink md:text-4xl">Day-by-day itinerary</h2>
              <div className="mt-6 space-y-4">
                {tour.itinerary.map((item)=><div key={`${item.day}-${item.title}`} className="grid gap-4 rounded-3xl border bg-white p-5 shadow-sm sm:grid-cols-[92px_1fr] md:p-6">
                  <div className="flex h-12 items-center justify-center rounded-2xl bg-luxury-ocean px-3 text-sm font-black text-luxury-navy">{item.day}</div>
                  <div>
                    <h3 className="text-xl font-black text-luxury-ink">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
                  </div>
                </div>)}
              </div>
            </article>

            <article className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-green-200 bg-green-50 p-6">
                <h2 className="flex items-center gap-3 text-2xl font-black text-green-900"><Check size={22}/> Usually included</h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-green-950/80">
                  {tour.includes.map((item)=><li key={item} className="flex gap-3"><Check size={17} className="mt-1 shrink-0"/>{item}</li>)}
                </ul>
              </div>
              <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
                <h2 className="flex items-center gap-3 text-2xl font-black text-rose-900"><X size={22}/> Usually excluded</h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-rose-950/80">
                  {tour.excludes.map((item)=><li key={item} className="flex gap-3"><X size={17} className="mt-1 shrink-0"/>{item}</li>)}
                </ul>
              </div>
            </article>

            <div className="rounded-3xl border-l-4 border-luxury-ocean bg-slate-50 p-5 text-sm leading-7 text-slate-600">
              <strong className="text-luxury-ink">Planning note:</strong> This is a suggested itinerary, not a fixed booking confirmation. Final routing, accommodation, transport, entry fees, activities and pricing depend on travel dates, availability, group size and the quotation approved by the client.
            </div>
          </div>

          <aside className="rounded-3xl border bg-white p-6 shadow-luxury lg:sticky lg:top-36">
            <p className="text-xs font-black uppercase tracking-[.22em] text-luxury-ocean">Plan this trip</p>
            <h2 className="mt-2 text-2xl font-black text-luxury-ink">Request a tailored quotation</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Tell Ferone your dates, number of travelers and preferred accommodation level. The itinerary can be adjusted before you commit.</p>

            <div className="mt-5 space-y-4 rounded-2xl bg-luxury-sand p-5 text-sm">
              <div className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-luxury-ocean"/><div><strong className="block text-luxury-ink">Destination</strong><span className="text-slate-600">{tour.destination}</span></div></div>
              <div className="flex gap-3"><CalendarDays size={18} className="mt-0.5 shrink-0 text-luxury-ocean"/><div><strong className="block text-luxury-ink">Suggested duration</strong><span className="text-slate-600">{tour.duration}</span></div></div>
              <div className="flex gap-3"><ShieldCheck size={18} className="mt-0.5 shrink-0 text-luxury-ocean"/><div><strong className="block text-luxury-ink">Best travel period</strong><span className="text-slate-600">{tour.bestTime}</span></div></div>
            </div>

            <div className="mt-5">
              <h3 className="font-black text-luxury-ink">Recommended for</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {tour.bestFor.map((item)=><span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700">{item}</span>)}
              </div>
            </div>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 font-black text-white transition hover:bg-[#1ebe5d]"><MessageCircle size={20}/> Request on WhatsApp</a>
            <Link href="/contact" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-luxury-navy px-5 py-4 font-black text-white transition hover:bg-luxury-ocean hover:text-luxury-navy">Send a detailed inquiry <ArrowRight size={18}/></Link>
          </aside>
        </div>
      </section>

      <section className="bg-luxury-sand py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[.22em] text-luxury-ocean">More ideas</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-luxury-ink md:text-4xl">Explore other packages</h2>
            </div>
            <Link href="/tours-safaris" className="inline-flex items-center gap-2 font-black text-luxury-ocean">View all packages <ArrowRight size={17}/></Link>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {relatedTours.map((item)=><TourCard key={item.slug} tour={item}/>)}
          </div>
        </div>
      </section>
    </>
  );
}
