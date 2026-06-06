import { ArrowRight, CalendarDays, Globe2, MapPin, Plane, Search, ShieldCheck, Star, Users } from "lucide-react";
import { tours, destinations, services, posts, testimonials } from "@/lib/data";
import { TourCard } from "@/components/shared/tour-card";
import { DestinationCard } from "@/components/shared/destination-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { HeroSlideshow } from "@/components/hero-slideshow";

const stats = [
  ["Happy Travelers", "4,800+"],
  ["Countries Covered", "35+"],
  ["Tours Completed", "1,200+"],
  ["Customer Satisfaction", "98%"]
];

const travelStyles = [
  ["Family Holidays", "Safe, comfortable trips for parents, children and family groups."],
  ["Honeymoon Packages", "Romantic beach, safari and luxury resort experiences."],
  ["Wildlife Safaris", "Game drives, conservancies and unforgettable Big Five moments."],
  ["Beach Holidays", "Diani, Zanzibar and coastal escapes with smooth planning."],
  ["Corporate Travel", "Flights, hotels, transfers and group logistics for teams."],
  ["Group Travel", "Church groups, friends, schools, chama trips and organizations."],
  ["Cultural Tours", "Local experiences, heritage visits and community-focused travel."],
  ["International Holidays", "Dubai, Europe, USA, South Africa and global travel planning."]
];

const experiences = [
  ["Game Drives", "Guided wildlife viewing in Kenya and East Africa’s top parks."],
  ["Beach Escapes", "Relaxed coastal stays for couples, families and groups."],
  ["City Tours", "Dubai, Nairobi, Cape Town and international city experiences."],
  ["Honeymoon Setups", "Special romantic arrangements and premium accommodation."],
  ["Visa Assistance", "Document guidance and travel-readiness consultation."],
  ["Airport Transfers", "Reliable pickup and drop-off coordination."],
  ["Hotel Bookings", "Accommodation support based on budget and comfort level."],
  ["Family Vacations", "Easy-to-manage itineraries built for all ages."]
];

