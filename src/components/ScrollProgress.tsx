import { motion, useScroll } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return <motion.div className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-sky-300" style={{ scaleX: scrollYProgress }} />
}
