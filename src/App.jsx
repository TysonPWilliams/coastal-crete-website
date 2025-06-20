import { useState } from 'react'
import './App.css'
import { HeroSection } from './components/HeroSection'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Navbar /> */}
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HeroSection/>} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  )
}

export default App
