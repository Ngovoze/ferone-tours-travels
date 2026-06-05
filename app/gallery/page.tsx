import Image from "next/image";
import { PageHero } from "@/components/page-hero";

const images = ['gallery-safari.svg','gallery-beach.svg','gallery-airport.svg','gallery-city.svg','gallery-resort.svg','gallery-family.svg'];
export default function GalleryPage(){return <><PageHero title="Gallery" text="A visual preview of safari, beach, city, resort and international travel experiences."/><section className="container grid gap-5 py-20 sm:grid-cols-2 lg:grid-cols-3">{images.map(img=><div key={img} className="relative h-80 overflow-hidden rounded-[1.5rem]"><Image src={`/images/gallery/${img}`} alt="Ferone travel gallery" fill className="object-cover"/></div>)}</section></>}
