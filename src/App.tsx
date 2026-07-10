import { MotionConfig } from 'framer-motion'
import { Background } from './components/Background'
import { Capabilities } from './components/Capabilities'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Impact } from './components/Impact'
import { Navbar } from './components/Navbar'
import { Principles } from './components/Principles'
import { ScrollProgress } from './components/ScrollProgress'
import { SelectedWork } from './components/SelectedWork'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Impact />
        <SelectedWork />
        <Capabilities />
        <Experience />
        <Principles />
        <Contact />
      </main>
    </MotionConfig>
  )
}

export default App
