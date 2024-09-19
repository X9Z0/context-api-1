import { Switch } from "@radix-ui/react-switch";
import { Sun } from "lucide-react";
import { useTheme } from "./context/theme";

const Navbar = () => {
  const [theme, toggle] = useTheme();
  return (
    <div className="flex justify-end items-center">
      <div>
        <Sun />
        <Switch checked={theme} />
      </div>
    </div>
  );
};

export default Navbar;
