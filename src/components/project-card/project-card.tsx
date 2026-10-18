import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import styles from "./project-card.module.css";

export interface cardProps {
  framework: string;
  img: string;
  header: string;
  to: string;
  description: string;
  pills: { title: string }[];
}

export default function ProjectCard({
  framework,
  img,
  to,
  header,
  description,
  pills,
}: cardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt={`${header} preview`} />
        <span className={styles.framework}>{framework}</span>
      </div>

      <div className={styles.descriptionSection}>
        <div className={styles.header}>
          <h3>{header}</h3>
          <Link to={to} aria-label={`View ${header}`}>
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <p>{description}</p>
      </div>

      <div className={styles.pills}>
        {pills.map((pill) => (
          <span key={pill.title} className={styles.pill}>
            {pill.title}
          </span>
        ))}
      </div>
    </article>
  );
}
