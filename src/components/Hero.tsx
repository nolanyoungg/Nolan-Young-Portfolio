import { motion } from 'framer-motion'
import { ArrowRight, Braces, Download, Layers3, MapPin, Network, ShieldCheck } from 'lucide-react'
import { metrics, operatingPillars } from '../data/portfolio'
import { AnimatedCounter } from './AnimatedCounter'

export function Hero() {
  const resumeHref = `${import.meta.env.BASE_URL}Nolan-Young-Resume.pdf`

  return (
    <section id="home-v1" className="px-4 pb-24 pt-32 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/8 px-4 py-2 text-sm text-sky-100">
              <MapPin size={16} /> Queensbury, NY
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Nolan Young</p>
            <h1 className="mt-4 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
              Full-stack developer building software for real business operations.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
              I turn complex business processes into clean software through custom APIs, web platforms, automation,
              analytics, and practical AI integration.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-200" href="#work">
                View selected work <ArrowRight size={18} />
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10" href="#capabilities">
                Explore capabilities
              </a>
              {/* Place Nolan's resume PDF in public/resume.pdf before deployment. */}
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-300/20 px-6 py-3 font-semibold text-sky-100 transition hover:border-sky-300/45" href={resumeHref}>
                <Download size={18} /> Download Resume
              </a>
            </div>
          </motion.div>

          <motion.aside
            className="rounded-[2rem] border border-white/10 bg-slate-950/62 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-sky-300">Professional profile</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Software development + technical ownership</h2>
              </div>
              <Braces className="text-sky-300" size={28} />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-3xl font-semibold text-white">
                    <AnimatedCounter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {operatingPillars.map((pillar, index) => {
            const Icon = [Layers3, Network, ShieldCheck][index]
            return (
              <motion.article
                key={pillar.title}
                className="rounded-3xl border border-white/10 bg-slate-950/50 p-6 backdrop-blur"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <Icon className="mb-5 text-sky-300" size={26} />
                <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{pillar.copy}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
