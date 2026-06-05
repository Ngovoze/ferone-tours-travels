import { PageHero } from "@/components/page-hero";
import { posts } from "@/lib/data";
import { CalendarDays } from "lucide-react";

export default function BlogPage(){return <><PageHero title="Travel Blog" text="Destination guides, travel tips and planning advice from Ferone Tours & Travels."/><section className="container grid gap-6 py-20 md:grid-cols-3">{posts.map(post=><article key={post.title} className="rounded-[1.5rem] border bg-white p-7 shadow-sm"><CalendarDays className="mb-4 text-luxury-ocean"/><h2 className="text-2xl font-bold">{post.title}</h2><p className="mt-3 text-slate-600">{post.excerpt}</p></article>)}</section></>}
