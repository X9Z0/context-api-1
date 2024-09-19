import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggle: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
  return useContext(ThemeContext);
};
