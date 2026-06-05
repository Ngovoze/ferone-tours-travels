import { MessageCircle } from "lucide-react";

export function WhatsAppButton(){
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254712345678';
  return <a href={`https://wa.me/${number}?text=Hello%20Ferone%20Tours%2C%20I%20would%20like%20to%20plan%20a%20trip.`} aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-luxury transition hover:scale-105"><MessageCircle /></a>
}
