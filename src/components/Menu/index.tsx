import {
  HouseIcon,
  HistoryIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem(
      "theme"
    ) as AvailableThemes | null;
    return storageTheme ?? "dark";
  });

  function toggleTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Botão para Home"
        title="Botão para Home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Botão para Histórico"
        title="Botão para Histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Botão para Configurações"
        title="Botão para Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Botão para Alternar Tema"
        title="Botão para Alternar Tema"
        onClick={toggleTheme}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
