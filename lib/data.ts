export const services = [
  'Tours & Safaris','Holiday Packages','Visa Assistance','Flight Booking','Hotel Reservations','Airport Transfers','Corporate Travel','Travel Consultation','Group Travel','Honeymoon Packages','International Travel Planning'
];

export const tours = [
  { title: 'Maasai Mara Luxury Safari', destination: 'Kenya', duration: '3 Days / 2 Nights', price: 'Request quote', image: '/images/tours/tour-maasai-mara.svg', highlights: ['Game drives','Luxury lodge','Big Five experience'] },
  { title: 'Zanzibar Honeymoon Escape', destination: 'Zanzibar', duration: '5 Days / 4 Nights', price: 'Request quote', image: '/images/tours/tour-zanzibar.svg', highlights: ['Beach resort','Romantic setup','Stone Town tour'] },
  { title: 'Diani Beach Family Holiday', destination: 'Kenya Coast', duration: '4 Days / 3 Nights', price: 'Request quote', image: '/images/tours/tour-diani.svg', highlights: ['Beach hotel','Family activities','Airport transfer'] },
  { title: 'Serengeti & Ngorongoro Safari', destination: 'Tanzania', duration: '5 Days / 4 Nights', price: 'Request quote', image: '/images/tours/tour-serengeti.svg', highlights: ['Migration route','Crater visit','Expert guide'] },
  { title: 'Dubai Premium City Break', destination: 'Dubai', duration: '4 Days / 3 Nights', price: 'Request quote', image: '/images/tours/tour-dubai.svg', highlights: ['Flights','Hotel','Desert safari'] },
  { title: 'Naivasha Weekend Gateway', destination: 'Kenya', duration: '2 Days / 1 Night', price: 'Request quote', image: '/images/tours/tour-naivasha.svg', highlights: ['Boat ride','Resort stay','Road transfer'] }
];

export const destinations = ['Kenya','Tanzania','Uganda','Rwanda','Zanzibar','Dubai','South Africa','Europe','USA'].map((name)=>({
  name,
  image: `/images/destinations/destination-${name.toLowerCase().replaceAll(' ','-')}.svg`,
  description: `Premium ${name} travel planning, packages, bookings and consultation.`
}));

export const posts = [
  { title: 'How to prepare for your first Kenya safari', excerpt: 'A practical guide covering timing, packing, transport and lodge expectations.' },
  { title: 'Visa checklist before international travel', excerpt: 'Documents, timelines and common mistakes travelers should avoid.' },
  { title: 'Zanzibar honeymoon planning guide', excerpt: 'How to combine beach luxury, culture, flights and romantic experiences.' }
];

export const testimonials = [
  { name: 'Amina K.', trip: 'Zanzibar Holiday', quote: 'The planning was smooth, premium and very clear from start to finish.' },
  { name: 'Brian M.', trip: 'Maasai Mara Safari', quote: 'Ferone handled the logistics professionally and the safari experience was excellent.' },
  { name: 'Grace W.', trip: 'Dubai Trip', quote: 'Flights, hotel and activities were arranged perfectly for our family.' }
];
