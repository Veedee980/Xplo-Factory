const FR = "https://framerusercontent.com/images/";

export const siteConfig = {
  name: "Xplo Factory",
  description:
    "Xplo Factory provides professional printing, graphic design, corporate branding, custom apparel, promotional products and signage in Harare, Zimbabwe.",
  url: "https://xplofactory.framer.website",
  phone: "+263 78 990 5595",
  phoneRaw: "+263789905595",
  phoneSecondary: "+263 71 487 7015",
  phoneLocal: "0789905595",
  whatsapp: "https://wa.me/263789905595",
  email: "ldumbatsuro6@gmail.com",
  address:
    "43 Robson Manyika Way, Corner Second Street & Robson Manyika, Harare, Zimbabwe",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Merchant+House%2C+43+Robson+Manyika%2C+Harare",
  mapsEmbed:
    "https://maps.google.com/maps?q=Merchant%20House%2C%2043%20Robson%20Manyika%2C%20Harare&z=15&output=embed",
  hours: [
    { label: "Monday–Friday", value: "8:00 AM – 5:00 PM" },
    { label: "Saturday", value: "8:00 AM – 4:00 PM" },
    { label: "Sunday", value: "Closed" },
  ],
  socials: [
    { label: "X", href: "https://www.x.com" },
    { label: "Instagram", href: "https://www.instagram.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Threads", href: "https://www.threads.com" },
  ],
};

