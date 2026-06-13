import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Ferone Tours & Travels",
  description: "Answers about quotations, deposits, flights, visas, custom packages, cancellations, park fees, group travel and travel documents."
};

const faqs = [
  {
    question: "How do I request a travel quotation?",
    answer: "Choose a package and use its Request Package button, send an inquiry through the Contact page, or message Ferone on WhatsApp. Include your destination, preferred dates, number of travelers, departure city and preferred accommodation level so the quotation can be prepared accurately."
  },
  {
    question: "Can Ferone customise the advertised packages?",
    answer: "Yes. The displayed itineraries are starting points. Dates, duration, transport, accommodation category, room arrangement and activities can be adjusted before confirmation, subject to availability and supplier rules."
  },
  {
    question: "Are flights included in every package?",
    answer: "No. Flights are included only when they are specifically listed in the written quotation or invoice. Some packages may be quoted as land-only, while others can include domestic, regional or international flights on request."
  },
  {
    question: "Does Ferone assist with visa applications?",
    answer: "Ferone can provide document guidance and application support for selected destinations. Visa approval is always decided by the relevant embassy, consulate or immigration authority and cannot be guaranteed by a travel agency."
  },
  {
    question: "Is a deposit required to confirm a booking?",
    answer: "Most confirmed arrangements require a deposit. The exact amount, payment deadline and remaining balance date will be stated in the quotation or invoice because airlines, hotels, parks and tour operators apply different conditions."
  },
  {
    question: "Can I pay for my trip in instalments?",
    answer: "An instalment plan may be possible when there is enough time before travel and when supplier deadlines allow it. The agreed payment schedule must be written into the quotation or invoice before payment begins."
  },
  {
    question: "What happens if I need to cancel or change my trip?",
    answer: "Tell Ferone as soon as possible. Any refund, credit, amendment fee or loss of payment depends on the cancellation date and the rules of the airline, hotel, park, transport provider or activity operator involved."
  },
  {
    question: "Are park fees and activity fees included?",
    answer: "They are included only when they appear in the confirmed quotation. Entry fees can change, and optional activities such as balloon safaris, marine excursions or private upgrades may be quoted separately."
  },
  {
    question: "Does Ferone arrange group and corporate travel?",
    answer: "Yes. Ferone can coordinate group flights, accommodation, transfers, conferences, retreats, school or church travel and custom itineraries. Group quotations depend on rooming lists, payment deadlines and supplier availability."
  },
  {
    question: "What travel documents do I need?",
    answer: "Requirements depend on your nationality and destination. Travelers are responsible for holding a valid passport, required visas, vaccination documents, permits and any other entry documents. Ferone can help you understand the checklist for your trip."
  },
  {
    question: "Should I buy travel insurance?",
    answer: "Travel insurance is strongly recommended, especially for international trips, safaris and packages with non-refundable components. The policy should be reviewed carefully for medical care, cancellation, baggage and activity exclusions."
  },
  {
    question: "When is my booking considered confirmed?",
    answer: "A trip is confirmed only after Ferone issues written confirmation and the required payment has been received and accepted. A quotation alone does not reserve seats, rooms or activities unless it says so in writing."
  }
];

export default function FAQPage(){
  return <>
    <PageHero
      title="Frequently Asked Questions"
      text="Clear answers about quotations, payments, visas, flights, package changes and the booking process."
    />

    <section className="container py-10 md:py-14">
      <div className="mx-auto max-w-4xl space-y-3">
        {faqs.map((faq, index)=><details key={faq.question} className="group rounded-3xl border bg-white p-5 shadow-sm open:shadow-luxury md:p-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left text-lg font-black text-luxury-ink [&::-webkit-details-marker]:hidden md:text-xl">
            <span><span className="mr-3 text-luxury-ocean">{String(index + 1).padStart(2,"0")}.</span>{faq.question}</span>
            <span className="mt-0.5 text-2xl text-luxury-ocean transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 border-t pt-4 leading-7 text-slate-600">{faq.answer}</p>
        </details>)}
      </div>
    </section>

    <section className="container pb-12 md:pb-16">
      <div className="rounded-3xl bg-luxury-navy p-6 text-white md:p-10">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-luxury-ocean">Still need help?</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Speak directly with a Ferone travel expert</h2>
            <p className="mt-3 max-w-2xl leading-7 text-white/75">Send your destination, dates and number of travelers for guidance based on your specific trip.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a href="https://wa.me/254710557164" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-black text-white"><MessageCircle size={18}/> WhatsApp Ferone</a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-black text-luxury-navy">Contact page <ArrowRight size={17}/></Link>
          </div>
        </div>
      </div>
    </section>
  </>;
}
