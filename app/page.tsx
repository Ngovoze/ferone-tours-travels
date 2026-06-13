import { ArrowRight, CalendarDays, Globe2, MapPin, Plane, Search, ShieldCheck, Star, Users } from "lucide-react";
import { tours, destinations, services, posts } from "@/lib/data";
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
      <section className="relative mt-16 min-h-[560px] overflow-hidden bg-luxury-navy text-white md:mt-[116px] md:min-h-[650px]">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy/90 via-luxury-navy/60 to-luxury-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/75 via-transparent to-luxury-navy/10" />
        <div className="container relative z-10 flex min-h-[560px] items-center px-5 pb-16 pt-10 text-center md:min-h-[650px] md:pb-20 md:pt-14 lg:text-left">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <div className="mx-auto inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-white backdrop-blur lg:mx-0">
              Tailor-made safaris & holidays
            </div>
            <h1 className="mt-4 text-balance text-[2.7rem] font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-[68px]">
              Discover Africa Like Never Before
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-white/90 sm:text-lg md:text-xl md:leading-8 lg:mx-0">
              Unforgettable safaris, beach escapes and international holidays planned with care by Ferone Tours & Travels.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a href="/tours-safaris" className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-luxury-ocean px-6 py-4 text-base font-black text-luxury-navy shadow-brand transition hover:-translate-y-1 hover:bg-white sm:w-auto md:text-lg">
                Explore Safari Packages <ArrowRight size={19}/>
              </a>
              <a href="https://wa.me/254710557164" className="inline-flex w-full max-w-sm items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-4 text-base font-black text-white backdrop-blur transition hover:bg-white hover:text-luxury-navy sm:w-auto md:text-lg">
                Plan a Custom Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 bg-luxury-ocean px-4 pb-6 pt-5 md:-mt-12 md:pb-8 md:pt-0">
        <div className="container px-0 md:px-4">
          <form action="/api/inquiry" method="post" className="mx-auto max-w-5xl rounded-3xl border border-white/30 bg-white p-5 shadow-2xl md:rounded-2xl md:p-6">
            <h2 className="mb-3 text-xl font-black text-luxury-ink md:text-2xl">Find Your Package</h2>
            <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto] md:gap-4">
              <input name="destination" required placeholder="Destination" className="h-12 rounded-xl border border-slate-300 px-4 text-luxury-ink outline-none focus:border-luxury-ocean md:h-14" />
              <input name="travelDate" type="date" className="h-12 rounded-xl border border-slate-300 px-4 text-luxury-ink outline-none focus:border-luxury-ocean md:h-14" />
              <select name="travelers" className="h-12 rounded-xl border border-slate-300 px-4 text-luxury-ink outline-none focus:border-luxury-ocean md:h-14">
                <option>Travelers</option>
                <option>1 Traveler</option>
                <option>2 Travelers</option>
                <option>Family or Group</option>
                <option>Corporate Team</option>
              </select>
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-luxury-navy px-7 font-black text-white transition hover:bg-luxury-ocean hover:text-luxury-navy md:h-14"><Search size={18}/> Search</button>
            </div>
          </form>
        </div>
      </section>

      <section className="container py-8 md:py-10">
        <div className="grid grid-cols-2 gap-3 rounded-3xl bg-white p-4 shadow-luxury md:grid-cols-4 md:gap-4 md:rounded-[1.25rem] md:p-5">
          {stats.map(([label,value])=><div key={label} className="rounded-2xl bg-luxury-sand p-4 text-center md:p-5"><p className="text-2xl font-black text-luxury-ocean md:text-3xl">{value}</p><p className="mt-1 text-xs font-semibold text-slate-600 md:text-sm">{label}</p></div>)}
        </div>
      </section>

      <section className="container pb-10 md:pb-14">
        <SectionHeading eyebrow="Featured tours" title="Handpicked journeys for unforgettable memories" text="Safari, beach, city and international packages built around comfort, trust and expert travel planning." />
        <div className="mt-6 grid gap-5 md:mt-7 md:grid-cols-2 lg:grid-cols-3">{tours.slice(0,6).map((tour)=><TourCard key={tour.title} tour={tour}/>)}</div>
      </section>

      <section className="container pb-10 md:pb-14">
        <div className="rounded-3xl bg-luxury-navy p-6 text-white shadow-luxury md:rounded-[2rem] md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[.22em] text-luxury-ocean">Custom trip planning</p>
            <h2 className="mt-2 font-display text-3xl font-bold leading-tight md:text-4xl">Didn&apos;t find the perfect package?</h2>
            <p className="mt-3 text-sm leading-7 text-white/80 md:text-base md:leading-8">No worries. Ferone Tours & Travels can design a custom trip based on your budget, dates, number of travelers and preferred destination.</p>
          </div>
          <a href="/contact" className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-luxury-ocean px-6 py-3 font-black text-luxury-navy transition hover:bg-white lg:mt-0">Request a Custom Package <ArrowRight size={18}/></a>
        </div>
      </section>

      <section className="bg-white pb-10 md:pb-14">
        <div className="container">
          <SectionHeading eyebrow="Travel styles" title="Explore trips by travel style" text="Choose the kind of trip you want, then Ferone will help you shape the right route, hotel, transport and budget." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-7">
            {travelStyles.map(([title,text])=><article key={title} className="rounded-3xl border bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-brand"><div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-luxury-sand text-luxury-ocean"><Star size={19}/></div><h3 className="text-lg font-black text-luxury-ink">{title}</h3><p className="mt-1.5 text-sm leading-6 text-slate-600">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-luxury-sand py-10 md:py-14">
        <div className="container">
          <SectionHeading eyebrow="Destinations" title="Popular destinations Ferone can plan for you" text="From African safaris and Zanzibar beaches to Dubai, China, Europe, USA and beyond." />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-7">{destinations.map((destination)=><DestinationCard key={destination.name} destination={destination}/>)}</div>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <SectionHeading eyebrow="Experiences" title="Popular travel experiences" text="Not every traveler searches by destination. Some know the experience they want first, and Ferone helps build the package around it." />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-7">
          {experiences.map(([title,text])=><article key={title} className="rounded-3xl bg-luxury-sand p-4"><div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-luxury-ocean shadow-sm"><MapPin size={18}/></div><h3 className="text-lg font-black text-luxury-ink">{title}</h3><p className="mt-1.5 text-sm leading-6 text-slate-600">{text}</p></article>)}
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <div className="grid gap-7 lg:grid-cols-[.9fr_1.1fr] lg:items-center md:gap-8">
          <div><p className="font-bold uppercase tracking-[.18em] text-luxury-ocean md:tracking-[.25em]">Why choose Ferone</p><h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Travel planning with airline-level precision and safari-level adventure.</h2><p className="mt-3 text-base leading-7 text-slate-600 md:text-lg md:leading-8">Ferone brings consultation, documentation support, booking coordination and destination expertise together in one premium travel experience.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">{[{icon:ShieldCheck,title:'Trusted guidance'},{icon:Plane,title:'Flights and logistics'},{icon:Globe2,title:'International planning'},{icon:Users,title:'Groups and corporate'}].map((item)=>{const Icon=item.icon;return <div key={item.title} className="rounded-3xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-brand"><Icon className="mb-3 text-luxury-ocean"/><h3 className="text-lg font-bold md:text-xl">{item.title}</h3><p className="mt-1.5 text-sm text-slate-600 md:text-base">Professional support from inquiry to return.</p></div>})}</div>
        </div>
      </section>

      <section className="bg-luxury-navy py-10 text-white md:py-14">
        <div className="container grid gap-7 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[.22em] text-luxury-ocean">Travel expert support</p>
            <h2 className="mt-2 font-display text-3xl font-bold leading-tight md:text-4xl">Speak directly with a Ferone travel expert</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75 md:text-base md:leading-8">Not sure where to go? Tell us your budget, travel dates and destination ideas. We will help you compare options and design the right package before you commit.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <a href="https://wa.me/254710557164" className="rounded-full bg-[#25D366] px-5 py-3 text-center font-black text-white transition hover:scale-[1.02]">Chat on WhatsApp</a>
            <a href="tel:+254710557164" className="rounded-full bg-white px-5 py-3 text-center font-black text-luxury-navy transition hover:scale-[1.02]">Call +254 710 557164</a>
            <a href="mailto:info@feronetours.com" className="rounded-full border border-white/30 px-5 py-3 text-center font-black text-white transition hover:bg-white hover:text-luxury-navy">Email Us</a>
          </div>
        </div>
      </section>

      <section className="premium-gradient py-10 text-white md:py-14">
        <div className="container">
          <SectionHeading eyebrow="Services" title="Everything your journey needs" text="One travel partner for safaris, visas, flights, hotels, transfers, consultation, honeymoon and group travel." light />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-7">{services.map((service)=><div key={service} className="rounded-3xl border border-luxury-ocean/30 bg-white/10 p-5 backdrop-blur transition hover:border-luxury-ocean hover:bg-luxury-ocean/15"><Star className="mb-3 text-luxury-ocean"/><h3 className="text-lg font-bold md:text-xl">{service}</h3></div>)}</div>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <SectionHeading eyebrow="Verified reviews" title="Real feedback, published responsibly" text="Ferone only publishes feedback that can be connected to a genuine client or travel group and shared with permission." />
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <article className="rounded-3xl border bg-white p-5 shadow-sm"><ShieldCheck className="text-luxury-ocean"/><h3 className="mt-3 text-xl font-black">Verified clients</h3><p className="mt-2 text-sm leading-7 text-slate-600">Reviews should match a real Ferone booking, traveler or group representative.</p></article>
          <article className="rounded-3xl border bg-white p-5 shadow-sm"><Users className="text-luxury-ocean"/><h3 className="mt-3 text-xl font-black">Permission first</h3><p className="mt-2 text-sm leading-7 text-slate-600">Names, trip photographs and organization details are published only with consent.</p></article>
          <article className="rounded-3xl border bg-white p-5 shadow-sm"><Star className="text-luxury-ocean"/><h3 className="mt-3 text-xl font-black">No fabricated ratings</h3><p className="mt-2 text-sm leading-7 text-slate-600">External review links will be added only after Ferone confirms its official profiles.</p></article>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="/reviews" className="inline-flex items-center gap-2 rounded-full bg-luxury-navy px-6 py-3 font-black text-white">How reviews are verified <ArrowRight size={17}/></a>
          <a href="https://wa.me/254710557164?text=Hello%20Ferone%20Tours%20%26%20Travels%2C%20I%20would%20like%20to%20share%20a%20review%20of%20my%20trip." className="inline-flex items-center rounded-full bg-[#25D366] px-6 py-3 font-black text-white">Share a travel review</a>
        </div>
      </section>

      <section className="bg-luxury-sand py-10 md:py-14">
        <div className="container">
          <SectionHeading eyebrow="Travel insights" title="Guides for smarter travel decisions" text="Destination guides, visa preparation tips and package planning content for SEO growth." />
          <div className="mt-6 grid gap-5 md:mt-7 md:grid-cols-3">{posts.map((post)=><article key={post.title} className="rounded-3xl bg-white p-5 shadow-sm"><CalendarDays className="mb-3 text-luxury-ocean"/><h3 className="text-lg font-bold md:text-xl">{post.title}</h3><p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">{post.excerpt}</p></article>)}</div>
        </div>
      </section>

      <section className="container py-10 md:py-14"><div className="rounded-3xl premium-gradient p-6 text-white md:rounded-[2rem] md:p-10"><MapPin className="mb-4 text-luxury-ocean"/><h2 className="font-display text-3xl font-bold md:text-4xl">Ready to plan a premium trip?</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-white/80 md:text-base">Send your destination, travel dates and number of travelers. Ferone will help shape the right package.</p><a href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-luxury-ocean px-6 py-3 font-bold text-luxury-navy shadow-brand transition hover:bg-white">Start Inquiry <ArrowRight size={18}/></a></div></section>
    </>
  );
}
