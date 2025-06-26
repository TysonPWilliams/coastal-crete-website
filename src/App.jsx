import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { WhyCoastalCrete } from './components/WhyCoastalCrete'
import { Testimonials } from './components/Testimonials'
import { StickyCallButton } from './components/StickyCallButton'
import { StickyChatWidget } from './components/StickyChatWidget'
import { ExitIntentPopup } from './components/ExitIntentPopup'
import { ServiceArea } from './components/ServiceArea'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Projects />
      <WhyCoastalCrete />
      <Testimonials />
      <ServiceArea />
      <Footer />
      <StickyCallButton />
      <StickyChatWidget />
      <ExitIntentPopup />
    </div>
  )
}

export default App
