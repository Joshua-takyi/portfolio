import IndexSection from "../index-section/index-section";
import type { cardProps } from "../project-card/project-card";
import ProjectCard from "../project-card/project-card";
import styles from "./projects.module.css";

const projects: cardProps[] = [
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
];
export default function Projects() {
  return (
    <div className={`${styles.project} container`} id="projects">
      <div>
        <IndexSection
          title="Featured Projects"
          index="03"
          linkTitle="View all"
          viewAll={true}
          to="#projects"
        />
      </div>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