export function waLink(text: string) {
  return `${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const footerLinks = {
  quick: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  explore: [{ label: "Blog", href: "/blog" }],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "Team", href: "/about#team" },
    { label: "Reviews", href: "/reviews" },
  ],
};

/** All gallery photos found on the live home page, in order. */
export const gallery: string[] = [
  `${FR}y8XIoZmcAr2EKpiIjGxubN4zY0c.webp`,
  `${FR}k1JwF41grdXJCqETElTuA02FfNA.jpg`,
  `${FR}1OlEs4J2jpntmfrV6IBpEzyav6Q.jpeg`,
  `${FR}TLgPWk5AFn5vLm1YrArXBd3L7U.jpg`,
  `${FR}osmqBPkHJchvmN265U30Z8vFK9c.jpeg`,
  `${FR}SAUUMLlcb9iBL284U9RKooLeUFk.jpg`,
  `${FR}o7K16F8t8QnEbYaq1GoptvAjivk.jpeg`,
  `${FR}A1X8Jh8FzmsnLfYh58gzcdOE.jpeg`,
  `${FR}rIWRBtDhPjlxsBU4kdK2GVXtBSc.jpg`,
  `${FR}AFZF31IYqblKEbGlpmeugIKZ0jo.jpeg`,
  `${FR}0pIh2h3RY2U8UAPmFkJOZ3nbZ4I.png`,
  `${FR}pgwsbC7xQlF2WPIYOK9D1TWdwbQ.png`,
  `${FR}5XQsY7aX56f6V0xHqelxKXMdinc.jpeg`,
  `${FR}d5gxpwWPPAcnaIZfYcDHukzcLmY.jpg`,
];
export const heroGallery = gallery;

export const bookImages: string[] = [
  `${FR}zg8JYDmbUFwvjjLEFKji5Ndc.png`,
  `${FR}kRqyibizNmiX3Z2bTAaxk2lJQs.png`,
  `${FR}eopOHQkYGRt90oMjaiAnpFu0gE.png`,
  `${FR}LmNWicInVe4MVLQ2UHWJZNUYLrY.png`,
  `${FR}tI6nvpnfrdGG2X3sqf4kKtMv8.png`,
];

export const images = {
  designLogo: `${FR}6lZRxnAsJjIuRoEK5qaJnhNS3U.jpg`,
  avatar: `${FR}HWkoEPUdOewEhYl4HH0ZrEUzQ.png`,
  quote: `${FR}RUVxMBraOjAkiEFIMOJr9wBdPO0.jpeg`,
  cta: `${FR}SQ6axPEY4arHDtOLUt29El3zQ.png`,
  aboutA: `${FR}FVoMUpadMBUIeUtNR2RsqZCLY8.png`,
  aboutB: `${FR}7nL3jJ9OBUwwaptzNvx2IljOokc.png`,
  mission: `${FR}aWF33mIWxb6N4UkcPfFvGW9t68A.png`,
  founder: `${FR}oIW1xHIp6rN2pRt4BwWsTrlW74.jpeg`,
};

export const videos = {
  home: "https://framerusercontent.com/assets/5yOiReohIv4hgbms7gaqZWkkw.mp4",
  aboutHero:
    "https://framerusercontent.com/assets/6MfZzqke0KkP7chwaYHQwSrN2mw.mp4",
  aboutTeam:
    "https://framerusercontent.com/assets/SU31rkwh0RQ2DORQZEooV7AjbHA.mp4",
};

export type Service = {
  slug: string;
  title: string;
  status: string;
  image: string;
};

/** Slugs/titles/statuses exactly as on the live /services page. */
export const services: Service[] = [
  { slug: "professional-business-card-printing", title: "Professional Business Cards", status: "On View" },
  { slug: "personalized-lunchbox-sets", title: "Personalized Lunchbox Sets", status: "Opens Jan 1" },
  { slug: "fine-motor-skills-book", title: "Fine Motor Skills Book", status: "On View · Jan 5" },
  { slug: "custom-t-shirt-printing", title: "Custom-T Shirts Printing", status: "Preview · Mar 10" },
  { slug: "x-frame-banner-printing", title: "X-Frame Banner", status: "On View · Apr 1" },
  { slug: "personalized-pouches", title: "Personalized Pouch", status: "Opening Reception · Jan 1" },
  { slug: "personalized-diaries", title: "Personalized Diaries", status: "Exhibition End · Sep 30" },
  { slug: "a4-photo-frame-printing", title: "A4 Photo Frame", status: "Special Event · Oct 15" },
  { slug: "personalized-metal-juice-bottles", title: "Metal Juice Bottles", status: "Closing · Jul 10" },
  { slug: "custom-kids-t-shirts", title: "Custom Kids T- Shirt", status: "Opens Aug 5" },
  { slug: "custom-cap-printing-embroidery", title: "Caps (DTF)", status: "On View · Nov 1" },
].map((s, i) => ({ ...s, image: gallery[i % gallery.length] }));

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** The four cards under "What We Do!" */
export const featuredWork = services.slice(0, 4).map((s) => ({
  ...s,
  tags: ["Custom Made", "Order Today", "Built for You"],
}));

export const designServices = [
  { title: "Logo Design", category: "Graphic Design", image: images.designLogo },
  { title: "Invoice Design", category: "Printing Services", image: gallery[4] },
  { title: "Corporate Branding", category: "Corporate Branding", image: gallery[5] },
  { title: "Custom Flier Design", category: "Custom Apparel", image: gallery[6] },
  { title: "Social Media Design", category: "Promotional Products", image: gallery[7] },
];

export type NewProduct = {
  slug: string;
  title: string;
  tag: string;
  image: string;
};

export const newProducts: NewProduct[] = [
  {
    slug: "abc-words-and-sentences",
    title: "ABC Words & Sentences",
    tag: "Events - family art adventures",
    image: bookImages[3],
  },
  {
    slug: "walking-backpack-billboards",
    title: "Walking Backpack Bilboards",
    tag: "Events - digital meets canvas",
    image: gallery[9],
  },
];

export function getNewProduct(slug: string) {
  return newProducts.find((p) => p.slug === slug);
}

export const testimonials = [
  {
    quote:
      "The books are well designed, engaging and perfect for our learners. We appreciate the quality, clear content and excellent service from Xplo Factory. We highly recommend them.",
    name: "Helping Hands School",
  },
  {
    quote:
      "The embroidery on our jackets came out beautifully. The quality and attention to detail exceeded our expectations. Thank you Xplo Factory for bringing our design to life — we are very happy with the final result.",
    name: "Mai Muchedzi",
  },
  {
    quote:
      "Wow, the lunch set is perfect! I really love it. The quality and design are amazing. Thank you Xplo Factory for creating something so beautiful and personalized.",
    name: "Mai Eliana",
  },
  {
    quote:
      "Ahhhh, I love it! The character cutouts are amazing. The quality and creativity are impressive. Thank you Xplo Factory for bringing our ideas to life.",
    name: "Kirti Ranchod",
  },
  {
    quote:
      "This is beautiful, I love it! The lunch set looks amazing. Thank you Xplo Factory for the great work.",
    name: "Mrs Panganayi",
  },
  {
    quote:
      "The travelling mug is lovely! I absolutely love the quality and design. Thank you Xplo Factory for creating such a beautiful and practical product.",
    name: "Fadzi",
  },
  {
    quote:
      "Wow, these books are amazing! I’m really impressed with the quality. Thank you Xplo Factory for the excellent work.",
    name: "Jax Mpofu",
  },
].map((t) => ({ ...t, rating: "5.0", avatar: images.avatar }));

export const creativeWorlds = [
  {
    name: "Xplo Designs & Print",
    description: "Creative design, printing and branded materials.",
  },
  {
    name: "Xplo Gear",
    description: "Custom apparel, branded T-shirts, hoodies, caps and more.",
  },
  {
    name: "Xplo Pictures",
    description:
      "Photography, photoshoots and visual content that captures the moment.",
  },
];

export const team = [
  { name: "Dominic N", role: "Founder", image: images.founder },
];

/** Placeholder targets — the live values are animated by Framer. */
export const stats = [
  { target: 5, decimals: 0, suffix: "k+", label: "Projects Worked On" },
  { target: 2.4, decimals: 1, suffix: "m", label: "Reach" },
];
