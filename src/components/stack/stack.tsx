import IndexSection from "../index-section/index-section";
import StackCard from "../stack-card/stack-card";
import styles from "./stack.module.css";
const keyValue: { title: string; value: string }[] = [
  {
    title: "Name",
    value: "Joshua Kofi Takyi",
  },
  {
    title: "Location",
    value: "Accra, Ghana",
  },
  {
    title: "Email",
    value: "takyijoshua019@gmail.com",
  },
  {
    title: "Status",
    value: "Available for work",
  },
];

const icon = (slug: string, color = "white") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

export const stack: {
  header: string;
  icons: { img: string; title: string; adaptive?: boolean }[];
}[] = [
  {
    header: "Frontend",
    icons: [
      { img: icon("nextdotjs"), title: "Next.js", adaptive: true },
      { img: icon("react", "61DAFB"), title: "React" },
      { img: icon("typescript", "3178C6"), title: "TypeScript" },
      { img: icon("astro", "3178C6"), title: "Astro" },
      { img: icon("tailwindcss", "06B6D4"), title: "Tailwind CSS" },
    ],
  },
  {
    header: "Backend",
    icons: [
      { img: icon("nodedotjs", "5FA04E"), title: "Node.js" },
      { img: icon("express"), title: "Express", adaptive: true },
      { img: icon("go", "00ADD8"), title: "Go" },
      { img: icon("gin", "008ECF"), title: "Gin" },
    ],
  },
  {
    header: "Database & Auth",
    icons: [
      { img: icon("postgresql", "4169E1"), title: "PostgreSQL" },
      { img: icon("supabase", "3FCF8E"), title: "Supabase" },
      { img: icon("mongodb", "47A248"), title: "MongoDB" },
    ],
  },
  {
    header: "Tools & Others",
    icons: [
      { img: icon("git", "F05032"), title: "Git" },
      { img: icon("docker", "2496ED"), title: "Docker" },
      { img: icon("redis", "DC382D"), title: "Redis" },
      { img: icon("vercel"), title: "Vercel", adaptive: true },
    ],
  },
];
export default function Stack() {
  return (
    <section className={styles.section} id="about">
      <div className={`${styles.sectionHolder} container`}>
        <div className={styles.stack}>
          <div className={styles.left}>
            <IndexSection index="01" title="About me" />
            <p className={styles.aboutMeDetails}>
              I'm a software engineer with hands-on experience building web
              applications with javascript,Typescript, Go and modern frameworks
              like Nextjs and Express. I enjoy working on real world problems,
              learning new technologies, and creating scalable, user friendly
              solutions.
            </p>
            <ul className={styles.list}>
              {keyValue.map((item) => (
                <li key={item.title}>
                  <span>{item.title}</span>:<span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.right}>
            <IndexSection index="02" title="Stack" />
            {stack.map((group) => (
              <StackCard key={group.header} {...group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
