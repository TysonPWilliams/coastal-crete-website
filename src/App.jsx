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
import { QuoteModal } from './components/QuoteModal'
import { Services } from './components/Services'

function App() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)

  return (
    <div className="App">
      <Header />
      <HeroSection setShowQuoteModal={setShowQuoteModal} />
      <Services setShowQuoteModal={setShowQuoteModal} />
      <Projects />
      <WhyCoastalCrete />
      <Testimonials setShowQuoteModal={setShowQuoteModal} />
      <ServiceArea setShowQuoteModal={setShowQuoteModal} />
      <Footer setShowQuoteModal={setShowQuoteModal} />
      <StickyCallButton />
      <StickyChatWidget />
      <ExitIntentPopup />
      <QuoteModal open={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
    </div>
  )
}

export default App
