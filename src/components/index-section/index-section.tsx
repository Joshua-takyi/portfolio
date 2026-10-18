import { Link } from "react-router";
import styles from "./index-section.module.css";
export default function IndexSection({
  title,
  index,
  viewAll,
  to,
  linkTitle,
}: {
  title: string;
  index: string;
  viewAll?: boolean;
  to?: string;
  linkTitle?: string;
}) {
  return (
    <div className={styles.indexSection}>
      <span className={styles.index}>[{index}]</span>
      <div className={styles.title}>
        <p>{title}</p>
        {viewAll && to && linkTitle !== "" && <Link to={to}>{linkTitle}</Link>}
      </div>
    </div>
  );
}
