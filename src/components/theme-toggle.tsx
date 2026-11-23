"use client";

import { motion } from "motion/react";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";

    root.dataset.theme = nextTheme;

    try {
      window.localStorage.setItem("bas-theme", nextTheme);
    } catch {
      // The visual theme still changes when storage is unavailable.
    }
  }

  return (
    <motion.button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.92, rotate: -8 }}
      transition={{ type: "spring", stiffness: 520, damping: 28 }}
      aria-label="Switch between light and dark appearance"
      title="Switch appearance"
    >
      <svg className="theme-icon theme-icon-sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.8" />
        <path d="M12 2v2.1M12 19.9V22M4.93 4.93l1.49 1.49m11.16 11.16 1.49 1.49M2 12h2.1m15.8 0H22M4.93 19.07l1.49-1.49M17.58 6.42l1.49-1.49" />
      </svg>
      <svg className="theme-icon theme-icon-moon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.2 15.1A8.6 8.6 0 0 1 8.9 3.8 8.7 8.7 0 1 0 20.2 15.1Z" />
      </svg>
      <span className="theme-toggle-text">Appearance</span>
    </motion.button>
  );
}
