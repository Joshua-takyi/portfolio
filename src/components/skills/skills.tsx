import styles from "./skills.module.css";

export interface Skill {
  name: string;
  level: number; // 0-100
}

export default function Skills({
  intro,
  skills,
}: {
  intro: string;
  skills: Skill[];
}) {
  return (
    <section className={styles.section}>
      <p className={styles.intro}>{intro}</p>

      <ul className={styles.list}>
        {skills.map((skill) => (
          <li key={skill.name} className={styles.row}>
            <span className={styles.bracket} aria-hidden="true">
              [ ]
            </span>
            <span className={styles.name}>{skill.name}</span>

            <div
              className={styles.track}
              role="progressbar"
              aria-label={skill.name}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={skill.level}
            >
              <div
                className={styles.fill}
                style={{ width: `${skill.level}%` }}
              />
            </div>

            <span className={styles.percent}>{skill.level}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
