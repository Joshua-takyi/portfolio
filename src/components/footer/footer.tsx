import styles from "./footer.module.css";
export default function Footer() {
  // const handleBackToTop = () => {
  //   const reduceMotion = window.matchMedia(
  //     "(prefers-reduced-motion: reduce)",
  //   ).matches;
  //   window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  // };

  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`${styles.holder} container`}>
        <p className={styles.year}>{year} Joshua Takyi. All rights reserved</p>

        {/* <button onClick={handleBackToTop}>Back to to</button> */}
      </div>
    </footer>
  );
}
