import { animate, useInView, useMotionValue, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type AnimatedCounterProps = {
  value: number
  prefix?: string
  suffix?: string
}

export function AnimatedCounter({ value, prefix = '', suffix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const count = useMotionValue(0)
  const [display, setDisplay] = useState('0')
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const unsubscribe = count.on('change', (latest) => {
      setDisplay(latest.toFixed(Number.isInteger(value) ? 0 : 1))
    })

    if (!isInView) return unsubscribe
    if (reduceMotion) {
      count.set(value)
      return unsubscribe
    }

    const controls = animate(count, value, { duration: 1.2, ease: 'easeOut' })
    return () => {
      unsubscribe()
      controls.stop()
    }
  }, [count, isInView, reduceMotion, value])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
