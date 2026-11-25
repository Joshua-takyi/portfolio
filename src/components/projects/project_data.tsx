import type { cardProps } from "../project-card/project-card";

export const projects: cardProps[] = [
  {
    framework: "React • Go", // adjust to your actual frontend
    img: "images/madscent.webp", // see note below
    header: "UY Studio",
    to: "https://crazyscent.vercel.app/", // or the live URL
    description:
      "A fragrance, wax, and stone storefront with a Go backend. Features a product catalog, signed direct-to-storage uploads, and a clean editorial UI.",
    pills: [{ title: "Go" }, { title: "Gin" }, { title: "Supabase" }],
  },
  {
    framework: "Astro • Vercel",
    img: "images/onpoint.webp",
    header: "Onpoint Painting",
    to: "https://onpointpainting.vercel.app",
    description:
      "A marketing site for a Portland painting company. Features service pages, a project gallery, client testimonials, and a free-quote contact flow.",
    pills: [{ title: "Astro" }, { title: "Vercel" }],
  },
  {
    framework: "Astro • Vercel",
    img: "images/voice-notes.webp",
    header: "Voice Notes Clone",
    to: "https://voice-clone-mocha.vercel.app",
    description:
      "A landing page clone for an AI voice note-taking app. Features a responsive navigation menu, feature and use-case sections, testimonials, and pricing cards.",
    pills: [{ title: "Astro" }, { title: "Vercel" }],
  },
  {
    framework: "Astro • Vercel",
    img: "images/cold-press.webp",
    header: "Refresh Juice Clone",
    to: "https://juice-flame.vercel.app/",
    description:
      "A landing page clone for a cold-pressed juice delivery brand. Features a responsive navigation bar with cart badge, a hero section with product showcase and rating, an animated marquee of brand promises, and a floating WhatsApp contact button.",
    pills: [{ title: "React" }, { title: "Vercel" }],
  },
];
