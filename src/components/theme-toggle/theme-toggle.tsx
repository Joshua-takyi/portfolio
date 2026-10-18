import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./theme-toggle.module.css";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [ready, setReady] = useState(false);

  // Sync with what the inline script in <head> already applied
  useEffect(() => {
    const current = document.documentElement.dataset.theme as Theme | undefined;
    setTheme(current === "light" ? "light" : "dark");
    setReady(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={`${styles.toggle} ${ready ? styles.ready : ""}`}
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
    >
      <Sun
        size={20}
        aria-hidden="true"
        className={`${styles.icon} ${isDark ? styles.active : ""}`}
      />
      <Moon
        size={20}
        aria-hidden="true"
        className={`${styles.icon} ${!isDark ? styles.active : ""}`}
      />
    </button>
  );
}
