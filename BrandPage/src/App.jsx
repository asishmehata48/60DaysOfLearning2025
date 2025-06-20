import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
function App() {
  

  return (
    <div>
      <Navigation />
      <HeroSection />
    </div>
  )
}

export default App
