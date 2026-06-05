import { PageHero } from "@/components/page-hero";
import { tours } from "@/lib/data";
import { TourCard } from "@/components/shared/tour-card";

export default function ToursPage(){return <><PageHero title="Tours & Safaris" text="Curated safari, beach, city and international packages designed for comfort, value and unforgettable experiences."/><section className="container grid gap-6 py-20 md:grid-cols-2 lg:grid-cols-3">{tours.map(t=><TourCard key={t.title} tour={t}/>)}</section></>}
