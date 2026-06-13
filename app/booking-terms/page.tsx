import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight, FileCheck2, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Booking Terms & Conditions | Ferone Tours & Travels",
  description: "General booking, payment, cancellation, documentation and supplier terms for Ferone Tours & Travels."
};

const sections = [
  {
    title: "1. Quotations and availability",
    text: "A quotation is based on the information available when it is prepared. Airfares, accommodation, park fees, transfers, activities, taxes and currency-based costs may change before payment and written confirmation. A quotation does not hold seats, rooms or services unless it expressly states that a temporary reservation has been made."
  },
  {
    title: "2. Booking confirmation",
    text: "A booking is confirmed only after Ferone Tours & Travels issues written confirmation and receives the required payment. The client must check all names, dates, routes, room arrangements and services immediately. Passenger names must match the travel documents that will be used for the trip."
  },
  {
    title: "3. Deposits and balance payments",
    text: "The required deposit, payment method and balance deadline will be shown on the quotation or invoice. Different suppliers may require different payment schedules. Failure to pay by the stated deadline may lead to cancellation, loss of availability or a revised price."
  },
  {
    title: "4. Prices and currency changes",
    text: "Prices are based on the quoted services, exchange rates, taxes and supplier charges. Before full payment and confirmation, Ferone may revise a quotation when a supplier changes its price, a government charge changes, or a currency movement materially affects the cost. Any revision will be communicated before the client accepts it."
  },
  {
    title: "5. Client-requested changes",
    text: "Requests to change travel dates, names, routes, hotels, room types, flights or activities are subject to availability and supplier rules. Amendment charges, fare differences and additional service fees may apply. Some airline tickets, promotional rates and special offers cannot be changed."
  },
  {
    title: "6. Cancellation by the client",
    text: "Cancellation requests must be made in writing. Refunds, credits and cancellation charges depend on the date of cancellation and the terms of the airline, hotel, park, transport company, activity provider or other supplier. Non-refundable payments and already-issued tickets may not be recoverable."
  },
  {
    title: "7. Changes or cancellation by suppliers",
    text: "Airlines, hotels, parks and other suppliers may alter schedules, routes, facilities or services. Ferone will assist with reasonable alternatives where possible, but supplier decisions remain subject to their own conditions. Any additional cost or refund will be handled according to the responsible supplier's rules."
  },
  {
    title: "8. Passports, visas and entry requirements",
    text: "Travelers are responsible for valid passports, visas, permits, vaccination documents and all destination entry or transit requirements. Ferone may provide guidance, but approval and admission decisions are made by embassies, consulates, immigration authorities and border officials. A visa or entry approval cannot be guaranteed."
  },
  {
    title: "9. Travel insurance",
    text: "Comprehensive travel insurance is strongly recommended. The policy should be suitable for the destination and planned activities and should address medical expenses, emergency evacuation, cancellation, delay, baggage and personal liability. Clients are responsible for understanding policy exclusions and claim procedures."
  },
  {
    title: "10. Health, safety and traveler responsibility",
    text: "Clients should seek appropriate medical advice before travel and disclose mobility, dietary or health needs that may affect the arrangements. Travelers must follow lawful instructions from guides, carriers, accommodation providers and authorities and must not behave in a way that endangers people, wildlife, property or the continuation of the trip."
  },
  {
    title: "11. Safari, wildlife and weather conditions",
    text: "Wildlife sightings, migration locations, river crossings and weather conditions cannot be guaranteed. Routes and activities may change for safety, park regulations, road conditions, water levels, animal movement or operational reasons. Such adjustments do not automatically create a right to a refund where the main contracted service is still delivered."
  },
  {
    title: "12. Force majeure and events beyond control",
    text: "Ferone is not responsible for failure or delay caused by events outside reasonable control, including severe weather, natural disasters, epidemics, government restrictions, strikes, conflict, border closures, airline disruption or supplier failure. Ferone will provide reasonable assistance, but additional costs may remain the traveler's responsibility subject to supplier and insurance terms."
  },
  {
    title: "13. Complaints and assistance",
    text: "A traveler should report a problem promptly while the trip is in progress so that Ferone or the supplier has an opportunity to assist. A formal complaint should then be submitted in writing with supporting documents within a reasonable period after the trip."
  },
  {
    title: "14. Final quotation and supplier conditions",
    text: "The written quotation, invoice and booking confirmation form part of these terms. Where a named airline, hotel, park or activity provider has additional conditions, those supplier conditions also apply. If a special condition differs from this general page, the condition specifically disclosed in the quotation or confirmation takes priority for that service."
  }
];

export default function BookingTermsPage(){
  return <>
    <PageHero
      title="Booking Terms & Conditions"
      text="General terms covering quotations, payments, changes, cancellations, documentation and supplier responsibilities."
    />

    <section className="container py-10 md:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-luxury-sand p-5"><FileCheck2 className="text-luxury-ocean"/><h2 className="mt-3 text-lg font-black">Read before payment</h2><p className="mt-2 text-sm leading-6 text-slate-600">The final quotation may contain package-specific conditions and payment deadlines.</p></div>
          <div className="rounded-3xl bg-luxury-sand p-5"><ShieldCheck className="text-luxury-ocean"/><h2 className="mt-3 text-lg font-black">Supplier rules apply</h2><p className="mt-2 text-sm leading-6 text-slate-600">Airlines, hotels and activity providers may apply separate amendment and refund conditions.</p></div>
          <div className="rounded-3xl bg-amber-50 p-5"><AlertTriangle className="text-amber-600"/><h2 className="mt-3 text-lg font-black">Ask before confirming</h2><p className="mt-2 text-sm leading-6 text-slate-600">Request clarification in writing where any inclusion, fee or cancellation rule is unclear.</p></div>
        </div>

        <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-bold text-slate-500">Last updated: 13 June 2026</p>
          <p className="mt-4 leading-8 text-slate-600">These general terms apply when they are referenced in a Ferone Tours & Travels quotation, invoice or booking confirmation. They should be read together with the exact inclusions, payment schedule and supplier conditions supplied for the client's trip.</p>
        </div>

        <div className="mt-6 space-y-4">
          {sections.map((section)=><article key={section.title} className="rounded-3xl border bg-white p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-black text-luxury-ink md:text-2xl">{section.title}</h2>
            <p className="mt-3 leading-8 text-slate-600">{section.text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="container pb-12 md:pb-16">
      <div className="rounded-3xl bg-luxury-navy p-6 text-white md:p-10">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Need clarification before paying?</h2>
        <p className="mt-3 max-w-2xl leading-7 text-white/75">Ask Ferone to explain the payment schedule, cancellation conditions and inclusions for your exact booking in writing.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-luxury-ocean px-6 py-3 font-black text-luxury-navy">Contact Ferone <ArrowRight size={17}/></Link>
          <Link href="/faq" className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 font-black text-white">Read the FAQ</Link>
        </div>
      </div>
    </section>
  </>;
}
