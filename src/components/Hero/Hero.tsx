import { motion } from 'framer-motion'
import { ArrowRight, Braces, Download, Layers3, MapPin, Network, ShieldCheck } from 'lucide-react'
import { metrics, operatingPillars } from '../../data/portfolio'
import { AnimatedCounter } from '../AnimatedCounter/AnimatedCounter'
import { LetterGlitch } from '../LetterGlitch/LetterGlitch'
import './Hero.css'

export function Hero() {
  const resumeHref = `${import.meta.env.BASE_URL}Nolan-Young-Resume.pdf`

  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__layout">
          <motion.div className="hero__intro" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="hero__location">
              <MapPin size={16} /> Queensbury, NY
            </div>
            <p className="hero__eyebrow">Nolan Young</p>
            <h1 className="hero__title">
              Full-stack developer building software for real business operations.
            </h1>
            <p className="hero__copy">
              I turn complex business processes into clean software through custom APIs, web platforms, automation,
              analytics, and practical AI integration.
            </p>
            <div className="hero__actions">
              <a className="hero__button hero__button--primary" href="#work">
                View selected work <ArrowRight size={18} />
              </a>
              <a className="hero__button hero__button--outline" href="#capabilities">
                Explore capabilities
              </a>
              {/* Place Nolan's resume PDF in public/resume.pdf before deployment. */}
              <a className="hero__button hero__button--resume" href={resumeHref}>
                <Download size={18} /> Download Resume
              </a>
            </div>
          </motion.div>

          <motion.aside
            className="hero__profile"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="hero__profile-top">
              <div>
                <p className="hero__profile-label">Professional profile</p>
                <h2 className="hero__profile-title">Software Developer</h2>
              </div>
              <Braces className="hero__accent-icon" size={28} />
            </div>
            <div className="hero__metrics">
              {metrics.filter((metric) => metric.label !== 'added revenue impact').map((metric) => (
                <div key={metric.label} className="hero__metric">
                  <p className="hero__metric-value">
                    <AnimatedCounter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                  </p>
                  <p className="hero__metric-label">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="hero__glitch">
              <LetterGlitch
                glitchColors={['#06B6D4', '#7cff67', '#F43F5E']}
                glitchSpeed={110}
                centerVignette={false}
                outerVignette={false}
                smooth
              />
            </div>
          </motion.aside>
        </div>

        <div className="hero__pillars">
          {operatingPillars.map((pillar, index) => {
            const Icon = [Layers3, Network, ShieldCheck][index]
            return (
              <motion.article
                key={pillar.title}
                className="hero__pillar"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <Icon className="hero__pillar-icon" size={26} />
                <h3 className="hero__pillar-title">{pillar.title}</h3>
                <p className="hero__pillar-copy">{pillar.copy}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
