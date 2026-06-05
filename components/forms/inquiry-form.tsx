export function InquiryForm({ compact=false }: { compact?: boolean }){
  return <form action="/api/inquiry" method="post" className="grid gap-3">
    <input name="name" required placeholder="Full name" className="rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-luxury-ink outline-none" />
    <input name="phone" required placeholder="Phone / WhatsApp" className="rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-luxury-ink outline-none" />
    <input name="destination" required placeholder="Destination e.g. Zanzibar, Dubai" className="rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-luxury-ink outline-none" />
    {!compact && <textarea name="message" placeholder="Tell us your travel dates, budget and number of travelers" className="min-h-32 rounded-2xl border bg-white px-4 py-3 text-luxury-ink outline-none" />}
    <button className="rounded-2xl bg-luxury-ocean px-5 py-4 font-black text-luxury-navy shadow-brand transition hover:scale-[1.01] hover:bg-white">Submit Inquiry</button>
  </form>
}
