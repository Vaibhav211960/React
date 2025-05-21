import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import Theme from "./components/Theme";
import Card from "./components/Card";
function App() {

  const [themeMode , setThemeMode] = useState('light')

  const lightMode = () =>{
    setThemeMode('light')
  }
  const darkMode = () =>{
    setThemeMode('dark')
  }

  useEffect(()=>{
    const html = document.querySelector('html')
    html.classList.remove('dark' , 'light')
    html.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value = {{themeMode , lightMode , darkMode }}>
      <div className="flex flex-wrap bg-zinc-600 min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Theme />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
