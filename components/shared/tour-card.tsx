import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";

export function TourCard({ tour }: { tour: { title:string; destination:string; duration:string; price:string; image:string; highlights:string[] } }){
  return <article className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-luxury md:rounded-[1.75rem]">
    <div className="relative h-56 overflow-hidden md:h-64"><Image src={tour.image} alt={tour.title} fill className="object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/70 to-transparent"/><p className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-luxury-navy md:text-sm">{tour.price}</p></div>
    <div className="p-5 md:p-6"><h3 className="text-xl font-bold leading-tight md:text-2xl">{tour.title}</h3><div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-600 md:gap-4 md:text-sm"><span className="flex items-center gap-1"><MapPin size={15}/>{tour.destination}</span><span className="flex items-center gap-1"><Clock size={15}/>{tour.duration}</span></div><div className="mt-4 flex flex-wrap gap-2">{tour.highlights.map(h=><span key={h} className="rounded-full bg-luxury-sand px-3 py-1 text-[11px] font-semibold text-luxury-navy md:text-xs">{h}</span>)}</div><Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-luxury-ocean md:mt-6 md:text-base">Request package <ArrowRight size={16}/></Link></div>
  </article>
}
