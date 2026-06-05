import { ArrowRight, Globe2, Plane, ShieldCheck, Sparkles, Star, Users, MapPin, CalendarDays } from "lucide-react";
import { tours, destinations, services, posts, testimonials } from "@/lib/data";
import { TourCard } from "@/components/shared/tour-card";
import { DestinationCard } from "@/components/shared/destination-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { InquiryForm } from "@/components/forms/inquiry-form";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden premium-gradient text-white">
        <div className="absolute inset-0 opacity-25 bg-[url('/images/hero/hero-safari.svg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-navy/20 via-luxury-navy/40 to-luxury-navy" />
        <div className="container relative z-10 flex min-h-screen items-center pt-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur"><Sparkles size={16}/> Premium Travel Experiences</p>
              <h1 className="font-display text-5xl font-bold leading-tight text-balance md:text-7xl">Explore Beyond Borders with Ferone Tours & Travels</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">Tailor-made safaris, beach escapes, visa support, flights, hotels, transfers and international travel planning for families, couples, groups and corporate travelers.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="/tours-safaris" className="rounded-full bg-luxury-gold px-7 py-4 font-bold text-luxury-navy shadow-luxury transition hover:scale-[1.02]">View Tour Packages</a>
                <a href="/contact" className="rounded-full border border-white/25 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-luxury-navy">Plan My Trip</a>
              </div>
            </div>
            <div className="glass rounded-[2rem] p-5 shadow-glass">
              <h2 className="mb-4 text-2xl font-bold">Quick Travel Inquiry</h2>
              <InquiryForm compact />
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-14 relative z-20 container">
        <div className="grid gap-4 rounded-[2rem] bg-white p-6 shadow-luxury md:grid-cols-4">
          {[['Happy Travelers','4,800+'],['Countries Covered','35+'],['Tours Completed','1,200+'],['Customer Satisfaction','98%']].map(([label,value])=><div key={label} className="rounded-3xl bg-luxury-sand p-6 text-center"><p className="text-3xl font-black text-luxury-ocean">{value}</p><p className="mt-1 text-sm font-semibold text-slate-600">{label}</p></div>)}
        </div>
      </section>

      <section className="container py-24">
        <SectionHeading eyebrow="Featured tours" title="Handpicked journeys for unforgettable memories" text="Safari, beach, city and international packages built around comfort, trust and expert travel planning." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{tours.slice(0,6).map((tour)=><TourCard key={tour.title} tour={tour}/>)}</div>
      </section>

      <section className="bg-luxury-sand py-24">
        <div className="container">
          <SectionHeading eyebrow="Destinations" title="Popular destinations Ferone can plan for you" text="From Kenya and Tanzania safaris to Zanzibar beaches, Dubai escapes, Europe, USA and beyond." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{destinations.slice(0,9).map((destination)=><DestinationCard key={destination.name} destination={destination}/>)}</div>
        </div>
      </section>

      <section className="container py-24">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div><p className="font-bold uppercase tracking-[.25em] text-luxury-ocean">Why choose Ferone</p><h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Travel planning with airline-level precision and safari-level adventure.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Ferone brings consultation, documentation support, booking coordination and destination expertise together in one premium travel experience.</p></div>
          <div className="grid gap-5 sm:grid-cols-2">{[{icon:ShieldCheck,title:'Trusted guidance'},{icon:Plane,title:'Flights & logistics'},{icon:Globe2,title:'International planning'},{icon:Users,title:'Groups & corporate'}].map((item)=>{const Icon=item.icon;return <div key={item.title} className="rounded-[1.5rem] border bg-white p-6 shadow-sm"><Icon className="mb-4 text-luxury-ocean"/><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-2 text-slate-600">Professional support from inquiry to return.</p></div>})}</div>
        </div>
      </section>

      <section className="premium-gradient py-24 text-white">
        <div className="container">
          <SectionHeading eyebrow="Services" title="Everything your journey needs" text="One travel partner for safaris, visas, flights, hotels, transfers, consultation, honeymoon and group travel." light />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((service)=><div key={service} className="rounded-[1.5rem] border border-white/15 bg-white/10 p-6 backdrop-blur"><Star className="mb-4 text-luxury-gold"/><h3 className="text-xl font-bold">{service}</h3></div>)}</div>
        </div>
      </section>

      <section className="container py-24">
        <SectionHeading eyebrow="Traveler reviews" title="Built for trust, comfort and clarity" text="Animated review-ready section for client testimonials and social proof." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">{testimonials.map((t)=><article key={t.name} className="rounded-[1.5rem] border bg-white p-7 shadow-sm"><div className="mb-3 flex text-luxury-gold"><Star/><Star/><Star/><Star/><Star/></div><p className="text-slate-600">“{t.quote}”</p><h3 className="mt-5 font-bold">{t.name}</h3><p className="text-sm text-luxury-ocean">{t.trip}</p></article>)}</div>
      </section>

      <section className="bg-luxury-sand py-24">
        <div className="container">
          <SectionHeading eyebrow="Travel insights" title="Guides for smarter travel decisions" text="Destination guides, visa preparation tips and package planning content for SEO growth." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">{posts.map((post)=><article key={post.title} className="rounded-[1.5rem] bg-white p-6 shadow-sm"><CalendarDays className="mb-4 text-luxury-ocean"/><h3 className="text-xl font-bold">{post.title}</h3><p className="mt-3 text-slate-600">{post.excerpt}</p></article>)}</div>
        </div>
      </section>

      <section className="container py-24"><div className="rounded-[2rem] premium-gradient p-10 text-white md:p-16"><MapPin className="mb-5 text-luxury-gold"/><h2 className="font-display text-4xl font-bold md:text-5xl">Ready to plan a premium trip?</h2><p className="mt-4 max-w-2xl text-white/80">Send your destination, travel dates and number of travelers. Ferone will help shape the right package.</p><a href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-luxury-gold px-7 py-4 font-bold text-luxury-navy">Start Inquiry <ArrowRight size={18}/></a></div></section>
    </>
  );
}
