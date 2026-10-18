import { Link } from "react-router";
import styles from "./hero.module.css";

const icon = (slug: string, color = "white") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

type Social = { label: string; to: string; icon: string };

const socials: Social[] = [
  {
    label: "GitHub",
    to: "https://github.com/your-username", // TODO: your handle
    icon: icon("github"),
  },
  // {
  //   label: "LinkedIn",
  //   to: "https://www.linkedin.com/in/your-username", // TODO: your handle
  //   icon: icon("linkedin", "0A66C2"),
  // },
  // {
  //   label: "X (Twitter)",
  //   to: "https://x.com/your-username", // TODO: your handle
  //   icon: icon("x"),
  // },
  {
    label: "Email",
    to: "mailto:takyijoshua019@gmail.com", // TODO: your email
    icon: icon("gmail", "EA4335"),
  },
];
export default function Hero() {
  return (
    <section>
      <div className={`${styles.hero} container`}>
        <div className={styles.details}>
          <div className={styles.introduction}>
            <p>Hi, I'm</p>
            <h1>Joshua Takyi</h1>
          </div>

          <div className={styles.about}>
            <p>
              Full-stack developer building practical web applications with
              modern tools.
            </p>
            <p>
              I enjoy turning ideas into real products -- from clean frontend
              interfaces to scalable backend systems. I'm always learning and
              exploring new technologies, committed to writing clean,
              maintainable code.
            </p>
          </div>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryBtn}>
              View my projects <span aria-hidden="true">→</span>
            </a>
            <Link to="#contact" className={styles.textLink}>
              Get in touch
            </Link>
          </div>
        </div>

        <div className={styles.imgSection}>
          <div className={styles.img}>
            <img src="images/ogs-logo-dark.svg" alt="Joshua Takyi" />
          </div>

          <div className={styles.connect}>
            <p className={styles.status}>
              <span className={styles.dot} aria-hidden="true" />
              Available for work
            </p>

            <ul className={styles.socials}>
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.to}
                    aria-label={item.label}
                    title={item.label}
                    className={styles.socialLink}
                    target={item.to.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <img
                      src={item.icon}
                      alt=""
                      width={22}
                      height={22}
                      loading="lazy"
                      className={styles.socialIcon}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
