import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { travelStyles } from "@/lib/travel-styles";

export function TravelStyleGrid(){
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-7">
      {travelStyles.map((style)=><Link
        key={style.slug}
        href={`/travel-styles/${style.slug}`}
        className="group rounded-3xl border bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-luxury-ocean hover:shadow-brand focus:outline-none focus:ring-4 focus:ring-luxury-ocean/20"
        aria-label={`Learn more about ${style.title}`}
      >
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-luxury-sand text-luxury-ocean transition group-hover:bg-luxury-ocean group-hover:text-luxury-navy"><Star size={19}/></div>
        <h3 className="text-lg font-black text-luxury-ink transition group-hover:text-luxury-ocean">{style.title}</h3>
        <p className="mt-1.5 text-sm leading-6 text-slate-600">{style.shortDescription}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-luxury-ocean">Learn more <ArrowRight size={15} className="transition group-hover:translate-x-1"/></span>
      </Link>)}
    </div>
  );
}
