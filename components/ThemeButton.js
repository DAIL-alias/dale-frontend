import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      className={`p-2 ${theme == "light" ? "hover:bg-gray-200" : "hover:bg-[#191C1E]"} rounded-md`}
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
    >
      {theme == "light" ? (
        <MoonIcon className="w-6 h-6" />
      ) : (
        <SunIcon className="w-6 h-6" />
      )}
    </button>
  );
}

export default ThemeButton;
