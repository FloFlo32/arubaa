/**
 * Real Aruba.com menu structure (mirrors the source site's nav + footer exactly).
 * Sub-items point to the anchor section on their hub page.
 */
export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children: NavChild[] };

export const primaryNav: NavItem[] = [
  {
    label: "Why Aruba",
    href: "/why-aruba",
    children: [
      { label: "Adventure", href: "/why-aruba/adventure" },
      { label: "Romance", href: "/why-aruba/romance" },
      { label: "Culture", href: "/why-aruba/culture" },
      { label: "Wellness", href: "/why-aruba/wellness" },
      { label: "Eat & Drink", href: "/why-aruba/eat-and-drink" },
      { label: "Families", href: "/why-aruba/families" },
      { label: "Weddings", href: "/why-aruba/weddings" },
    ],
  },
  {
    label: "Things To Do",
    href: "/things-to-do",
    children: [
      { label: "Beaches & coves", href: "/things-to-do#beaches-coves" },
      { label: "On the water", href: "/things-to-do#on-the-water" },
      { label: "Natural Wonders", href: "/things-to-do#natural-wonders" },
      { label: "Dining", href: "/things-to-do#dining" },
      { label: "Nightlife", href: "/things-to-do#nightlife" },
      { label: "Arts & Culture", href: "/things-to-do#arts-culture" },
      { label: "Sightseeing & Tours", href: "/things-to-do#sightseeing-tours" },
      { label: "Shopping", href: "/things-to-do#shopping" },
      { label: "Wellbeing", href: "/things-to-do#wellbeing" },
      { label: "Sports & Golf", href: "/things-to-do#sports-golf" },
      { label: "Calendar of events", href: "/things-to-do#calendar" },
      { label: "Itineraries", href: "/things-to-do#itineraries" },
    ],
  },
  {
    label: "Plan Your Visit",
    href: "/plan-your-visit",
    children: [
      { label: "Hotels & Resorts", href: "/plan-your-visit#hotels-resorts" },
      { label: "Vacation Rentals", href: "/plan-your-visit#vacation-rentals" },
      { label: "Timeshares", href: "/plan-your-visit#timeshares" },
      { label: "All-inclusive", href: "/plan-your-visit#all-inclusive" },
      { label: "Getting to Aruba", href: "/plan-your-visit#getting-to-aruba" },
      { label: "Getting around Aruba", href: "/plan-your-visit#getting-around" },
      { label: "Aruba by cruise", href: "/plan-your-visit#by-cruise" },
      { label: "Aruba vacations", href: "/plan-your-visit#vacations" },
      { label: "Tips for visitors", href: "/plan-your-visit#tips" },
      { label: "Guest Services", href: "/plan-your-visit#guest-services" },
    ],
  },
  {
    label: "Our Island",
    href: "/our-island",
    children: [
      { label: "History & culture", href: "/our-island#history-culture" },
      { label: "Island facts", href: "/our-island#island-facts" },
      { label: "Regions", href: "/our-island#regions" },
      { label: "360 map", href: "/our-island#map" },
    ],
  },
];

export const secondaryNav: NavChild[] = [
  { label: "Live", href: "/live-webcams" },
  { label: "Deals & Offers", href: "/deals" },
  { label: "Blog", href: "/blog" },
  { label: "News", href: "/news" },
];

export const bookNow: NavChild = { label: "Book Now", href: "/book-now" };

export const legalNav: NavChild[] = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];
