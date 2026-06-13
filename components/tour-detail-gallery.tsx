import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { TourGalleryImage } from "@/lib/data";

export function TourDetailGallery({ images }: { images: TourGalleryImage[] }){
  const mainImage = images[0];
  const supportingImages = images.slice(1, 3);

  return (
    <section className="container py-10 md:py-14">
      <div className="grid gap-4 lg:grid-cols-3">
        <figure className="group relative aspect-[16/10] overflow-hidden rounded-3xl bg-luxury-navy lg:col-span-2 lg:row-span-2 lg:aspect-auto lg:min-h-[560px]">
          <Image src={mainImage.src} alt={mainImage.alt} fill sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover transition duration-700 group-hover:scale-[1.02]" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-luxury-navy via-luxury-navy/80 to-transparent px-5 pb-5 pt-16 text-white md:px-7 md:pb-7">
            <h2 className="font-display text-2xl font-black md:text-3xl">{mainImage.title}</h2>
            <a href={mainImage.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-white/70 transition hover:text-luxury-ocean">Photo source: {mainImage.source} <ExternalLink size={13}/></a>
          </figcaption>
        </figure>

        {supportingImages.map((image)=><figure key={image.src} className="group relative aspect-[16/10] overflow-hidden rounded-3xl bg-luxury-navy lg:min-h-[272px]">
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-luxury-navy via-luxury-navy/80 to-transparent px-5 pb-5 pt-14 text-white">
            <h2 className="font-display text-xl font-black md:text-2xl">{image.title}</h2>
            <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold text-white/70 transition hover:text-luxury-ocean">Photo source: {image.source} <ExternalLink size={12}/></a>
          </figcaption>
        </figure>)}
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">These online destination photographs illustrate places and experiences that may form part of the package. Exact hotels, rooms, vehicles and activity operators are confirmed in the final quotation. Open each source link for photographer and licence details.</p>
    </section>
  );
}