export default function HomePage() {
  return (
    <>
      <section className="relative mt-16 min-h-[590px] overflow-hidden bg-luxury-navy text-white md:mt-[107px] md:min-h-[730px]">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-black/40 md:bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/60" />
        <div className="container relative z-10 flex min-h-[590px] items-center justify-center px-5 pb-24 pt-10 text-center md:min-h-[730px] md:pb-28 md:pt-16">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-balance text-[2.55rem] font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl lg:text-[78px]">
              Discover Africa Like Never Before!
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-white/90 sm:text-lg md:mt-8 md:text-xl md:font-semibold md:leading-8">
              Book unforgettable safaris, tailor-made holidays, and premium travel experiences with Ferone Tours and Travels.
            </p>
            <a href="/tours-safaris" className="mt-7 inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-luxury-ocean px-5 py-4 text-base font-black text-luxury-navy shadow-brand transition hover:-translate-y-1 hover:bg-white sm:w-auto sm:max-w-none md:mt-12 md:rounded-md md:px-8 md:text-2xl lg:text-3xl">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/90 text-luxury-ocean md:h-8 md:w-8">➜</span>
              <span>Explore Safari Packages</span>
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-20 bg-luxury-ocean px-4 pb-10 pt-6 md:-mt-16 md:pb-16 md:pt-0">
        <div className="container px-0 md:px-4">
          <form action="/api/inquiry" method="post" className="mx-auto max-w-5xl rounded-3xl border border-white/30 bg-white p-5 shadow-2xl md:rounded md:border-4 md:border-luxury-navy/45">
            <h2 className="mb-4 text-xl font-black text-luxury-ink md:text-2xl">Find Your Package</h2>
            <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto] md:gap-4">
              <input name="destination" required placeholder="Destination" className="h-12 rounded-xl border border-slate-300 px-4 text-luxury-ink outline-none focus:border-luxury-ocean md:h-14 md:rounded" />
              <input name="travelDate" type="date" className="h-12 rounded-xl border border-slate-300 px-4 text-luxury-ink outline-none focus:border-luxury-ocean md:h-14 md:rounded" />
              <select name="travelers" className="h-12 rounded-xl border border-slate-300 px-4 text-luxury-ink outline-none focus:border-luxury-ocean md:h-14 md:rounded">
                <option>Travelers</option>
                <option>1 Traveler</option>
                <option>2 Travelers</option>
                <option>Family or Group</option>
                <option>Corporate Team</option>
              </select>
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-luxury-navy px-7 font-black text-white transition hover:bg-luxury-ocean hover:text-luxury-navy md:h-14 md:rounded"><Search size={18}/> Search</button>
            </div>
          </form>
        </div>
      </section>

      <section className="container py-12 md:py-20">
        <div className="grid grid-cols-2 gap-3 rounded-3xl bg-white p-4 shadow-luxury md:grid-cols-4 md:gap-4 md:rounded-[1.25rem] md:p-6">
          {stats.map(([label,value])=><div key={label} className="rounded-2xl bg-luxury-sand p-4 text-center md:p-6"><p className="text-2xl font-black text-luxury-ocean md:text-3xl">{value}</p><p className="mt-1 text-xs font-semibold text-slate-600 md:text-sm">{label}</p></div>)}
        </div>
      </section>

      <section className="container pb-16 md:pb-24">
        <SectionHeading eyebrow="Featured tours" title="Handpicked journeys for unforgettable memories" text="Safari, beach, city and international packages built around comfort, trust and expert travel planning." />
        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 lg:grid-cols-3">{tours.slice(0,6).map((tour)=><TourCard key={tour.title} tour={tour}/>)}</div>
      </section>

      <section className="container pb-16 md:pb-24">
        <div className="rounded-3xl bg-luxury-navy p-6 text-white shadow-luxury md:rounded-[2rem] md:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[.22em] text-luxury-ocean">Custom trip planning</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">Didn&apos;t find the perfect package?</h2>
            <p className="mt-4 text-sm leading-7 text-white/78 md:text-base md:leading-8">No worries. Ferone Tours & Travels can design a custom trip based on your budget, dates, number of travelers and preferred destination.</p>
          </div>
          <a href="/contact" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-luxury-ocean px-6 py-3 font-black text-luxury-navy transition hover:bg-white lg:mt-0">Request a Custom Package <ArrowRight size={18}/></a>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container">
          <SectionHeading eyebrow="Travel styles" title="Explore trips by travel style" text="Choose the kind of trip you want, then Ferone will help you shape the right route, hotel, transport and budget." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-10">
            {travelStyles.map(([title,text])=><article key={title} className="rounded-3xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-brand"><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-luxury-sand text-luxury-ocean"><Star size={20}/></div><h3 className="text-lg font-black text-luxury-ink">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-luxury-sand py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Destinations" title="Popular destinations Ferone can plan for you" text="From Kenya and Tanzania safaris to Zanzibar beaches, Dubai escapes, Europe, USA and beyond." />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-10">{destinations.slice(0,9).map((destination)=><DestinationCard key={destination.name} destination={destination}/>)}</div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <SectionHeading eyebrow="Experiences" title="Popular travel experiences" text="Not every traveler searches by destination. Some know the experience they want first, and Ferone helps build the package around it." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-10">
          {experiences.map(([title,text])=><article key={title} className="rounded-3xl bg-luxury-sand p-5"><div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-luxury-ocean shadow-sm"><MapPin size={18}/></div><h3 className="text-lg font-black text-luxury-ink">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center md:gap-10">
          <div><p className="font-bold uppercase tracking-[.18em] text-luxury-ocean md:tracking-[.25em]">Why choose Ferone</p><h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Travel planning with airline-level precision and safari-level adventure.</h2><p className="mt-4 text-base leading-7 text-slate-600 md:mt-5 md:text-lg md:leading-8">Ferone brings consultation, documentation support, booking coordination and destination expertise together in one premium travel experience.</p></div>
          <div className="grid gap-4 sm:grid-cols-2 md:gap-5">{[{icon:ShieldCheck,title:'Trusted guidance'},{icon:Plane,title:'Flights and logistics'},{icon:Globe2,title:'International planning'},{icon:Users,title:'Groups and corporate'}].map((item)=>{const Icon=item.icon;return <div key={item.title} className="rounded-3xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-brand md:rounded-[1.5rem] md:p-6"><Icon className="mb-4 text-luxury-ocean"/><h3 className="text-lg font-bold md:text-xl">{item.title}</h3><p className="mt-2 text-sm text-slate-600 md:text-base">Professional support from inquiry to return.</p></div>})}</div>
        </div>
      </section>

      <section className="bg-luxury-navy py-16 text-white md:py-24">
        <div className="container grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[.22em] text-luxury-ocean">Travel expert support</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">Speak directly with a Ferone travel expert</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 md:text-base md:leading-8">Not sure where to go? Tell us your budget, travel dates and destination ideas. We will help you compare options and design the right package before you commit.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <a href="https://wa.me/254710557164" className="rounded-full bg-[#25D366] px-5 py-3 text-center font-black text-white transition hover:scale-[1.02]">Chat on WhatsApp</a>
            <a href="tel:+254710557164" className="rounded-full bg-white px-5 py-3 text-center font-black text-luxury-navy transition hover:scale-[1.02]">Call +254 710 557164</a>
            <a href="mailto:info@feronetours.com" className="rounded-full border border-white/30 px-5 py-3 text-center font-black text-white transition hover:bg-white hover:text-luxury-navy">Email Us</a>
          </div>
        </div>
      </section>

      <section className="premium-gradient py-16 text-white md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Services" title="Everything your journey needs" text="One travel partner for safaris, visas, flights, hotels, transfers, consultation, honeymoon and group travel." light />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-10 md:gap-5">{services.map((service)=><div key={service} className="rounded-3xl border border-luxury-ocean/30 bg-white/10 p-5 backdrop-blur transition hover:border-luxury-ocean hover:bg-luxury-ocean/15 md:rounded-[1.5rem] md:p-6"><Star className="mb-4 text-luxury-ocean"/><h3 className="text-lg font-bold md:text-xl">{service}</h3></div>)}</div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <SectionHeading eyebrow="Traveler reviews" title="Built for trust, comfort and clarity" text="Animated review-ready section for client testimonials and social proof." />
        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3 md:gap-6">{testimonials.map((t)=><article key={t.name} className="rounded-3xl border bg-white p-6 shadow-sm md:rounded-[1.5rem] md:p-7"><div className="mb-3 flex text-luxury-gold"><Star/><Star/><Star/><Star/><Star/></div><p className="text-sm leading-7 text-slate-600 md:text-base">“{t.quote}”</p><h3 className="mt-5 font-bold">{t.name}</h3><p className="text-sm text-luxury-ocean">{t.trip}</p></article>)}</div>
      </section>

      <section className="bg-luxury-sand py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Travel insights" title="Guides for smarter travel decisions" text="Destination guides, visa preparation tips and package planning content for SEO growth." />
          <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3 md:gap-6">{posts.map((post)=><article key={post.title} className="rounded-3xl bg-white p-6 shadow-sm md:rounded-[1.5rem]"><CalendarDays className="mb-4 text-luxury-ocean"/><h3 className="text-lg font-bold md:text-xl">{post.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{post.excerpt}</p></article>)}</div>
        </div>
      </section>

      <section className="container py-16 md:py-24"><div className="rounded-3xl premium-gradient p-7 text-white md:rounded-[2rem] md:p-16"><MapPin className="mb-5 text-luxury-ocean"/><h2 className="font-display text-3xl font-bold md:text-5xl">Ready to plan a premium trip?</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 md:text-base">Send your destination, travel dates and number of travelers. Ferone will help shape the right package.</p><a href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-luxury-ocean px-6 py-3 font-bold text-luxury-navy shadow-brand transition hover:bg-white md:mt-8 md:px-7 md:py-4">Start Inquiry <ArrowRight size={18}/></a></div></section>
    </>
  );
}
