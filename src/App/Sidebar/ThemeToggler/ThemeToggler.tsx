import ActionIconButton from "@/Components/ActionIconButton";
import { Moon, SunMoon } from "lucide-react";
import { useState } from "react";

const lightTheme = "light";
const darkTheme = "dark";

const ThemeToggler = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  const root = window.document.documentElement;
  let theme: typeof lightTheme | typeof darkTheme;
  if (localStorage) {
    theme = localStorage.getItem("theme") as typeof theme;
  }
  if (theme === lightTheme || theme === darkTheme) {
    root.classList.add(theme);
  } else {
    root.classList.add(lightTheme);
  }

  const handleOnClick = () => {
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
    <ActionIconButton onClick={handleOnClick} icon={dark ? SunMoon : Moon} />
  );
};

export default ThemeToggler;
