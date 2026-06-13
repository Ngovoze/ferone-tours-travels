export type TravelStyle = {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  intro: string;
  idealFor: string[];
  destinations: string[];
  experiences: string[];
  planningNotes: string[];
  relatedTourSlugs: string[];
};

export const travelStyles: TravelStyle[] = [
  {
    slug: "family-holidays",
    title: "Family Holidays",
    shortDescription: "Safe, comfortable trips for parents, children and family groups.",
    heroImage: "/images/tours/tour-diani.svg",
    intro: "Family holidays need a practical pace, suitable rooms, reliable transfers and activities that work for different ages. Ferone can help combine child-friendly accommodation, manageable travel times and flexible daily plans so the trip feels enjoyable rather than exhausting.",
    idealFor: ["Parents travelling with children", "Multi-generation families", "School-holiday breaks", "Families needing connecting or family rooms"],
    destinations: ["Diani Beach", "Zanzibar", "Naivasha", "Dubai", "South Africa"],
    experiences: ["Beach resorts with family facilities", "Short wildlife drives", "Boat rides and nature walks", "Theme parks and city attractions", "Private airport transfers"],
    planningNotes: ["Confirm children's ages before requesting room arrangements.", "Choose realistic transfer times and avoid overloading each day.", "Check swimming, safari and activity restrictions for younger travelers.", "Request meals and dietary arrangements before confirmation."],
    relatedTourSlugs: ["diani-beach-family-holiday", "naivasha-weekend-getaway", "dubai-premium-city-break"]
  },
  {
    slug: "honeymoon-packages",
    title: "Honeymoon Packages",
    shortDescription: "Romantic beach, safari and luxury resort experiences.",
    heroImage: "/images/tours/tour-zanzibar.svg",
    intro: "A honeymoon package should balance privacy, memorable experiences and enough free time for the couple to relax. Ferone can combine flights, resort stays, private transfers, romantic setups and selected excursions based on the couple's budget and preferred level of luxury.",
    idealFor: ["Newly married couples", "Anniversary celebrations", "Couples combining safari and beach", "Travelers seeking private premium experiences"],
    destinations: ["Zanzibar", "Diani Beach", "Maasai Mara", "Dubai", "South Africa"],
    experiences: ["Romantic room setup", "Sunset dhow or dinner cruise", "Private game drives", "Spa and resort leisure", "Professional photo sessions on request"],
    planningNotes: ["Share the wedding date and travel dates early.", "Confirm whether the couple prefers privacy, activities or both.", "Ask for the exact romantic inclusions in writing.", "Check passport names carefully before flights are issued."],
    relatedTourSlugs: ["zanzibar-honeymoon-escape", "maasai-mara-luxury-safari", "dubai-premium-city-break"]
  },
  {
    slug: "wildlife-safaris",
    title: "Wildlife Safaris",
    shortDescription: "Game drives, conservancies and unforgettable Big Five moments.",
    heroImage: "/images/tours/tour-maasai-mara.svg",
    intro: "Wildlife safaris are built around habitat, season, park location and the quality of guiding. Ferone can help choose an itinerary that balances game-viewing time, lodge comfort, road or flight connections and realistic expectations about wildlife movement.",
    idealFor: ["First-time safari travelers", "Wildlife photographers", "Couples and families", "Travelers following seasonal migration routes"],
    destinations: ["Maasai Mara", "Serengeti", "Ngorongoro", "Amboseli", "Uganda and Rwanda"],
    experiences: ["Morning and afternoon game drives", "Big Five viewing", "Seasonal migration routes", "Balloon safaris where available", "Conservancy and cultural visits"],
    planningNotes: ["Wildlife sightings and migration locations cannot be guaranteed.", "Pack neutral clothing and suitable sun protection.", "Choose road or fly-in options based on time and budget.", "Confirm park fees and optional activities in the quotation."],
    relatedTourSlugs: ["maasai-mara-luxury-safari", "serengeti-ngorongoro-safari", "naivasha-weekend-getaway"]
  },
  {
    slug: "beach-holidays",
    title: "Beach Holidays",
    shortDescription: "Diani, Zanzibar and coastal escapes with smooth planning.",
    heroImage: "/images/tours/tour-diani.svg",
    intro: "Beach holidays can be designed for complete relaxation or mixed with marine activities, culture and short excursions. Ferone can help select the right coast, hotel category, meal plan and transfer arrangement according to the season and traveler's preferred atmosphere.",
    idealFor: ["Couples", "Families", "Groups of friends", "Travelers adding a beach stay after safari"],
    destinations: ["Diani Beach", "Zanzibar", "Watamu", "Mombasa", "South African coast"],
    experiences: ["White-sand beaches", "Snorkeling and marine excursions", "Sunset cruises", "Resort leisure and spa", "Stone Town or coastal cultural tours"],
    planningNotes: ["Confirm whether the quoted meal plan is breakfast, half board or all-inclusive.", "Marine activities depend on weather and ocean conditions.", "Check transfer time between the airport and selected resort.", "Ask whether local taxes or levies are payable separately."],
    relatedTourSlugs: ["diani-beach-family-holiday", "zanzibar-honeymoon-escape"]
  },
  {
    slug: "corporate-travel",
    title: "Corporate Travel",
    shortDescription: "Flights, hotels, transfers and group logistics for teams.",
    heroImage: "/images/tours/tour-dubai.svg",
    intro: "Corporate travel requires clear schedules, accountable costs and coordinated logistics. Ferone can support business flights, accommodation, airport transfers, meetings, conferences, retreats and group movements while keeping one contact point for the organization.",
    idealFor: ["Companies and NGOs", "Conference delegates", "Management retreats", "Project and field teams"],
    destinations: ["Nairobi", "Dubai", "South Africa", "China", "Europe and USA"],
    experiences: ["Flight and hotel coordination", "Airport and venue transfers", "Conference accommodation", "Team-building retreats", "Group travel documentation support"],
    planningNotes: ["Provide traveler names exactly as shown on passports or IDs.", "Agree on an approval and payment process before ticketing.", "Share rooming lists and transfer schedules early.", "Confirm amendment rules for every issued ticket and hotel booking."],
    relatedTourSlugs: ["dubai-premium-city-break", "naivasha-weekend-getaway"]
  },
  {
    slug: "group-travel",
    title: "Group Travel",
    shortDescription: "Church groups, friends, schools, chama trips and organizations.",
    heroImage: "/images/destinations/destination-kenya.svg",
    intro: "Group travel works best when rooming, transport, payments and communication are organized early. Ferone can coordinate itineraries for friends, churches, schools, chamas, associations and other organized groups while adapting the package to the group's purpose and budget.",
    idealFor: ["Church and fellowship groups", "Chamas and associations", "Schools and student groups", "Friends and extended families"],
    destinations: ["Naivasha", "Maasai Mara", "Diani", "Zanzibar", "Dubai"],
    experiences: ["Private group transport", "Shared accommodation planning", "Group meals and activities", "Retreat and team-building programmes", "Dedicated group quotation"],
    planningNotes: ["Appoint one group representative for approvals.", "Prepare a complete rooming and traveler list.", "Set clear deposit and balance deadlines for all members.", "Allow extra time for large-group check-in and transfers."],
    relatedTourSlugs: ["naivasha-weekend-getaway", "maasai-mara-luxury-safari", "diani-beach-family-holiday"]
  },
  {
    slug: "cultural-tours",
    title: "Cultural Tours",
    shortDescription: "Local experiences, heritage visits and community-focused travel.",
    heroImage: "/images/destinations/destination-zanzibar.svg",
    intro: "Cultural tours help travelers understand a destination beyond hotels and attractions. Ferone can combine heritage sites, local guides, food, crafts and community visits while encouraging respectful interaction and responsible photography.",
    idealFor: ["Curious first-time visitors", "Educational groups", "Travelers interested in heritage", "Safari and beach travelers adding local context"],
    destinations: ["Stone Town", "Maasai communities", "Nairobi", "Rwanda", "South Africa"],
    experiences: ["Historic walking tours", "Museums and heritage sites", "Community visits", "Local food experiences", "Markets, crafts and storytelling"],
    planningNotes: ["Use knowledgeable local guides where possible.", "Ask permission before photographing people or private spaces.", "Follow dress and behavior expectations at religious or cultural sites.", "Avoid visits that exploit communities or misrepresent local life."],
    relatedTourSlugs: ["zanzibar-honeymoon-escape", "maasai-mara-luxury-safari"]
  },
  {
    slug: "international-holidays",
    title: "International Holidays",
    shortDescription: "Dubai, Europe, USA, South Africa and global travel planning.",
    heroImage: "/images/tours/tour-dubai.svg",
    intro: "International holidays require careful coordination of flights, visas, accommodation, transfers and entry requirements. Ferone can build a complete plan around the traveler's dates and budget while clearly separating confirmed services from optional extras.",
    idealFor: ["First-time international travelers", "Couples and families", "Shopping and city-break travelers", "Business and leisure combinations"],
    destinations: ["Dubai", "China", "South Africa", "Europe", "USA"],
    experiences: ["City tours and attractions", "Shopping and entertainment", "Beach and resort combinations", "Multi-city itineraries", "Visa and documentation guidance"],
    planningNotes: ["Check passport validity before paying for flights.", "Visa approval is controlled by the relevant authorities and cannot be guaranteed.", "Review baggage allowances and transit requirements.", "Confirm tourism taxes, city fees and optional attraction tickets."],
    relatedTourSlugs: ["dubai-premium-city-break"]
  }
];
