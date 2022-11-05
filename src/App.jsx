import './App.css'
import React from  "react"
// import {Routes, Route, NavLink} from "react-router-dom";
import Home from "./Pages/Home"
import ErrorBoundary from "./components/ErrorBoundary"


export default function App() {
  const [darkMode, setDarkMode] = React.useState(true)

    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }


  
  return (
    <main>
      <ErrorBoundary>
     <Home
       darkMode = {darkMode} 
    toggleDarkMode ={toggleDarkMode} 
       />
      </ErrorBoundary>

      
    </main>
  )
}
