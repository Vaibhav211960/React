import React, { createContext, useContext } from "react";

const ThemeContext = createContext(
    { 
        themeMode : 'light',
        lightMode : ()=>{},
        darkMode : ()=>{},
    }
)

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
