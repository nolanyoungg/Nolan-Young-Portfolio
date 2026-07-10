import { motion } from 'framer-motion'

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.2),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(14,165,233,0.13),transparent_25%),linear-gradient(180deg,#020617_0%,#061527_48%,#020617_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.35)_1px,transparent_1px)] [background-size:44px_44px]" />
      <motion.div
        className="absolute right-[-10rem] top-32 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl"
        animate={{ y: [0, 60, 0], x: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
