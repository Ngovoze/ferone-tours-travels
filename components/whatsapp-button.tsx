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
      title="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-[80] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:-translate-y-1 hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={27} strokeWidth={2.4} />
    </a>
  );
}
