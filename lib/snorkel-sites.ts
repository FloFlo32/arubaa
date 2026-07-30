export const snorkelSites = [
  {
    slug: "antilla-wreck",
    title: "SS Antilla Shipwreck",
    tagline:
      "Explore the famous WWII German freighter, one of the Caribbean's most iconic wreck dives, home to colorful coral and tropical fish.",
  },
  {
    slug: "boca-catalina",
    title: "Boca Catalina",
    tagline:
      "A calm, shallow bay with crystal-clear water perfect for beginners and experienced snorkelers alike, teeming with sea life.",
  },
  {
    slug: "malmok-reef",
    title: "Malmok Reef",
    tagline:
      "Vibrant coral formations and abundant marine life make this one of Aruba's premier snorkeling destinations along the northwest coast.",
  },
] as const;

export type SnorkelSite = (typeof snorkelSites)[number];
