import IndexSection from "../index-section/index-section";
import Skills from "../skills/skills";
import Timeline from "../timeline/timeline";
import styles from "./experience.module.css";

const experience = [
  {
    period: "2024 - Present",
    title: "Full-stack Developer",
    description:
      "Worked on multiple web applications using Next.js, Go, Express and Prisma.",
  },
  {
    period: "2023 - 2024",
    title: "Backend Developer (Go)",
    description:
      "Built REST APIs, real-time features and database integrations with PostgreSQL.",
  },
  {
    period: "2022 - 2023",
    title: "Frontend Developer",
    description:
      "Developed responsive UIs with React, Next.js and Tailwind CSS.",
  },
];
export default function Experience() {
  return (
    <section className={`${styles.section} container`}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <IndexSection title="Experience" index="04" />
          <Timeline items={experience} />
        </div>
        <div className={styles.right}>
          <IndexSection title="What I'm doing now" index="05" />
          <Skills
            intro="Currently working on improving my backend skills, building real-world projects, and exploring Go, system design and cloud technologies."
            skills={[
              { name: "Go", level: 80 },
              { name: "System Design", level: 60 },
              { name: "Next.js", level: 70 },
              { name: "Cloud (AWS/Supabase)", level: 50 },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
