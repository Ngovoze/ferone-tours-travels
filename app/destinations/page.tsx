import { PageHero } from "@/components/page-hero";
import { destinations } from "@/lib/data";
import { DestinationCard } from "@/components/shared/destination-card";

export default function DestinationsPage(){return <><PageHero title="Destinations" text="Explore Kenya, Tanzania, Uganda, Rwanda, Zanzibar, Dubai, South Africa, Europe, USA and more."/><section className="container grid gap-6 py-20 sm:grid-cols-2 lg:grid-cols-3">{destinations.map(d=><DestinationCard key={d.name} destination={d}/>)}</section></>}
