import { AnimatePresence, MotionConfig } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Background } from './components/Background/Background'
import { Capabilities } from './components/Capabilities/Capabilities'
import { Contact } from './components/Contact/Contact'
import { Experience } from './components/Experience/Experience'
import { Hero } from './components/Hero/Hero'
import { Impact } from './components/Impact/Impact'
import { Navbar } from './components/Navbar/Navbar'
import { Principles } from './components/Principles/Principles'
import { ScrollProgress } from './components/ScrollProgress/ScrollProgress'

import { SelectedWorkV2 } from './components/SelectedWorkV2/SelectedWorkV2'
import SplashScreen from './components/splashScreen/SplashScreen'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowSplash(false)
    }, 2000)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen />}
      </AnimatePresence>

      <MotionConfig reducedMotion="user">
        <ScrollProgress />
        <Background />
        <Navbar />

        <main className="app-main">
          <Hero />
          <Impact />
          <SelectedWorkV2 />
          <Capabilities />
          <Experience />
          <Principles />
          <Contact />
        </main>
      </MotionConfig>
    </>
  )
}

export default App
