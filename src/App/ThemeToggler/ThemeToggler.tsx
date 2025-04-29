import { Moon, SunMoon } from "lucide-react";
import { useState } from "react";

const ThemeToggler = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  const root = window.document.documentElement;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;
  if (localStorage) {
    theme = localStorage.getItem("theme");
  }
  if (theme === lightTheme || theme === darkTheme) {
    root.classList.add(theme);
  } else {
    root.classList.add(lightTheme);
  }

  const handleChange = () => {
    if (theme === darkTheme) {
      root.classList.replace(darkTheme, lightTheme);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
      setDark(false);
    } else {
      root.classList.replace(lightTheme, darkTheme);
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <button
      onClick={handleChange}
      className="p-2 rounded bg-primary-dark dark:bg-primary-light text-secondary-dark dark:text-secondary-light"
    >
      <>{dark ? <SunMoon /> : <Moon />}</>
    </button>
  );
};

export default ThemeToggler;
