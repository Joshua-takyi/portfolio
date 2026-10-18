import styles from "./timeline.module.css";

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className={styles.timeline}>
      {items.map((item) => (
        <li key={`${item.period}-${item.title}`} className={styles.item}>
          <span className={styles.dot} aria-hidden="true" />
          <time className={styles.period}>{item.period}</time>
          <div className={styles.content}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
