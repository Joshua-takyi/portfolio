import { Mail, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import styles from "./get-in-touch.module.css";
import IndexSection from "../index-section/index-section";

const details: { value: string; Icon: LucideIcon; href?: string }[] = [
  {
    Icon: Mail,
    value: "takyijoshua019@gmail.com",
    href: "mailto:takyijoshua019@gmail.com",
  },
  {
    Icon: MapPin,
    value: "Accra, Ghana",
  },
];

export default function GetInTouch() {
  return (
    <section className={`${styles.parent} container`} id="contact">
      <IndexSection title="Get In Touch" index="06" />
      <div className={styles.gridSection}>
        <div className={styles.description}>
          <p>
            Have a project in mind, a question or just want to say hi? Feel free
            to reach out. I'd love to hear from you.
          </p>
        </div>

        <div className={styles.right}>
          {details.map(({ Icon, value, href }) => (
            <div key={value} className={styles.detailSection}>
              <Icon size={20} aria-hidden="true" />
              {href ? <a href={href}>{value}</a> : <span>{value}</span>}
            </div>
          ))}

          <div>
            <p>Let's build something together</p>
          </div>
        </div>
      </div>
    </section>
  );
}
