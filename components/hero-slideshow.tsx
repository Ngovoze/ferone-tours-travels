import Image from "next/image";

const heroSlides = [
  { src: "/images/tours/tour-maasai-mara.svg", alt: "Maasai Mara safari in Kenya", position: "center 55%" },
  { src: "/images/tours/tour-zanzibar.svg", alt: "Zanzibar beach holiday", position: "center 52%" },
  { src: "/images/tours/tour-diani.svg", alt: "Diani beach family holiday", position: "center 50%" },
  { src: "/images/tours/tour-dubai.svg", alt: "Dubai city holiday", position: "center 48%" }
];

export function HeroSlideshow(){
  return (
    <div className="absolute inset-0 overflow-hidden bg-luxury-navy">
      {heroSlides.map((slide, index)=>(
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className="hero-slide object-cover"
          style={{ objectPosition: slide.position, animationDelay: `${index * 6}s` }}
        />
      ))}
    </div>
  );
}
