import { motion } from 'framer-motion'
import { BarChart3, DatabaseZap, Gauge, MonitorCog, TrendingUp } from 'lucide-react'
import { metrics } from '../../data/portfolio'
import { AnimatedCounter } from '../AnimatedCounter/AnimatedCounter'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import './Impact.css'

const icons = [DatabaseZap, TrendingUp, BarChart3, MonitorCog, Gauge]

export function Impact() {
  return (
    <section id="impact" className="impact">
      <div className="impact__inner">
        <SectionHeader
          eyebrow="Measured outcomes"
          title="Software work connected to business value"
          copy="The portfolio is built around real impact: cleaner integrations, stronger web platforms, better analytics visibility, reliable operations, and AI workflows designed around actual business needs."
        />
        <div className="impact__grid">
          {metrics.map((metric, index) => {
            const Icon = icons[index]
            return (
              <motion.article
                key={metric.label}
                className="impact__card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.04 }}
              >
                <Icon className="impact__icon" size={24} />
                <p className="impact__value">
                  <AnimatedCounter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                </p>
                <h3 className="impact__label">{metric.label}</h3>
                <p className="impact__detail">{metric.detail}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
