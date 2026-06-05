import Image from "next/image";

export function DestinationCard({ destination }: { destination: { name:string; image:string; description:string } }){
  return <article className="group relative h-80 overflow-hidden rounded-[1.75rem] shadow-sm"><Image src={destination.image} alt={destination.name} fill className="object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/85 via-luxury-navy/20 to-transparent"/><div className="absolute bottom-0 p-6 text-white"><h3 className="font-display text-3xl font-bold">{destination.name}</h3><p className="mt-2 text-sm text-white/75">{destination.description}</p></div></article>
}
