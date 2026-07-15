import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'
import { LetterGlitch } from '../LetterGlitch/LetterGlitch'
import { Orb } from '../Orb/Orb'
import './HeroV2.css'

const introItems = ['Full-stack development', 'API integrations', 'Practical AI workflows']

export function HeroV2() {
  return (
    <section id="home" className="hero-v2">
      <div className="hero-v2__orb"><div className="hero-v2__orb-glow" /><Orb hue={0} hoverIntensity={0.5} rotateOnHover forceHoverState={false} /></div>
      <div className="hero-v2__inner">
        <div className="hero-v2__ring hero-v2__ring--outer" /><div className="hero-v2__ring hero-v2__ring--inner" />
        <motion.div className="hero-v2__content" initial={{ opacity: 0, transform: 'translateY(22px) scale(0.97)' }} animate={{ opacity: 1, transform: 'translateY(0) scale(1)' }} transition={{ duration: .8, ease: [.23,1,.32,1] }}>
          <motion.div className="hero-v2__badge" initial={{ opacity:0, transform:'translateY(10px)' }} animate={{ opacity:1, transform:'translateY(0)' }} transition={{ delay:.12, duration:.45 }}><Sparkles size={15} />Software for real business operations</motion.div>
          <motion.p className="hero-v2__eyebrow" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.2, duration:.35 }}>Nolan Young</motion.p>
          <h1 className="hero-v2__title"><motion.span className="hero-v2__title-line" initial={{ opacity:0, transform:'translateY(16px)' }} animate={{ opacity:1, transform:'translateY(0)' }} transition={{ delay:.26, duration:.55 }}>Building the systems</motion.span><motion.span className="hero-v2__title-line hero-v2__title-line--gradient" initial={{ opacity:0, transform:'translateY(16px)' }} animate={{ opacity:1, transform:'translateY(0)' }} transition={{ delay:.34, duration:.55 }}>behind better work.</motion.span></h1>
          <motion.p className="hero-v2__copy" initial={{ opacity:0, transform:'translateY(14px)' }} animate={{ opacity:1, transform:'translateY(0)' }} transition={{ delay:.44, duration:.55 }}>I turn complex business processes into clean software through custom APIs, web platforms, automation, analytics, and practical AI integration.</motion.p>
          <motion.div className="hero-v2__actions" initial={{ opacity:0, transform:'translateY(12px)' }} animate={{ opacity:1, transform:'translateY(0)' }} transition={{ delay:.56, duration:.5 }}><a className="hero-v2__button hero-v2__button--primary" href="#work">See selected work <ArrowRight size={18} /></a><a className="hero-v2__button hero-v2__button--secondary" href="#contact">Start a conversation</a></motion.div>
          <motion.div className="hero-v2__topics" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.7, duration:.5 }}>{introItems.map((item,index)=><span key={item} className="hero-v2__topic">{index > 0 && <span className="hero-v2__dot">•</span>}{item}</span>)}</motion.div>
        </motion.div>
        <motion.div className="hero-v2__glitch-card" initial={{ opacity:0, transform:'translateY(14px) rotate(12deg) scale(.92)' }} animate={{ opacity:1, transform:'translateY(0) rotate(6deg) scale(1)' }} transition={{ delay:.62,duration:.7 }}><div className="hero-v2__glitch"><LetterGlitch glitchColors={['#06B6D4','#7cff67','#F43F5E']} glitchSpeed={110} centerVignette={false} outerVignette={false} smooth /><div className="hero-v2__glitch-overlay" /></div><span className="hero-v2__live">Live systems</span></motion.div>
        <motion.div className="hero-v2__momentum" initial={{ opacity:0, transform:'translateX(-12px)' }} animate={{ opacity:1, transform:'translateX(0)' }} transition={{ delay:.78,duration:.55 }}><span className="hero-v2__status" />Designed for momentum</motion.div>
        <motion.a href="#impact" aria-label="Scroll to measured outcomes" className="hero-v2__scroll" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1,duration:.5 }}><ArrowDown size={17} /></motion.a>
      </div>
    </section>
  )
}
