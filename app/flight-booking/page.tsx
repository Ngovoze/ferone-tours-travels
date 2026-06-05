import { PageHero } from "@/components/page-hero";
import { InquiryForm } from "@/components/forms/inquiry-form";

export default function FlightPage(){return <><PageHero title="Flight Booking" text="Flight search and booking coordination for local, regional and international travel."/><section className="container grid gap-10 py-20 lg:grid-cols-2"><div><h2 className="font-display text-4xl font-bold">Flights, hotels and transfers coordinated together.</h2><p className="mt-5 leading-8 text-slate-600">Share your route, dates and traveler details. Ferone will help match you with practical travel options.</p></div><div className="rounded-[2rem] bg-luxury-sand p-6"><InquiryForm /></div></section></>}
