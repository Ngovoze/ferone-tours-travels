"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowRight, Clock, MapPin, MessageCircle, X } from "lucide-react";
import type { Tour } from "@/lib/data";

function getImageCropClass(image: string){
  if(image.includes("tour-dubai")) return "scale-[2.65] group-hover:scale-[2.72]";
  if(image.includes("tour-zanzibar")) return "scale-[2.4] group-hover:scale-[2.47]";
  if(image.includes("tour-diani")) return "scale-[2.25] group-hover:scale-[2.32]";
  if(image.includes("tour-serengeti")) return "scale-[2.25] group-hover:scale-[2.32]";
  return "scale-100 group-hover:scale-105";
}

export function TourCard({ tour }: { tour: Tour }){
  const [isOpen, setIsOpen] = useState(false);
  const imageCropClass = getImageCropClass(tour.image);
  const detailUrl = `/tours-safaris/${tour.slug}`;

  function sendWhatsAppInquiry(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const travelers = String(formData.get("travelers") || "").trim();
    const travelDate = String(formData.get("travelDate") || "").trim();

    const messageLines = [
      "Hello Ferone Tours & Travels, I would like to request this package.",
      "",
      `Package: ${tour.title}`,
      `Destination: ${tour.destination}`,
      `Duration: ${tour.duration}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Travelers: ${travelers || "Not specified"}`,
      `Travel date: ${travelDate || "Not specified"}`
    ];

    window.open(`https://wa.me/254710557164?text=${encodeURIComponent(messageLines.join("\n"))}`, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  }

  return (
    <>
      <article className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-luxury md:rounded-[1.75rem]">
        <div className="relative aspect-[3/2] overflow-hidden bg-luxury-navy">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition duration-700 ease-out ${imageCropClass}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/70 via-transparent to-transparent" />
          <Link
            href={detailUrl}
            className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-black text-luxury-navy shadow-sm transition hover:bg-luxury-ocean md:text-sm"
          >
            Learn more <ArrowRight size={14}/>
          </Link>
        </div>

        <div className="p-5 md:p-6">
          <Link href={detailUrl} className="transition hover:text-luxury-ocean">
            <h3 className="text-xl font-bold leading-tight md:text-2xl">{tour.title}</h3>
          </Link>
          <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-600 md:gap-4 md:text-sm">
            <span className="flex items-center gap-1"><MapPin size={15}/>{tour.destination}</span>
            <span className="flex items-center gap-1"><Clock size={15}/>{tour.duration}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tour.highlights.map((highlight)=><span key={highlight} className="rounded-full bg-luxury-sand px-3 py-1 text-[11px] font-semibold text-luxury-navy md:text-xs">{highlight}</span>)}
          </div>
          <div className="mt-5 flex flex-wrap gap-3 md:mt-6">
            <Link href={detailUrl} className="inline-flex items-center gap-2 rounded-full border border-luxury-ocean px-5 py-3 text-sm font-black text-luxury-ocean transition hover:bg-luxury-ocean hover:text-luxury-navy md:text-base">
              View details <ArrowRight size={16}/>
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-luxury-ocean px-5 py-3 text-sm font-black text-luxury-navy transition hover:bg-luxury-navy hover:text-white md:text-base"
            >
              Request package
            </button>
          </div>
        </div>
      </article>

      {isOpen ? (
        <div className="fixed inset-0 z-[999] flex items-end justify-center bg-luxury-navy/75 p-3 backdrop-blur-sm sm:items-center sm:p-6">
          <div className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl sm:p-7">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close package inquiry"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-luxury-sand text-luxury-navy transition hover:bg-luxury-ocean"
            >
              <X size={20}/>
            </button>

            <p className="pr-12 text-xs font-black uppercase tracking-[.2em] text-luxury-ocean">Package inquiry</p>
            <h3 className="mt-2 pr-12 text-2xl font-black leading-tight text-luxury-ink">{tour.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Fill in your details and send this package request directly to Ferone on WhatsApp.</p>

            <div className="mt-4 rounded-2xl bg-luxury-sand p-4 text-sm text-slate-700">
              <p><strong>Destination:</strong> {tour.destination}</p>
              <p><strong>Duration:</strong> {tour.duration}</p>
            </div>

            <form onSubmit={sendWhatsAppInquiry} className="mt-5 grid gap-3">
              <input name="name" required placeholder="Your full name" className="h-12 rounded-2xl border border-slate-300 px-4 outline-none focus:border-luxury-ocean" />
              <input name="phone" required placeholder="Phone / WhatsApp number" className="h-12 rounded-2xl border border-slate-300 px-4 outline-none focus:border-luxury-ocean" />
              <div className="grid gap-3 sm:grid-cols-2">
                <input name="travelers" placeholder="Number of travelers" className="h-12 rounded-2xl border border-slate-300 px-4 outline-none focus:border-luxury-ocean" />
                <input name="travelDate" type="date" className="h-12 rounded-2xl border border-slate-300 px-4 outline-none focus:border-luxury-ocean" />
              </div>
              <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 font-black text-white transition hover:bg-[#1ebe5d]"><MessageCircle size={19}/> Send Request on WhatsApp</button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
