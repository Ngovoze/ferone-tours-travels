export function PageHero({ title, text }: { title:string; text:string }){
  return <section className="premium-gradient px-4 pb-24 pt-40 text-center text-white"><p className="mb-4 font-bold uppercase tracking-[.25em] text-luxury-gold">Ferone Tours & Travels</p><h1 className="mx-auto max-w-4xl font-display text-5xl font-bold md:text-7xl">{title}</h1><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">{text}</p></section>
}
