import { heroGallery } from "@/lib/data";

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  sections: BlogSection[];
};

/**
 * The four slugs/titles below match the live Xplo Factory blog URLs
 * (/blog/from-concept-to-creation, etc.).
 *
 * IMPORTANT: the live post bodies are rendered client-side by Framer and could
 * not be read, so the excerpts and `sections` below are PLACEHOLDER DRAFT COPY,
 * not the original articles. Replace them with the real text — this file is the
 * only place you need to edit. Add a post by adding another object to the array.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "from-concept-to-creation",
    title: "From Concept to Creation",
    excerpt:
      "How an idea on paper becomes a finished, professional product — and what to prepare before you reach out to a printer.",
    cover: heroGallery[0],
    sections: [
      {
        paragraphs: [
          "Every printed product starts as an idea: a logo sketch, a slogan, a gift you want to make personal. The journey from that first idea to something you can hold in your hands is shorter than most people expect — as long as the right details are settled early.",
        ],
      },
      {
        heading: "Start with the purpose",
        paragraphs: [
          "Before choosing sizes or materials, decide what the product needs to do. A business card should be easy to keep and read. A banner needs to be seen from a distance. A personalised gift should feel special to the person receiving it.",
        ],
      },
      {
        heading: "Bring the details that matter",
        paragraphs: [
          "Quantity, size, colours, and any logo files or artwork help us prepare an accurate quote quickly. If you don't have artwork yet, our design team can create it with you.",
        ],
      },
      {
        heading: "Review, approve, produce",
        paragraphs: [
          "Once the design is agreed, production begins. Checking proofs carefully at this stage is the simplest way to make sure the finished product matches what you imagined.",
        ],
      },
    ],
  },
  {
    slug: "the-power-of-a-strong-brand",
    title: "The Power of a Strong Brand",
    excerpt:
      "Why consistent branding builds trust, makes your business memorable, and helps customers choose you.",
    cover: heroGallery[1],
    sections: [
      {
        paragraphs: [
          "A brand is more than a logo. It is the overall impression people get every time they see your name, your colours, your packaging, and your printed materials.",
        ],
      },
      {
        heading: "Consistency builds trust",
        paragraphs: [
          "When your business cards, invoices, signage, and social media all look like they belong together, customers read that as professionalism. Small inconsistencies, on the other hand, can make a business feel less established than it really is.",
        ],
      },
      {
        heading: "Be memorable",
        paragraphs: [
          "A clear logo, a consistent colour palette, and quality printed pieces give people something to remember — and something to pass on to others.",
        ],
      },
      {
        heading: "Invest in the touchpoints",
        paragraphs: [
          "Start with the items customers see most often, and build outward from there: stationery, apparel, signage, and promotional products that all carry the same identity.",
        ],
      },
    ],
  },
  {
    slug: "why-branded-apparel-works",
    title: "Why Branded Apparel Works",
    excerpt:
      "T-shirts, caps and jackets turn your team and your customers into walking advertisements.",
    cover: heroGallery[2],
    sections: [
      {
        paragraphs: [
          "Branded apparel is one of the most practical ways to promote a business. Unlike a flyer that gets thrown away, a good shirt or cap gets worn again and again.",
        ],
      },
      {
        heading: "Visible, everyday marketing",
        paragraphs: [
          "Every time someone wears your branded item, your name is seen by people you may never have reached otherwise.",
        ],
      },
      {
        heading: "Unity for teams and events",
        paragraphs: [
          "Matching uniforms and event shirts help a group look organised and feel connected, whether it is a school, a company, or a community project.",
        ],
      },
      {
        heading: "Choose the right method",
        paragraphs: [
          "Printing and embroidery each suit different garments and designs. We can advise on which will look best and last longest for your order.",
        ],
      },
    ],
  },
  {
    slug: "the-story-behind-the-picture",
    title: "The Story Behind the Picture",
    excerpt:
      "Great photography does more than record a moment — it tells the story people want to remember.",
    cover: heroGallery[3],
    sections: [
      {
        paragraphs: [
          "A good photograph captures more than faces and places. It holds the feeling of the day, which is why people return to their favourite pictures years later.",
        ],
      },
      {
        heading: "Preparing for a shoot",
        paragraphs: [
          "Knowing what you want the images to say — and where they will be used — helps shape everything from the location to the style of the shoot.",
        ],
      },
      {
        heading: "From the camera to the wall",
        paragraphs: [
          "Photos come to life when they are printed and displayed. Framed prints, photo gifts and branded visuals let your best moments be seen and shared.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
