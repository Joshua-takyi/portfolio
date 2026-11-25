import ProjectCard from "../../components/project-card/project-card";
import { projects } from "../../components/projects/project_data";
import styles from "./projects.module.css";
export default function ProjectPage() {
  return (
    <main className={styles.main}>
      {/* <div
        className={`${styles.header__section} container`}
        style={{ padding: "1rem", marginBottom: "1rem" }}
      >
        <h1>projects</h1>
        <p>projects</p>
      </div> */}
      <div className={`${styles.parent} container`}>
        <div className={styles.grid__section}>
          {projects.map((project) => (
            <ProjectCard {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
