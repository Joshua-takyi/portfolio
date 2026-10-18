import styles from "./stack-card.module.css";

interface StackCardProps {
  header: string;
  icons: { img: string; title: string; adaptive?: boolean }[];
}

export default function StackCard({ icons, header }: StackCardProps) {
  return (
    <section className={styles.holder}>
      <h3 className={styles.header}>{header}</h3>
      <ul className={styles.iconsSection}>
        {icons.map((item) => (
          <li key={item.title} className={styles.item}>
            <img
              src={item.img}
              alt=""
              width={20}
              height={20}
              loading="lazy"
              className={`${styles.icon} ${item.adaptive ? styles.adaptive : ""}`}
            />
            <span className={styles.title}>{item.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
