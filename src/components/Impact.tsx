import { motion } from 'framer-motion'
import { BarChart3, DatabaseZap, Gauge, MonitorCog, TrendingUp } from 'lucide-react'
import { metrics } from '../data/portfolio'
import { AnimatedCounter } from './AnimatedCounter'
import { SectionHeader } from './SectionHeader'

const icons = [DatabaseZap, TrendingUp, BarChart3, MonitorCog, Gauge]

export function Impact() {
  return (
    <section id="impact" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Measured outcomes"
          title="Software work connected to business value"
          copy="The portfolio is built around real impact: cleaner integrations, stronger web platforms, better analytics visibility, reliable operations, and AI workflows designed around actual business needs."
        />
        <div className="grid gap-4 md:grid-cols-5">
          {metrics.map((metric, index) => {
            const Icon = icons[index]
            return (
              <motion.article
                key={metric.label}
                className="rounded-3xl border border-white/10 bg-slate-950/58 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-sky-300/35"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.04 }}
              >
                <Icon className="mb-5 text-sky-300" size={24} />
                <p className="text-4xl font-semibold text-white">
                  <AnimatedCounter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                </p>
                <h3 className="mt-3 font-semibold text-slate-100">{metric.label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{metric.detail}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
