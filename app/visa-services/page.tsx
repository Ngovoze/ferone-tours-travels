import { PageHero } from "@/components/page-hero";
import { InquiryForm } from "@/components/forms/inquiry-form";

export default function VisaPage(){return <><PageHero title="Visa Services" text="Professional visa assistance, checklist support and travel-document consultation for international trips."/><section className="container grid gap-10 py-20 lg:grid-cols-2"><div><h2 className="font-display text-4xl font-bold">Get guidance before you apply.</h2><p className="mt-5 leading-8 text-slate-600">Ferone helps travelers understand requirements, prepare documents, avoid common mistakes and plan realistic timelines.</p></div><div className="rounded-[2rem] bg-luxury-navy p-6 text-white"><InquiryForm /></div></section></>}
