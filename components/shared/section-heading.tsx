export function SectionHeading({ eyebrow, title, text, light=false }: { eyebrow: string; title: string; text?: string; light?: boolean }){
  return <div className="mx-auto max-w-3xl text-center"><p className={`font-bold uppercase tracking-[.25em] ${light?'text-luxury-gold':'text-luxury-ocean'}`}>{eyebrow}</p><h2 className={`mt-3 font-display text-4xl font-bold md:text-5xl ${light?'text-white':'text-luxury-ink'}`}>{title}</h2>{text && <p className={`mt-4 text-lg leading-8 ${light?'text-white/75':'text-slate-600'}`}>{text}</p>}</div>
}
