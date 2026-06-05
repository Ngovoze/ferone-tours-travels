import Image from "next/image";

const heroSlides = [
  "/images/hero/hero-safari.svg",
  "/images/hero/hero-slide-2.svg",
  "/images/hero/hero-slide-3.svg",
  "/images/hero/hero-slide-4.svg"
];

export function HeroSlideshow(){
  return <div className="absolute inset-0 overflow-hidden">
    {heroSlides.map((src, index)=>(
      <Image
        key={src}
        src={src}
        alt={`Ferone Tours hero slide ${index + 1}`}
        fill
        priority={index === 0}
        sizes="100vw"
        className="hero-slide object-cover"
        style={{ animationDelay: `${index * 6}s` }}
      />
    ))}
  </div>
}
