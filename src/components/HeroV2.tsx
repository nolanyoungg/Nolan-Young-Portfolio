import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'
import { LetterGlitch } from './LetterGlitch'
import { Orb } from './Orb'

const introItems = [
  'Full-stack development',
  'API integrations',
  'Practical AI workflows',
]

export function HeroV2() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-4 pb-24 pt-32 md:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[min(96vw,900px)] w-[min(96vw,900px)] -translate-x-1/2 opacity-95">
        <div className="absolute inset-0 rounded-full bg-cyan-300/8 blur-3xl" />
        <Orb hue={0} hoverIntensity={0.5} rotateOnHover forceHoverState={false} />
      </div>

      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center justify-center">
        <div className="pointer-events-none absolute inset-[8%] rounded-full border border-cyan-100/10" />
        <div className="pointer-events-none absolute inset-[14%] rounded-full border border-cyan-100/7 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

        <motion.div
          className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
          initial={{ opacity: 0, transform: 'translateY(22px) scale(0.97)' }}
          animate={{ opacity: 1, transform: 'translateY(0) scale(1)' }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-slate-950/45 px-4 py-2 text-sm font-medium text-cyan-100 shadow-lg shadow-cyan-950/20 backdrop-blur-md"
            initial={{ opacity: 0, transform: 'translateY(10px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ delay: 0.12, duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          >
            <Sparkles size={15} className="text-lime-300" />
            Software for real business operations
          </motion.div>

          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.35 }}
          >
            Nolan Young
          </motion.p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white md:text-7xl lg:text-8xl">
            <motion.span
              className="block"
              initial={{ opacity: 0, transform: 'translateY(16px)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ delay: 0.26, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
            >
              Building the systems
            </motion.span>
            <motion.span
              className="mt-2 block bg-gradient-to-r from-cyan-100 via-cyan-300 to-lime-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, transform: 'translateY(16px)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ delay: 0.34, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
            >
              behind better work.
            </motion.span>
          </h1>

          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-200/80 md:text-xl"
            initial={{ opacity: 0, transform: 'translateY(14px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ delay: 0.44, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          >
            I turn complex business processes into clean software through custom APIs, web platforms, automation,
            analytics, and practical AI integration.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
            initial={{ opacity: 0, transform: 'translateY(12px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ delay: 0.56, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-200 px-6 py-3 font-semibold text-slate-950 shadow-xl shadow-cyan-950/30 transition-[transform,background-color] duration-200 ease-out hover:bg-cyan-100 active:scale-[0.97]"
              href="#work"
            >
              See selected work <ArrowRight size={18} />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-slate-950/30 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-[transform,background-color,border-color] duration-200 ease-out hover:border-cyan-200/40 hover:bg-white/10 active:scale-[0.97]"
              href="#contact"
            >
              Start a conversation
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-[0.16em] text-cyan-50/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {introItems.map((item, index) => (
              <span key={item} className="flex items-center gap-2">
                {index > 0 && <span className="text-cyan-300/40">•</span>}
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute right-[5%] top-[12%] z-20 h-32 w-32 rotate-6 overflow-hidden rounded-3xl border border-white/20 bg-slate-950/70 p-1.5 shadow-2xl shadow-cyan-950/60 sm:h-40 sm:w-40 lg:right-[11%] lg:top-[18%]"
          initial={{ opacity: 0, transform: 'translateY(14px) rotate(12deg) scale(0.92)' }}
          animate={{ opacity: 1, transform: 'translateY(0) rotate(6deg) scale(1)' }}
          transition={{ delay: 0.62, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[1.25rem]">
            <LetterGlitch
              glitchColors={['#06B6D4', '#7cff67', '#F43F5E']}
              glitchSpeed={110}
              centerVignette={false}
              outerVignette={false}
              smooth
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-slate-950/30" />
          </div>
          <span className="absolute -bottom-2 -left-2 rounded-full border border-lime-300/25 bg-slate-950 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-lime-200 shadow-lg">
            Live systems
          </span>
        </motion.div>

        <motion.div
          className="absolute bottom-[11%] left-[7%] hidden items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-xs text-slate-200/80 shadow-xl backdrop-blur-md md:flex lg:left-[13%]"
          initial={{ opacity: 0, transform: 'translateX(-12px)' }}
          animate={{ opacity: 1, transform: 'translateX(0)' }}
          transition={{ delay: 0.78, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_14px_rgba(190,242,100,0.9)]" />
          <span>Designed for momentum</span>
        </motion.div>

        <motion.a
          href="#impact"
          aria-label="Scroll to measured outcomes"
          className="absolute bottom-2 left-1/2 z-10 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full border border-white/15 bg-slate-950/40 text-cyan-100/80 backdrop-blur-md transition-[transform,border-color] duration-200 ease-out hover:-translate-x-1/2 hover:translate-y-1 hover:border-cyan-200/40 active:scale-95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <ArrowDown size={17} />
        </motion.a>
      </div>
    </section>
  )
}
