export const services = [
  "Tours & Safaris","Holiday Packages","Visa Assistance","Flight Booking","Hotel Reservations","Airport Transfers","Corporate Travel","Travel Consultation","Group Travel","Honeymoon Packages","International Travel Planning"
];

export type Tour = {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  price: string;
  image: string;
  gallery: string[];
  highlights: string[];
  summary: string;
  overview: string;
  bestTime: string;
  bestFor: string[];
  itinerary: { day: string; title: string; description: string }[];
  includes: string[];
  excludes: string[];
};

export const tours: Tour[] = [
  {
    slug: "maasai-mara-luxury-safari",
    title: "Maasai Mara Luxury Safari",
    destination: "Kenya",
    duration: "3 Days / 2 Nights",
    price: "Request quote",
    image: "/images/tours/tour-maasai-mara.svg",
    gallery: [
      "/images/tours/tour-maasai-mara.svg",
      "/images/destinations/destination-kenya.svg",
      "/images/tours/tour-serengeti.svg"
    ],
    highlights: ["Game drives","Luxury lodge","Big Five experience"],
    summary: "A compact luxury safari combining scenic savannah landscapes, professionally guided game drives and comfortable lodge accommodation in Kenya's best-known wildlife region.",
    overview: "The Maasai Mara forms part of the wider Mara-Serengeti ecosystem and is known for open grasslands, big-cat sightings and abundant resident wildlife throughout the year. This suggested three-day programme is designed for travelers who want a premium safari without a long itinerary. During the seasonal migration period, wildlife movement may include large herds and river-crossing activity, while other months can offer quieter game viewing and excellent photography.",
    bestTime: "July to October is popular for migration activity. January to March and June can offer rewarding wildlife viewing with fewer peak-season crowds.",
    bestFor: ["First-time safari travelers","Couples and honeymooners","Wildlife photographers","Short luxury escapes"],
    itinerary: [
      { day: "Day 1", title: "Nairobi to Maasai Mara", description: "Depart Nairobi by road or optional scheduled flight. Arrive for lunch, settle into the lodge and enjoy an afternoon game drive across the savannah." },
      { day: "Day 2", title: "Full-day safari experience", description: "Begin with an early game drive when wildlife is most active. Continue with lodge leisure time and an afternoon drive. Optional balloon safari or cultural visit can be added." },
      { day: "Day 3", title: "Final game drive and return", description: "Enjoy a short morning wildlife drive and breakfast before returning to Nairobi by road or flight connection." }
    ],
    includes: ["Two nights of selected lodge or tented-camp accommodation","Meals according to the confirmed itinerary","Professional safari driver-guide","Shared or private game drives as quoted","Nairobi return transport or fly-in option","Park fees when specifically listed in the final quotation"],
    excludes: ["International flights and visas","Travel and medical insurance","Optional balloon safari or cultural visits","Tips, drinks and personal expenses","Items not listed in the confirmed quotation"]
  },
  {
    slug: "zanzibar-honeymoon-escape",
    title: "Zanzibar Honeymoon Escape",
    destination: "Zanzibar",
    duration: "5 Days / 4 Nights",
    price: "Request quote",
    image: "/images/tours/tour-zanzibar.svg",
    gallery: [
      "/images/tours/tour-zanzibar.svg",
      "/images/destinations/destination-zanzibar.svg",
      "/images/tours/tour-diani.svg"
    ],
    highlights: ["Beach resort","Romantic setup","Stone Town tour"],
    summary: "A romantic island break pairing an Indian Ocean beach resort with culture, relaxation and optional private experiences for couples.",
    overview: "Zanzibar combines white-sand beaches with the historic lanes and carved doors of Stone Town, a UNESCO World Heritage site. This honeymoon plan balances resort time with a cultural day, while leaving space for optional experiences such as a spice tour, sunset dhow cruise, snorkeling or a private dinner. The hotel category and romantic setup can be adjusted to suit the couple's preferred budget and style.",
    bestTime: "June to October is generally dry and comfortable. December to February is warm and popular for beach holidays, although conditions vary by coast and season.",
    bestFor: ["Honeymooners","Anniversary trips","Beach lovers","Couples seeking relaxation and culture"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Zanzibar", description: "Airport pickup and private transfer to the selected beach resort. Check in, relax and enjoy an optional romantic room setup or beachfront dinner." },
      { day: "Day 2", title: "Beach and resort leisure", description: "A flexible day for swimming, spa treatments, resort activities or simply relaxing beside the Indian Ocean." },
      { day: "Day 3", title: "Stone Town and spice experience", description: "Explore Stone Town's historic streets and architecture, with an optional spice-farm visit and local lunch." },
      { day: "Day 4", title: "Island experience", description: "Choose an optional snorkeling excursion, sunset dhow cruise, sandbank trip or another full day at the resort." },
      { day: "Day 5", title: "Departure", description: "Breakfast, check-out and transfer to Zanzibar Airport for the onward flight." }
    ],
    includes: ["Four nights at the selected beach resort","Daily breakfast or selected meal plan","Zanzibar airport transfers","Stone Town tour when included in the quotation","Romantic setup options based on hotel selection","Ferone trip-planning and booking coordination"],
    excludes: ["Flights unless specifically included","Zanzibar entry requirements and local travel levies","Optional marine excursions and spa treatments","Travel insurance","Personal expenses and gratuities"]
  },
  {
    slug: "diani-beach-family-holiday",
    title: "Diani Beach Family Holiday",
    destination: "Kenya Coast",
    duration: "4 Days / 3 Nights",
    price: "Request quote",
    image: "/images/tours/tour-diani.svg",
    gallery: [
      "/images/tours/tour-diani.svg",
      "/images/destinations/destination-kenya.svg",
      "/images/tours/tour-zanzibar.svg"
    ],
    highlights: ["Beach hotel","Family activities","Airport transfer"],
    summary: "An easy coastal family holiday with a child-friendly beach hotel, flexible activities and convenient transfers to Diani on Kenya's south coast.",
    overview: "Diani is known for its long Indian Ocean beach, palm-lined coastline and a broad selection of family-friendly hotels and resorts. The itinerary leaves enough unstructured time for children and adults to enjoy the pool and beach, while optional activities can include marine excursions, snorkeling, nature visits or a day trip. Ferone can adjust room configuration, meal plan and transport according to the family's size and budget.",
    bestTime: "December to March and June to October are popular periods for coastal holidays. Weather and ocean conditions should be checked before confirming marine activities.",
    bestFor: ["Families with children","Multi-generation trips","Beach breaks from Nairobi","Travelers seeking a relaxed schedule"],
    itinerary: [
      { day: "Day 1", title: "Travel to Diani", description: "Flight, train-and-transfer or road arrival depending on the confirmed plan. Check into the selected family hotel and enjoy the beach or pool." },
      { day: "Day 2", title: "Beach leisure and family activities", description: "A relaxed day for swimming, resort entertainment and optional water activities suitable for the family." },
      { day: "Day 3", title: "Optional coastal excursion", description: "Choose a marine excursion, nature experience, cultural visit or another full day at the resort." },
      { day: "Day 4", title: "Departure", description: "Breakfast, check-out and transfer for the return journey." }
    ],
    includes: ["Three nights in selected family accommodation","Meal plan specified in the quotation","Airport, station or road transfers as confirmed","Family room configuration support","Ferone booking and itinerary coordination"],
    excludes: ["Flights or train tickets unless included","Optional excursions and water sports","Travel insurance","Personal expenses, tips and drinks outside the meal plan","Items not shown in the final quotation"]
  },
  {
    slug: "serengeti-ngorongoro-safari",
    title: "Serengeti & Ngorongoro Safari",
    destination: "Tanzania",
    duration: "5 Days / 4 Nights",
    price: "Request quote",
    image: "/images/tours/tour-serengeti.svg",
    gallery: [
      "/images/tours/tour-serengeti.svg",
      "/images/destinations/destination-tanzania.svg",
      "/images/hero/hero-slide-2.svg"
    ],
    highlights: ["Migration route","Crater visit","Expert guide"],
    summary: "A classic northern Tanzania safari combining the open Serengeti plains with the dramatic wildlife-rich Ngorongoro Crater.",
    overview: "Serengeti National Park and the Ngorongoro Conservation Area are linked parts of northern Tanzania's major wildlife circuit. The Serengeti is known for expansive plains and seasonal migration movements, while Ngorongoro offers concentrated game viewing within a vast volcanic caldera. This five-day outline can be adapted according to travel month, lodge category and whether the guest enters through Arusha, Kilimanjaro or another safari connection.",
    bestTime: "June to October is a popular dry-season period. January to March is often selected for the southern-plains calving season. Migration location changes with rainfall and cannot be guaranteed.",
    bestFor: ["Wildlife enthusiasts","Migration-focused travelers","Couples and small groups","Travelers combining Kenya and Tanzania"],
    itinerary: [
      { day: "Day 1", title: "Arusha to the safari circuit", description: "Meet the guide and travel toward the Serengeti region, with scenic stops and game viewing depending on the confirmed route." },
      { day: "Day 2", title: "Serengeti game drives", description: "Morning and afternoon wildlife drives across the selected Serengeti sector, chosen according to season and lodge location." },
      { day: "Day 3", title: "Full Serengeti exploration", description: "A full day of wildlife viewing with picnic or lodge lunch and time around key plains, river or kopje habitats." },
      { day: "Day 4", title: "Serengeti to Ngorongoro", description: "Morning game viewing followed by travel toward the Ngorongoro highlands and overnight near the crater." },
      { day: "Day 5", title: "Crater drive and return", description: "Descend into Ngorongoro Crater for a game drive before continuing to Arusha or the departure airport." }
    ],
    includes: ["Four nights in selected safari accommodation","Meals specified in the final itinerary","Professional driver-guide and safari vehicle","Game drives in Serengeti and Ngorongoro","Park and conservation fees when stated in the quotation","Arusha or airport transfers according to the route"],
    excludes: ["International and regional flights unless quoted","Visa and travel-insurance costs","Optional balloon safari","Tips, drinks and personal expenses","Any item not expressly included in the quotation"]
  },
  {
    slug: "dubai-premium-city-break",
    title: "Dubai Premium City Break",
    destination: "Dubai",
    duration: "4 Days / 3 Nights",
    price: "Request quote",
    image: "/images/tours/tour-dubai.svg",
    gallery: [
      "/images/tours/tour-dubai.svg",
      "/images/destinations/destination-dubai.svg",
      "/images/hero/hero-slide-4.svg"
    ],
    highlights: ["Flights","Hotel","Desert safari"],
    summary: "A polished Dubai city escape combining modern landmarks, shopping, a desert experience and a centrally located hotel.",
    overview: "Dubai offers a mix of high-rise architecture, beaches, shopping districts, traditional creek-side neighborhoods and desert landscapes. This short programme is designed for travelers who want a comfortable introduction to the city without an overloaded schedule. Hotel location, airline, baggage allowance, attraction tickets and visa support can be tailored during quotation.",
    bestTime: "November to March is generally preferred for milder outdoor weather. Summer travel can offer value but comes with very high temperatures.",
    bestFor: ["First-time Dubai visitors","Couples and friends","Shopping and city-break travelers","Short international holidays"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Dubai", description: "Airport transfer to the selected hotel, check-in and free time for a relaxed evening or optional marina activity." },
      { day: "Day 2", title: "Dubai city highlights", description: "Explore a mixture of modern landmarks and heritage areas. Attraction tickets can be added according to the guest's interests." },
      { day: "Day 3", title: "Desert safari experience", description: "Morning at leisure followed by an afternoon and evening desert excursion with activities based on the selected operator package." },
      { day: "Day 4", title: "Departure", description: "Breakfast, check-out and airport transfer, with optional shopping time depending on the flight schedule." }
    ],
    includes: ["Three nights at the selected Dubai hotel","Daily breakfast where offered by the hotel","Dubai airport return transfers","City-tour or desert-safari components stated in the quotation","Flight and visa coordination when requested","Ferone travel support before departure"],
    excludes: ["Flights unless specifically included","UAE visa and insurance unless included","Tourism taxes payable by the guest where applicable","Optional attraction tickets and private upgrades","Meals, tips and personal purchases not listed"]
  },
  {
    slug: "naivasha-weekend-getaway",
    title: "Naivasha Weekend Getaway",
    destination: "Kenya",
    duration: "2 Days / 1 Night",
    price: "Request quote",
    image: "/images/tours/tour-naivasha.svg",
    gallery: [
      "/images/tours/tour-naivasha.svg",
      "/images/destinations/destination-kenya.svg",
      "/images/hero/hero-safari.svg"
    ],
    highlights: ["Boat ride","Resort stay","Road transfer"],
    summary: "A quick Rift Valley escape with lakeside relaxation, an optional boat ride and a choice of nature activities around Naivasha.",
    overview: "Lake Naivasha is a freshwater Rift Valley lake northwest of Nairobi and is widely visited for boat trips, birdlife and nearby attractions. A weekend can combine a lakeside resort with an optional Crescent Island walk, Hell's Gate excursion, geothermal-spa visit or relaxed resort time. Because lake and park conditions can change, activities are confirmed close to travel and with licensed local operators.",
    bestTime: "Naivasha can be visited throughout the year. January to February and June to October are often selected for drier outdoor conditions.",
    bestFor: ["Weekend travelers from Nairobi","Couples and families","Small groups","Nature and relaxation breaks"],
    itinerary: [
      { day: "Day 1", title: "Nairobi to Naivasha", description: "Morning road transfer to Naivasha, hotel check-in and an optional lake boat ride or Crescent Island experience before an evening at the resort." },
      { day: "Day 2", title: "Nature activity and return", description: "Choose Hell's Gate, a geothermal-spa visit, resort leisure or another local activity before returning to Nairobi." }
    ],
    includes: ["One night at the selected Naivasha resort","Meal plan shown in the quotation","Return road transport from Nairobi when selected","Boat ride or activity only when listed in the final package","Ferone booking coordination"],
    excludes: ["Park and activity fees not shown in the quotation","Travel insurance","Extra meals, drinks and personal expenses","Tips and optional upgrades","Items not specifically listed as included"]
  }
];

export const destinations = ["Kenya","Tanzania","Uganda","Rwanda","Zanzibar","Dubai","China","South Africa","Europe","USA"].map((name)=>({
  name,
  image: `/images/destinations/destination-${name.toLowerCase().replaceAll(" ","-")}.svg`,
  description: `Premium ${name} travel planning, packages, bookings and consultation.`
}));

export const posts = [
  { title: "How to prepare for your first Kenya safari", excerpt: "A practical guide covering timing, packing, transport and lodge expectations." },
  { title: "Visa checklist before international travel", excerpt: "Documents, timelines and common mistakes travelers should avoid." },
  { title: "Zanzibar honeymoon planning guide", excerpt: "How to combine beach luxury, culture, flights and romantic experiences." }
];

export const testimonials = [
  { name: "Amina K.", trip: "Zanzibar Holiday", quote: "The planning was smooth, premium and very clear from start to finish." },
  { name: "Brian M.", trip: "Maasai Mara Safari", quote: "Ferone handled the logistics professionally and the safari experience was excellent." },
  { name: "Grace W.", trip: "Dubai Trip", quote: "Flights, hotel and activities were arranged perfectly for our family." }
];
