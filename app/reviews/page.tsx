import type { Metadata } from "next";
import { BadgeCheck, Mail, MessageCircle, MessageSquareQuote, ShieldCheck, Star } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Verified Traveler Reviews | Ferone Tours & Travels",
  description: "Ferone's policy for publishing genuine traveler feedback and a simple way for past clients to share their experience."
};

const standards = [
  {
    icon: BadgeCheck,
    title: "Real clients only",
    text: "A review should come from a traveler, group representative or organization that booked or travelled through Ferone."
  },
  {
    icon: ShieldCheck,
    title: "Permission before publishing",
    text: "Ferone will ask before displaying a client's name, trip details, photograph or organization on the website."
  },
  {
    icon: MessageSquareQuote,
    title: "Feedback kept authentic",
    text: "Reviews may be shortened for layout, but their meaning and rating should not be changed or invented."
  }
];

export default function ReviewsPage(){
  return <>
    <PageHero
      title="Verified Traveler Reviews"
      text="A transparent review space for genuine feedback from Ferone clients and travel groups."
    />

    <section className="container py-10 md:py-14">
      <div className="grid gap-5 md:grid-cols-3">
        {standards.map((item)=>{
          const Icon = item.icon;
          return <article key={item.title} className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-luxury-sand text-luxury-ocean"><Icon size={23}/></div>
            <h2 className="mt-4 text-xl font-black text-luxury-ink">{item.title}</h2>
            <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
          </article>;
        })}
      </div>
    </section>

    <section className="container pb-10 md:pb-14">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <article className="rounded-3xl bg-luxury-navy p-6 text-white md:p-9">
          <p className="text-xs font-black uppercase tracking-[.2em] text-luxury-ocean">Review profiles</p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">External review links will be published after verification</h2>
          <p className="mt-4 leading-8 text-white/75">Ferone should connect only official Google, TripAdvisor or Facebook review profiles controlled by the business. Until those profile links are confirmed, this page will not display fabricated ratings or unverified testimonials.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4"><div className="flex items-center gap-2"><Star className="text-luxury-ocean" size={19}/><strong>Google Reviews</strong></div><p className="mt-2 text-sm text-white/65">Official profile link pending verification.</p></div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4"><div className="flex items-center gap-2"><Star className="text-luxury-ocean" size={19}/><strong>TripAdvisor</strong></div><p className="mt-2 text-sm text-white/65">Official profile link pending verification.</p></div>
          </div>
        </article>

        <article className="rounded-3xl border bg-white p-6 shadow-luxury md:p-8">
          <p className="text-xs font-black uppercase tracking-[.2em] text-luxury-ocean">Past Ferone client?</p>
          <h2 className="mt-2 text-3xl font-black text-luxury-ink">Share your travel experience</h2>
          <p className="mt-3 leading-7 text-slate-600">Send the trip name, travel month, a short review and any photographs you permit Ferone to publish. Personal information will not be displayed without consent.</p>
          <div className="mt-6 grid gap-3">
            <a href="https://wa.me/254710557164?text=Hello%20Ferone%20Tours%20%26%20Travels%2C%20I%20would%20like%20to%20share%20a%20review%20of%20my%20trip." className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 font-black text-white"><MessageCircle size={19}/> Submit through WhatsApp</a>
            <a href="mailto:info@feronetours.com?subject=Ferone%20Traveler%20Review" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-luxury-navy px-5 py-4 font-black text-white"><Mail size={19}/> Submit by email</a>
          </div>
        </article>
      </div>
    </section>

    <section className="bg-luxury-sand py-10 md:py-14">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[.2em] text-luxury-ocean">Publication checklist</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-luxury-ink md:text-4xl">What makes a review suitable for publication?</h2>
          <div className="mt-6 grid gap-4 text-left sm:grid-cols-2">
            {["The reviewer identifies the package or service used.","The booking can be matched to a real Ferone client or group.","The reviewer confirms whether their name may be displayed.","Photographs are used only with the traveler's permission.","Private passport, payment and contact details are removed.","Feedback is not changed to make it sound more positive."].map((item)=><div key={item} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm"><BadgeCheck className="mt-0.5 shrink-0 text-luxury-ocean" size={19}/><p className="text-sm leading-6 text-slate-700">{item}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  </>;
}
