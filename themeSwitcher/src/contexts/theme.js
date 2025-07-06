import { createContext, useContext } from "react";

export const ThemeContext = createContext({    // default value is light...
    themeMode: "Light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext (ThemeContext)    //custom hook could be used as useTheme()
}