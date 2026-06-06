import Image from "next/image";

export function DestinationCard({ destination }: { destination: { name:string; image:string; description:string } }){
  return <article className="group relative h-72 overflow-hidden rounded-3xl shadow-sm md:h-80 md:rounded-[1.75rem]"><Image src={destination.image} alt={destination.name} fill className="object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/85 via-luxury-navy/20 to-transparent"/><div className="absolute bottom-0 p-5 text-white md:p-6"><h3 className="font-display text-2xl font-bold md:text-3xl">{destination.name}</h3><p className="mt-2 text-xs leading-5 text-white/80 md:text-sm">{destination.description}</p></div></article>
}
