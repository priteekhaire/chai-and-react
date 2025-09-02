
import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme.js'
import { useEffect } from 'react'
import ThemeBtn from './components/themebtn'
import Card from './components/card.jsx'

function App() {
  const [themeMode,setThemeMode]=useState("light")
  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
 setThemeMode ("dark")
  }
  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark")
     document.querySelector("html").classList.add(themeMode)

  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    
        <div className="flex flex-wrap min-h-screen items-center">
                    <div className="w-full">
                        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                            <ThemeBtn/>
                        </div>
                           <Card/>
                        <div className="w-full max-w-sm mx-auto">
                          
                        </div>
                    </div>
                </div>
    </ThemeProvider>

  )
}

export default App
