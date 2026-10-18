import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import styles from "./nav.module.css";
import { MenuIcon, X } from "lucide-react";
import ThemeToggle from "../theme-toggle/theme-toggle";

const navLinks: { title: string; to: string }[] = [
  { title: "Home", to: "/" },
  { title: "Projects", to: "#projects" },
  { title: "About", to: "#about" },
  { title: "Contact", to: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  // Lock page scroll while the menu is open, and close on Escape
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    // no animation will play, so unmount immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsOpen(false);
      return;
    }
    setIsClosing(true);
  }, []);

  const handleAnimationEnd = () => {
    if (isClosing) {
      setIsOpen(false);
      setIsClosing(false);
    }
  };

  return (
    <header className={styles.header}>
      <section className={`container ${styles.bar}`}>
        <div className={styles.brand}>
          <img src="icons/terminal-svgrepo-com.svg" alt="" />
          <p>Joshua Takyi</p>
        </div>

        {/* Desktop navigation */}
        <nav className={styles.desktopNav} aria-label="Main">
          {navLinks.map((link, index) => (
            <div className={styles.navItem} key={link.to}>
              <span className={styles.index} aria-hidden="true">
                [{index + 1}]
              </span>
              <a href={link.to}>{link.title}</a>
            </div>
          ))}
          {/* <ThemeToggle /> */}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setIsOpen(true)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <MenuIcon />
        </button>
      </section>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          id="mobile-menu"
          className={`${styles.overlay} ${isClosing ? styles.closing : ""}`}
          onAnimationEnd={handleAnimationEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className={styles.overlayHeader}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeMenu}
            >
              <X />
            </button>
          </div>

          <nav className={styles.mobileNav} aria-label="Mobile">
            {navLinks.map((link, index) => (
              <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)}>
                <span className={styles.index} aria-hidden="true">
                  [{index + 1}]
                </span>
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
