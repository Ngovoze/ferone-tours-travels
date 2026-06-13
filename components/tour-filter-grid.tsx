"use client";

import { useMemo, useState } from "react";
import { Filter, RotateCcw, Search } from "lucide-react";
import { TourCard } from "@/components/shared/tour-card";
import type { Tour } from "@/lib/data";

const packageTypeBySlug: Record<string, string> = {
  "maasai-mara-luxury-safari": "Safari",
  "zanzibar-honeymoon-escape": "Beach",
  "diani-beach-family-holiday": "Beach",
  "serengeti-ngorongoro-safari": "Safari",
  "dubai-premium-city-break": "International",
  "naivasha-weekend-getaway": "Weekend"
};

const travelerTypeBySlug: Record<string, string> = {
  "maasai-mara-luxury-safari": "Couples",
  "zanzibar-honeymoon-escape": "Couples",
  "diani-beach-family-holiday": "Family",
  "serengeti-ngorongoro-safari": "Groups",
  "dubai-premium-city-break": "Couples",
  "naivasha-weekend-getaway": "Family"
};

function durationGroup(duration: string){
  const days = Number.parseInt(duration, 10);
  if(days <= 2) return "1-2 days";
  if(days <= 4) return "3-4 days";
  return "5+ days";
}

export function TourFilterGrid({ tours }: { tours: Tour[] }){
  const [query, setQuery] = useState("");
  const [destination, setDestination] = useState("All destinations");
  const [packageType, setPackageType] = useState("All package types");
  const [travelerType, setTravelerType] = useState("All travelers");
  const [duration, setDuration] = useState("Any duration");

  const destinations = Array.from(new Set(tours.map((tour)=>tour.destination))).sort();
  const packageTypes = Array.from(new Set(tours.map((tour)=>packageTypeBySlug[tour.slug] || "Other"))).sort();
  const travelerTypes = Array.from(new Set(tours.map((tour)=>travelerTypeBySlug[tour.slug] || "All travelers"))).sort();

  const filteredTours = useMemo(()=>tours.filter((tour)=>{
    const searchable = `${tour.title} ${tour.destination} ${tour.highlights.join(" ")} ${tour.summary}`.toLowerCase();
    const matchesQuery = searchable.includes(query.trim().toLowerCase());
    const matchesDestination = destination === "All destinations" || tour.destination === destination;
    const matchesPackageType = packageType === "All package types" || packageTypeBySlug[tour.slug] === packageType;
    const matchesTravelerType = travelerType === "All travelers" || travelerTypeBySlug[tour.slug] === travelerType;
    const matchesDuration = duration === "Any duration" || durationGroup(tour.duration) === duration;
    return matchesQuery && matchesDestination && matchesPackageType && matchesTravelerType && matchesDuration;
  }), [destination, duration, packageType, query, tours, travelerType]);

  function clearFilters(){
    setQuery("");
    setDestination("All destinations");
    setPackageType("All package types");
    setTravelerType("All travelers");
    setDuration("Any duration");
  }

  return (
    <section className="container py-10 md:py-14">
      <div className="rounded-3xl border bg-white p-5 shadow-luxury md:p-7">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-luxury-ocean"><Filter size={16}/> Find the right package</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-luxury-ink md:text-4xl">Filter tours by what matters to you</h2>
          </div>
          <button type="button" onClick={clearFilters} className="inline-flex items-center gap-2 self-start rounded-full border px-4 py-2 text-sm font-black text-slate-700 transition hover:border-luxury-ocean hover:text-luxury-ocean md:self-auto"><RotateCcw size={15}/> Clear filters</button>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          <label className="relative xl:col-span-1">
            <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>
            <input value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="Search packages" className="h-12 w-full rounded-2xl border border-slate-300 pl-11 pr-4 outline-none focus:border-luxury-ocean" />
          </label>
          <select value={destination} onChange={(event)=>setDestination(event.target.value)} className="h-12 rounded-2xl border border-slate-300 px-4 outline-none focus:border-luxury-ocean">
            <option>All destinations</option>
            {destinations.map((item)=><option key={item}>{item}</option>)}
          </select>
          <select value={packageType} onChange={(event)=>setPackageType(event.target.value)} className="h-12 rounded-2xl border border-slate-300 px-4 outline-none focus:border-luxury-ocean">
            <option>All package types</option>
            {packageTypes.map((item)=><option key={item}>{item}</option>)}
          </select>
          <select value={travelerType} onChange={(event)=>setTravelerType(event.target.value)} className="h-12 rounded-2xl border border-slate-300 px-4 outline-none focus:border-luxury-ocean">
            <option>All travelers</option>
            {travelerTypes.map((item)=><option key={item}>{item}</option>)}
          </select>
          <select value={duration} onChange={(event)=>setDuration(event.target.value)} className="h-12 rounded-2xl border border-slate-300 px-4 outline-none focus:border-luxury-ocean">
            <option>Any duration</option>
            <option>1-2 days</option>
            <option>3-4 days</option>
            <option>5+ days</option>
          </select>
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between gap-4">
        <p className="font-black text-luxury-ink">{filteredTours.length} package{filteredTours.length === 1 ? "" : "s"} found</p>
        <p className="hidden text-sm text-slate-500 sm:block">All packages can be customised before booking.</p>
      </div>

      {filteredTours.length > 0 ? (
        <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTours.map((tour)=><TourCard key={tour.slug} tour={tour}/>)}
        </div>
      ) : (
        <div className="mt-5 rounded-3xl border border-dashed bg-luxury-sand p-10 text-center">
          <h3 className="text-2xl font-black text-luxury-ink">No matching package found</h3>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">Clear the filters or contact Ferone for a tailor-made itinerary based on your destination, dates and group size.</p>
          <a href="https://wa.me/254710557164" className="mt-5 inline-flex rounded-full bg-[#25D366] px-6 py-3 font-black text-white">Request a custom trip</a>
        </div>
      )}
    </section>
  );
}
