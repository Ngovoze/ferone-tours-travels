import { MessageCircle } from "lucide-react";

export function WhatsAppButton(){
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254710557164";
  const message = encodeURIComponent("Hello Ferone Tours & Travels, I would like to plan a trip.");

  return (
    <a
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ferone Tours & Travels on WhatsApp"
      className="group fixed bottom-6 right-6 z-[80] flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 font-bold text-white shadow-[0_18px_45px_rgba(37,211,102,0.38)] transition hover:-translate-y-1 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#25D366]/35"
    >
      <span className="absolute -inset-1 -z-10 rounded-full bg-[#25D366]/35 opacity-70 blur-md transition group-hover:opacity-100" />
      <span className="absolute right-2 top-2 h-3 w-3 rounded-full bg-white/80">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/80" />
      </span>
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/18">
        <MessageCircle size={25} strokeWidth={2.5} />
      </span>
      <span className="hidden pr-2 text-sm leading-tight sm:block">
        Chat on<br />WhatsApp
      </span>
    </a>
  );
}
