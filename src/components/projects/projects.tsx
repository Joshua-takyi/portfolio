import IndexSection from "../index-section/index-section";
import ProjectCard from "../project-card/project-card";
import { projects } from "./project_data";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <div className={`${styles.project} container`} id="projects">
      <div>
        <IndexSection
          title="Featured Projects"
          index="03"
          linkTitle="View all"
          viewAll={false}
          to="projects"
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
