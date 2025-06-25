import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { Footer } from './components/Footer'
import { WhyCoastalCrete } from './components/WhyCoastalCrete'
import { Testimonials } from './components/Testimonials'
import { StickyCallButton } from './components/StickyCallButton'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <WhyCoastalCrete />
      <Testimonials />
      <Footer />
      <StickyCallButton />
    </div>
  )
}

export default App
