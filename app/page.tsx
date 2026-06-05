import { ArrowRight, CalendarDays, Globe2, MapPin, Plane, Search, ShieldCheck, Star, Users } from "lucide-react";
import { tours, destinations, services, posts, testimonials } from "@/lib/data";
import { TourCard } from "@/components/shared/tour-card";
import { DestinationCard } from "@/components/shared/destination-card";
import { SectionHeading } from "@/components/shared/section-heading";

const stats = [
  ["Happy Travelers", "4,800+"],
  ["Countries Covered", "35+"],
  ["Tours Completed", "1,200+"],
  ["Customer Satisfaction", "98%"]
];

export default function HomePage() {
  return (
    <>
      <section className="relative mt-[107px] min-h-[730px] overflow-hidden bg-luxury-navy text-white">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-safari.svg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 flex min-h-[730px] items-center justify-center pb-28 pt-16 text-center">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-balance text-5xl font-black leading-tight tracking-tight md:text-7xl lg:text-[78px]">
              Discover Africa Like Never Before!
            </h1>
            <p className="mx-auto mt-8 max-w-5xl text-lg font-semibold leading-8 text-white md:text-xl">
              Book unforgettable safaris, tailor-made holidays, and premium travel experiences with Ferone Tours and Travels.
            </p>
            <a href="/tours-safaris" className="mt-12 inline-flex items-center gap-3 rounded-md bg-luxury-ocean px-8 py-4 text-2xl font-black tracking-[.08em] text-luxury-navy shadow-brand transition hover:-translate-y-1 hover:bg-white md:text-3xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-luxury-ocean">➜</span>
              Explore Safari Packages and Book Today
            </a>
          </div>
        </div>
      </section>

      <section className="relative -mt-16 z-20 bg-luxury-ocean pb-16 pt-0">
        <div className="container">
          <form action="/api/inquiry" method="post" className="mx-auto max-w-5xl rounded border-4 border-luxury-navy/45 bg-white p-4 shadow-2xl md:p-5">
            <h2 className="mb-5 text-2xl font-black text-luxury-ink">Find Your Package</h2>
            <div className="grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto]">
              <input name="destination" required placeholder="Destination" className="h-14 rounded border border-slate-300 px-4 text-luxury-ink outline-none focus:border-luxury-ocean" />
              <input name="travelDate" type="date" className="h-14 rounded border border-slate-300 px-4 text-luxury-ink outline-none focus:border-luxury-ocean" />
              <select name="travelers" className="h-14 rounded border border-slate-300 px-4 text-luxury-ink outline-none focus:border-luxury-ocean">
                <option>Travelers</option>
                <option>1 Traveler</option>
                <option>2 Travelers</option>
                <option>Family or Group</option>
                <option>Corporate Team</option>
              </select>
              <button className="inline-flex h-14 items-center justify-center gap-2 rounded bg-luxury-navy px-7 font-black text-white transition hover:bg-luxury-ocean hover:text-luxury-navy"><Search size={18}/> Search</button>
            </div>
          </form>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-4 rounded-[1.25rem] bg-white p-6 shadow-luxury md:grid-cols-4">
          {stats.map(([label,value])=><div key={label} className="rounded-2xl bg-luxury-sand p-6 text-center"><p className="text-3xl font-black text-luxury-ocean">{value}</p><p className="mt-1 text-sm font-semibold text-slate-600">{label}</p></div>)}
        </div>
      </section>

      <section className="container pb-24">
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
          <div className="grid gap-5 sm:grid-cols-2">{[{icon:ShieldCheck,title:'Trusted guidance'},{icon:Plane,title:'Flights and logistics'},{icon:Globe2,title:'International planning'},{icon:Users,title:'Groups and corporate'}].map((item)=>{const Icon=item.icon;return <div key={item.title} className="rounded-[1.5rem] border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-brand"><Icon className="mb-4 text-luxury-ocean"/><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-2 text-slate-600">Professional support from inquiry to return.</p></div>})}</div>
        </div>
      </section>

      <section className="premium-gradient py-24 text-white">
        <div className="container">
          <SectionHeading eyebrow="Services" title="Everything your journey needs" text="One travel partner for safaris, visas, flights, hotels, transfers, consultation, honeymoon and group travel." light />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((service)=><div key={service} className="rounded-[1.5rem] border border-luxury-ocean/30 bg-white/10 p-6 backdrop-blur transition hover:border-luxury-ocean hover:bg-luxury-ocean/15"><Star className="mb-4 text-luxury-ocean"/><h3 className="text-xl font-bold">{service}</h3></div>)}</div>
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

      <section className="container py-24"><div className="rounded-[2rem] premium-gradient p-10 text-white md:p-16"><MapPin className="mb-5 text-luxury-ocean"/><h2 className="font-display text-4xl font-bold md:text-5xl">Ready to plan a premium trip?</h2><p className="mt-4 max-w-2xl text-white/80">Send your destination, travel dates and number of travelers. Ferone will help shape the right package.</p><a href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-luxury-ocean px-7 py-4 font-bold text-luxury-navy shadow-brand transition hover:bg-white">Start Inquiry <ArrowRight size={18}/></a></div></section>
    </>
  );
}
