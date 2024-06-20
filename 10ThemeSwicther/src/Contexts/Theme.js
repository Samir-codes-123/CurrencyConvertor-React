import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  //default value
  themeMode: "light",
  darkTheme: () => {},
  ligthTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
