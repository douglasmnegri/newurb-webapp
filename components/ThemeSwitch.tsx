"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => {
        // add a transient class that enables CSS transitions
        document.documentElement.classList.add('theme-transition');
        // toggle theme
        setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark");
        window.setTimeout(() => document.documentElement.classList.remove('theme-transition'), 300);
      }}
      className="p-2 text-gray-800 dark:text-gray-200 bg-transparent dark:bg-black"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" || resolvedTheme === "dark" ? <AiOutlineSun size={20} /> : <AiOutlineMoon size={20} />}
    </button>
  );
};

export default ThemeSwitch;
