import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
      {isDark ? "Jasny" : "Ciemny"}
    </button>
  );
}
