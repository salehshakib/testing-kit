import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="flex justify-between items-center  bg-white dark:bg-black dark:text-white">
      This is header
      <button
        className="bg-green-200 text-black px-4 py-2 rounded-3xl shadow-sm hover:shadow-lg"
        onClick={toggleTheme}
      >
        Dark Mode
      </button>
    </div>
  );
};

export default Header;
