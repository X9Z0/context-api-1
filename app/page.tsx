"use client";
import { ThemeProvider } from "@/components/context/theme";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import MainPage from "@/components/MainPage";
export default function Home() {
  const [theme, setTheme] = useState<string>("light");

  const toggle = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("light", "dark");
    document.querySelector("html")?.classList.add(theme);
  }, [theme]);
  return (
    <>
      <ThemeProvider value={{ theme, toggle }}>
        <Navbar />
        <div className="flex justify-center items-center h-screen w-screen">
          <MainPage />
        </div>
      </ThemeProvider>
    </>
  );
}
