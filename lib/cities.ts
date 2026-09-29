export const CITY_EMAIL = "info@crescenttrack.com";
export const CITY_PHONE_DISPLAY = "0309-6964141";
export const CITY_PHONE_TEL = "+923096964141";
export const CITY_WHATSAPP_URL = "https://wa.me/923096964141";

export type City = {
  slug: string;
  name: string;
  /** Short name used in headings where the full name is too long */
  shortName: string;
  region: string;
  address?: string;
  mapUrl?: string;
  /** Exact office pin taken from the Google Maps link */
  geo?: { lat: number; lng: number };
  /** City-specific paragraphs so each page has unique content */
  intro: string;
  localNeed: string;
  areas: string[];
  routes: string[];
  industries: string[];
};

export const cities: City[] = [
  {
    slug: "islamabad-rawalpindi",
    name: "Islamabad - Rawalpindi",
    shortName: "Islamabad & Rawalpindi",
    region: "Islamabad Capital Territory / Punjab",
    address: "E2, 5th Floor, Land Square, Top City-1, Islamabad",
    mapUrl: "https://maps.app.goo.gl/Szzkmmakie6JSx6u5",
    geo: { lat: 33.5833926, lng: 72.8726605 },
    intro:
      "Looking for a reliable car tracker in Islamabad or Rawalpindi? Crescent Tracking is the vehicle tracking company that families, corporate offices, rent-a-car operators and logistics fleets across the twin cities trust for real-time GPS tracking, remote engine immobilization and 24/7 control room support.",
    localNeed:
      "The twin cities are growing fast, with thousands of vehicles moving daily between the sectors of Islamabad, the housing societies along the Islamabad Expressway and the busy markets of Rawalpindi. Heavy traffic, parking in crowded commercial areas and frequent intercity travel on the motorway make a live GPS tracker essential for both personal cars and company fleets.",
    areas: ["F, G, E & I Sectors", "DHA & Bahria Town", "Top City-1 & B-17", "Saddar & Raja Bazaar", "Gulberg Greens", "PWD & Soan Garden"],
    routes: ["Islamabad Expressway", "Srinagar Highway", "Murree Road", "GT Road", "M-2 Motorway"],
    industries: ["Corporate & government fleets", "Rent-a-car services", "Ride-hailing drivers", "Courier & delivery", "Schools & staff transport"],
  },
  {
    slug: "lahore",
    name: "Lahore",
    shortName: "Lahore",
    region: "Punjab",
    address: "1st Floor, 273 Y Block Commercial Area, DHA Phase 3, Lahore",
    mapUrl: "https://maps.app.goo.gl/R3eXGMdtURXmd6XSA",
    geo: { lat: 31.4711544, lng: 74.3734831 },
    intro:
      "Crescent Tracking is one of the best vehicle tracking companies in Lahore, offering an advanced car tracker with live location, geo-fencing, engine kill and instant theft alerts. From DHA to Johar Town, our Lahore office supports individual car owners and large fleets alike.",
    localNeed:
      "As Pakistan's second-largest city, Lahore has some of the heaviest traffic in the country and a constant risk of car and bike theft. Businesses running delivery vans, trucks and staff cars across the Ring Road and Canal Road need live visibility to cut fuel waste and respond quickly to any incident.",
    areas: ["DHA (all phases)", "Gulberg & Model Town", "Johar Town & Wapda Town", "Bahria Town Lahore", "Cantt & Walton", "Iqbal Town & Township"],
    routes: ["Lahore Ring Road", "Canal Road", "Ferozepur Road", "GT Road", "M-2 & M-3 Motorways"],
    industries: ["Logistics & distribution", "FMCG & pharma delivery", "Rent-a-car services", "Corporate fleets", "Personal cars & bikes"],
  },
  {
    slug: "faisalabad",
    name: "Faisalabad",
    shortName: "Faisalabad",
    region: "Punjab",
    address: "Office No. 1, Madina Mobile, Block Z Madina Town, Faisalabad",
    mapUrl: "https://maps.app.goo.gl/niW5eY8G6xuJizALA",
    geo: { lat: 31.4218883, lng: 73.1262818 },
    intro:
      "Need a trusted car tracker in Faisalabad? Crescent Tracking provides GPS vehicle tracking, fuel monitoring and fleet management services from our office in Madina Town, helping car owners and industrial fleets across the city stay in control.",
    localNeed:
      "Faisalabad is the textile capital of Pakistan, and its mills, warehouses and exporters depend on trucks and loaders moving goods around the clock. GPS tracking with fuel sensors helps transporters stop fuel theft, prove delivery times and keep valuable consignments safe on the roads to Lahore, Karachi and the dry ports.",
    areas: ["Madina Town", "Susan Road & Peoples Colony", "D Ground & Kohinoor", "Canal Road", "Samanabad & Jinnah Colony", "Satiana Road"],
    routes: ["M-4 Motorway", "Sargodha Road", "Jhang Road", "Sheikhupura Road", "Canal Road"],
    industries: ["Textile & garment mills", "Goods transporters", "Industrial loaders", "Personal cars", "Distribution companies"],
  },
  {
    slug: "sialkot",
    name: "Sialkot",
    shortName: "Sialkot",
    region: "Punjab",
    address: "Office No. 306, Al Khalil Center, Kashmir Road, Sialkot",
    mapUrl: "https://maps.app.goo.gl/Dfp7PSyFysQ9mvvX6",
    geo: { lat: 32.5011741, lng: 74.4983833 },
    intro:
      "Crescent Tracking is a leading vehicle tracking company in Sialkot, offering a smart car tracker with real-time location, engine immobilizer and mobile app access. Visit our office on Kashmir Road or call us for installation anywhere in Sialkot.",
    localNeed:
      "Sialkot's export industry for sports goods, surgical instruments and leather products relies on timely shipments to the dry port and airport. Exporters and transporters use GPS tracking to monitor consignments, while families use it to protect their cars and keep an eye on loved ones travelling on the Sialkot–Lahore Motorway.",
    areas: ["Cantt", "Kashmir Road", "Paris Road", "Defence Road", "Model Town", "Sambrial & Daska"],
    routes: ["Sialkot–Lahore Motorway", "Wazirabad Road", "Daska Road", "Airport Road", "Pasrur Road"],
    industries: ["Sports goods exporters", "Surgical instrument makers", "Leather & garments", "Cargo transporters", "Personal cars"],
  },
  {
    slug: "multan",
    name: "Multan",
    shortName: "Multan",
    region: "Punjab",
    address: "Office No. 18, 1st Floor, Khilji Arcade, Near Cantt Railway Station, Akbar Road, Multan",
    mapUrl: "https://maps.app.goo.gl/e5mDnSYMnQ49c5TdA",
    geo: { lat: 30.1824443, lng: 71.4463262 },
    intro:
      "Searching for the best car tracker in Multan? Crescent Tracking offers dependable GPS vehicle tracking, anti-theft immobilizers and fleet management for South Punjab from our office near Cantt Railway Station, Akbar Road.",
    localNeed:
      "Multan is the commercial hub of South Punjab and a key junction on the M-4 and M-5 motorways. Transporters moving cotton, mangoes and agricultural goods, as well as families travelling between cities, rely on GPS tracking to keep vehicles safe and monitor long highway trips.",
    areas: ["Cantt & Gulgasht", "Bosan Road", "Shah Rukn-e-Alam Colony", "DHA Multan", "New Multan", "Mumtazabad"],
    routes: ["M-4 & M-5 Motorways", "Bosan Road", "Northern Bypass", "Vehari Road", "Khanewal Road"],
    industries: ["Agricultural transport", "Cotton & ginning", "Goods carriers", "Corporate fleets", "Personal cars & bikes"],
  },
  {
    slug: "sahiwal",
    name: "Sahiwal",
    shortName: "Sahiwal",
    region: "Punjab",
    address: "Office No. 1, 2, 3, Hassan Market, Karbala Road, Sahiwal",
    mapUrl: "https://maps.app.goo.gl/NiXGPfAX8dHr325D8",
    geo: { lat: 30.6668545, lng: 73.1112407 },
    intro:
      "Crescent Tracking brings professional vehicle tracking to Sahiwal with a local office at Hassan Market, Karbala Road. Get a GPS car tracker with live location, theft alerts and remote engine lock, backed by our 24/7 monitoring team.",
    localNeed:
      "Sahiwal sits on the busy N-5 corridor between Lahore and Multan and is surrounded by farms, dairy businesses and industry. Tractors, pickups and trucks travel long distances every day, and GPS tracking helps owners monitor routes, fuel usage and vehicle safety from their phone.",
    areas: ["Karbala Road", "Farid Town", "Jahaz Ground", "Civil Lines", "High Street", "Chichawatni & Harappa"],
    routes: ["N-5 National Highway", "Arifwala Road", "Pakpattan Road", "Okara Road", "Faisalabad Road"],
    industries: ["Dairy & agriculture", "Tractors & pickups", "Goods transporters", "Personal cars", "Local businesses"],
  },
  {
    slug: "gujranwala",
    name: "Gujranwala",
    shortName: "Gujranwala",
    region: "Punjab",
    address: "Office No. 7, 8, Fazal Town, Kacha Fatomand Road, Near Muafi Wala Chowk, Gujranwala",
    mapUrl: "https://maps.app.goo.gl/LmAT7qyzMRcKQ2CT6",
    geo: { lat: 32.194309, lng: 74.201876 },
    intro:
      "Crescent Tracking is a trusted vehicle tracking company in Gujranwala, providing car trackers, bike trackers and fleet management with real-time GPS, geo-fencing and remote immobilization. Visit our Fazal Town office near Muafi Wala Chowk.",
    localNeed:
      "Gujranwala is one of Punjab's biggest industrial cities, known for fans, ceramics, steel and electrical goods. Manufacturers and transporters use GPS tracking to monitor delivery vehicles on the GT Road, while car owners rely on it for theft protection in busy markets and residential areas.",
    areas: ["Fazal Town", "Satellite Town", "Model Town", "DC Road", "Citi Housing", "Wapda Town"],
    routes: ["GT Road (N-5)", "Sialkot Bypass", "Hafizabad Road", "Pasrur Road", "Lahore–Sialkot Motorway"],
    industries: ["Fan & electrical manufacturers", "Steel & ceramics", "Goods transporters", "Personal cars & bikes", "Distribution"],
  },
  {
    slug: "bahawalpur",
    name: "Bahawalpur",
    shortName: "Bahawalpur",
    region: "Punjab",
    intro:
      "Crescent Tracking provides reliable car tracker and vehicle tracking services in Bahawalpur. Protect your car, bike or commercial fleet with real-time GPS location, remote engine lock and 24/7 monitoring.",
    localNeed:
      "Bahawalpur connects South Punjab to Cholistan and the N-5 highway. Long distances, open desert roads and agricultural transport make GPS tracking valuable for knowing exactly where your vehicle is and getting help quickly in an emergency.",
    areas: ["Model Town A, B & C", "Satellite Town", "Cantt", "Shahdrah", "Baghdad-ul-Jadeed", "Ahmadpur East"],
    routes: ["N-5 National Highway", "Hasilpur Road", "Yazman Road", "Ahmadpur Road", "M-5 Motorway"],
    industries: ["Agriculture & cotton", "Goods transporters", "Government & corporate fleets", "Personal cars", "Rent-a-car"],
  },
  {
    slug: "rahim-yar-khan",
    name: "Rahim Yar Khan",
    shortName: "Rahim Yar Khan",
    region: "Punjab",
    intro:
      "Crescent Tracking offers a professional car tracker service in Rahim Yar Khan with live GPS tracking, theft alerts, geo-fencing and remote immobilization for personal and commercial vehicles.",
    localNeed:
      "Rahim Yar Khan is a major centre for sugar, cotton and agriculture near the Punjab–Sindh border. Trucks and tractors carrying sugarcane and cotton cover long routes, and GPS tracking helps owners monitor trips, fuel and driver behaviour while protecting vehicles from theft.",
    areas: ["Model Town", "Satellite Town", "Abu Dhabi Road", "City Park area", "Khanpur", "Liaquatpur"],
    routes: ["N-5 National Highway", "M-5 Motorway", "Abu Dhabi Road", "Khanpur Road", "Sadiqabad Road"],
    industries: ["Sugar mills", "Cotton & agriculture", "Goods transporters", "Tractors & trolleys", "Personal cars"],
  },
  {
    slug: "dera-ghazi-khan",
    name: "Dera Ghazi Khan",
    shortName: "Dera Ghazi Khan",
    region: "Punjab",
    intro:
      "Get a reliable car tracker in Dera Ghazi Khan from Crescent Tracking. Our GPS vehicle tracking system gives you live location, route history, theft alerts and remote engine lock for cars, bikes and commercial vehicles.",
    localNeed:
      "Dera Ghazi Khan links Punjab with Balochistan and Khyber Pakhtunkhwa through the Indus Highway and the Fort Munro road. Vehicles travelling these long and hilly routes benefit from GPS tracking for safety, emergency response and fleet visibility.",
    areas: ["Model Town", "Block areas", "Gadai", "Jampur Road", "Taunsa", "Kot Chutta"],
    routes: ["Indus Highway (N-55)", "Fort Munro Road (N-70)", "Multan Road", "Jampur Road", "Taunsa Road"],
    industries: ["Intercity transporters", "Agriculture", "Government fleets", "Personal cars & bikes", "Goods carriers"],
  },
  {
    slug: "jhelum",
    name: "Jhelum",
    shortName: "Jhelum",
    region: "Punjab",
    intro:
      "Crescent Tracking provides trusted car tracker and GPS vehicle tracking services in Jhelum, with live location, geo-fencing, engine immobilizer and a 24/7 control room to keep your vehicle safe.",
    localNeed:
      "Jhelum sits on the GT Road between Lahore and Islamabad, and many residents travel regularly to the twin cities and abroad. GPS tracking lets families keep watch over their cars while away and helps transporters monitor vehicles on this busy national route.",
    areas: ["Cantt", "Civil Lines", "Machine Mohallah", "Kala Gujran", "Dina", "Sohawa"],
    routes: ["GT Road (N-5)", "Jhelum–Pind Dadan Khan Road", "Mangla Road", "Dina–Mangla Road", "Jhelum Bridge"],
    industries: ["Overseas families", "Personal cars", "Goods transporters", "Rent-a-car", "Local businesses"],
  },
  {
    slug: "gujrat",
    name: "Gujrat",
    shortName: "Gujrat",
    region: "Punjab",
    intro:
      "Looking for a car tracker in Gujrat? Crescent Tracking offers GPS vehicle tracking with real-time location, theft alerts, remote engine lock and mobile app access for cars, bikes and fleets across Gujrat.",
    localNeed:
      "Gujrat is known for its fan, furniture and pottery industries and has a large overseas community. Business owners use GPS tracking to manage delivery vehicles, and families abroad use it to keep their cars at home safe and accounted for.",
    areas: ["Civil Lines", "Rehman Shaheed Road", "Jalalpur Jattan", "Kharian", "Lalamusa", "Sara-e-Alamgir"],
    routes: ["GT Road (N-5)", "Jalalpur Jattan Road", "Bhimber Road", "Sargodha Road", "Kharian Cantt"],
    industries: ["Fan manufacturers", "Furniture makers", "Overseas families", "Goods transporters", "Personal cars"],
  },
  {
    slug: "muzaffargarh",
    name: "Muzaffargarh",
    shortName: "Muzaffargarh",
    region: "Punjab",
    intro:
      "Crescent Tracking brings dependable GPS car tracker services to Muzaffargarh, giving you live vehicle location, route history, theft alerts and remote immobilization with 24/7 monitoring support.",
    localNeed:
      "Muzaffargarh lies near Multan on major routes to Dera Ghazi Khan and the Indus Highway. Oil tankers, goods trucks and agricultural vehicles pass through daily, and GPS tracking helps owners monitor long-distance trips and protect their vehicles.",
    areas: ["City Centre", "Kot Addu", "Alipur", "Jatoi", "Khangarh", "Chowk Sarwar Shaheed"],
    routes: ["Multan–Muzaffargarh Road", "Indus Highway", "N-70", "Kot Addu Road", "Alipur Road"],
    industries: ["Oil tankers", "Agriculture", "Goods transporters", "Personal cars & bikes", "Power sector fleets"],
  },
  {
    slug: "sargodha",
    name: "Sargodha",
    shortName: "Sargodha",
    region: "Punjab",
    intro:
      "Crescent Tracking offers a professional car tracker service in Sargodha with real-time GPS tracking, geo-fencing, engine kill and instant alerts for personal cars, bikes and commercial fleets.",
    localNeed:
      "Sargodha is famous for its kinnow and citrus orchards, and fruit transporters move large volumes to markets across Pakistan every season. GPS tracking helps them monitor trucks on the motorway, reduce fuel theft and ensure timely delivery.",
    areas: ["Satellite Town", "University Road", "Civil Lines", "Farooq Colony", "Bhalwal", "Kot Momin"],
    routes: ["M-2 Motorway", "Faisalabad Road", "Lahore Road", "Khushab Road", "Jhang Road"],
    industries: ["Citrus & fruit transport", "Agriculture", "Goods transporters", "Personal cars", "Government fleets"],
  },
  {
    slug: "peshawar",
    name: "Peshawar",
    shortName: "Peshawar",
    region: "Khyber Pakhtunkhwa",
    intro:
      "Crescent Tracking provides a reliable car tracker and vehicle tracking service in Peshawar, with live GPS location, remote engine immobilizer, geo-fencing and 24/7 control room support across Khyber Pakhtunkhwa.",
    localNeed:
      "Peshawar is the gateway to Afghanistan and Central Asia, with heavy commercial traffic on the GT Road, Ring Road and the route to Torkham. Transporters and businesses use GPS tracking to monitor cargo and drivers, while car owners use it to protect against theft.",
    areas: ["Hayatabad", "University Town", "Saddar & Cantt", "Gulbahar", "Warsak Road", "Ring Road"],
    routes: ["M-1 Motorway", "GT Road (N-5)", "Peshawar Ring Road", "Jamrud Road / Torkham", "Charsadda Road"],
    industries: ["Cross-border transporters", "Goods carriers", "Corporate & NGO fleets", "Personal cars", "Rent-a-car"],
  },
  {
    slug: "sadiqabad",
    name: "Sadiqabad",
    shortName: "Sadiqabad",
    region: "Punjab",
    intro:
      "Crescent Tracking offers dependable car tracker services in Sadiqabad, with real-time GPS tracking, theft alerts, remote engine lock and a mobile app to monitor your vehicle anytime.",
    localNeed:
      "Sadiqabad sits on the N-5 near the Punjab–Sindh border, with a strong base in fertilizer, cotton and agriculture. Trucks and tankers travelling between Punjab and Sindh benefit from GPS tracking for route monitoring, fuel control and theft protection.",
    areas: ["City Centre", "Model Town", "Machi Goth", "Kot Sabzal", "Ahmedpur Lamma", "Walhar"],
    routes: ["N-5 National Highway", "M-5 Motorway", "Rahim Yar Khan Road", "Kot Sabzal Road", "Jamal Din Wali Road"],
    industries: ["Fertilizer & industry", "Cotton & agriculture", "Tankers & trucks", "Personal cars", "Goods transporters"],
  },
  {
    slug: "vehari",
    name: "Vehari",
    shortName: "Vehari",
    region: "Punjab",
    intro:
      "Get a trusted car tracker in Vehari from Crescent Tracking. Our GPS vehicle tracking system offers live location, history playback, theft alerts and remote engine immobilization for cars, bikes and fleets.",
    localNeed:
      "Vehari is a major cotton and agricultural district of South Punjab, with Burewala and Mailsi as busy trading towns. Farmers, transporters and businesses use GPS tracking to monitor tractors, pickups and trucks and keep their vehicles safe.",
    areas: ["City Centre", "Burewala", "Mailsi", "Model Town", "Gaggo Mandi", "Luddan"],
    routes: ["Multan–Vehari Road", "Vehari–Burewala Road", "Mailsi Road", "Arifwala Road", "Hasilpur Road"],
    industries: ["Cotton & ginning", "Agriculture", "Tractors & pickups", "Goods transporters", "Personal cars"],
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}
