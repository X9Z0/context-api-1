import { Switch } from "./ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./context/theme";
import React from "react";

const Navbar = () => {
  const { theme, toggle } = useTheme();
  const onBtn = () => {
    toggle();
  };
  return (
    <div className="flex justify-end items-center">
      <div className="flex gap-2 p-4 justify-center items-center">
        <Sun />
        <Switch checked={theme === "dark"} onCheckedChange={onBtn}></Switch>
        <Moon />
      </div>
    </div>
  );
};

export default Navbar;
