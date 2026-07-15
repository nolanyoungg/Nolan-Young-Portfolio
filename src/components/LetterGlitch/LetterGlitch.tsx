import { useEffect, useRef } from 'react'
import './LetterGlitch.css'

type LetterGlitchProps = {
  glitchColors?: string[]
  className?: string
  glitchSpeed?: number
  centerVignette?: boolean
  outerVignette?: boolean
  smooth?: boolean
  characters?: string
}

type GlitchLetter = {
  char: string
  color: string
  targetColor: string
  colorProgress: number
}

type RgbColor = {
  r: number
  g: number
  b: number
}

export function LetterGlitch({
  glitchColors = ['#2b4539', '#61dca3', '#61b3dc'],
  className = '',
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = true,
  smooth = true,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789',
}: LetterGlitchProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const letters = useRef<GlitchLetter[]>([])
  const grid = useRef({ columns: 0, rows: 0 })
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const lastGlitchTime = useRef(0)

  const lettersAndSymbols = Array.from(characters)
  const fontSize = 16
  const charWidth = 10
  const charHeight = 20

  const getRandomChar = () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)] ?? ''
  const getRandomColor = () => glitchColors[Math.floor(Math.random() * glitchColors.length)] ?? '#61dca3'

  const hexToRgb = (hex: string): RgbColor | null => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    const normalizedHex = hex.replace(shorthandRegex, (_match, r: string, g: string, b: string) => r + r + g + g + b + b)
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(normalizedHex)

    return result
      ? {
          r: parseInt(result[1] ?? '0', 16),
          g: parseInt(result[2] ?? '0', 16),
          b: parseInt(result[3] ?? '0', 16),
        }
      : null
  }

  const interpolateColor = (start: RgbColor, end: RgbColor, factor: number) => {
    const result = {
      r: Math.round(start.r + (end.r - start.r) * factor),
      g: Math.round(start.g + (end.g - start.g) * factor),
      b: Math.round(start.b + (end.b - start.b) * factor),
    }
    return `rgb(${result.r}, ${result.g}, ${result.b})`
  }

  const calculateGrid = (width: number, height: number) => ({
    columns: Math.ceil(width / charWidth),
    rows: Math.ceil(height / charHeight),
  })

  const initializeLetters = (columns: number, rows: number) => {
    grid.current = { columns, rows }
    letters.current = Array.from({ length: columns * rows }, () => ({
      char: getRandomChar(),
      color: getRandomColor(),
      targetColor: getRandomColor(),
      colorProgress: 1,
    }))
  }

  const drawLetters = () => {
    const canvas = canvasRef.current
    if (!context.current || !canvas || letters.current.length === 0) return

    const { width, height } = canvas.getBoundingClientRect()
    context.current.clearRect(0, 0, width, height)
    context.current.font = `${fontSize}px monospace`
    context.current.textBaseline = 'top'

    letters.current.forEach((letter, index) => {
      const x = (index % grid.current.columns) * charWidth
      const y = Math.floor(index / grid.current.columns) * charHeight
      context.current!.fillStyle = letter.color
      context.current!.fillText(letter.char, x, y)
    })
  }

  const resizeCanvas = () => {
    const canvas = canvasRef.current
    const parent = canvas?.parentElement
    if (!canvas || !parent) return

    const dpr = window.devicePixelRatio || 1
    const rect = parent.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`
    context.current?.setTransform(dpr, 0, 0, dpr, 0, 0)

    const { columns, rows } = calculateGrid(rect.width, rect.height)
    initializeLetters(columns, rows)
    drawLetters()
  }

  const updateLetters = () => {
    if (letters.current.length === 0) return

    const updateCount = Math.max(1, Math.floor(letters.current.length * 0.05))
    for (let i = 0; i < updateCount; i += 1) {
      const index = Math.floor(Math.random() * letters.current.length)
      const letter = letters.current[index]
      if (!letter) continue

      letter.char = getRandomChar()
      letter.targetColor = getRandomColor()

      if (!smooth) {
        letter.color = letter.targetColor
        letter.colorProgress = 1
      } else {
        letter.colorProgress = 0
      }
    }
  }

  const handleSmoothTransitions = () => {
    let needsRedraw = false

    letters.current.forEach((letter) => {
      if (letter.colorProgress < 1) {
        letter.colorProgress = Math.min(1, letter.colorProgress + 0.05)
        const startRgb = hexToRgb(letter.color)
        const endRgb = hexToRgb(letter.targetColor)
        if (startRgb && endRgb) {
          letter.color = interpolateColor(startRgb, endRgb, letter.colorProgress)
          needsRedraw = true
        }
      }
    })

    if (needsRedraw) drawLetters()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    context.current = canvas.getContext('2d')
    lastGlitchTime.current = Date.now()
    resizeCanvas()

    const animate = () => {
      const now = Date.now()
      if (now - lastGlitchTime.current >= glitchSpeed) {
        updateLetters()
        drawLetters()
        lastGlitchTime.current = now
      }

      if (smooth) handleSmoothTransitions()
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    let resizeTimeout: number | undefined
    const handleResize = () => {
      window.clearTimeout(resizeTimeout)
      resizeTimeout = window.setTimeout(() => {
        if (animationRef.current !== null) cancelAnimationFrame(animationRef.current)
        resizeCanvas()
        animate()
      }, 100)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current)
      window.clearTimeout(resizeTimeout)
      window.removeEventListener('resize', handleResize)
    }
    // The React Bits implementation intentionally restarts when timing behavior changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [glitchSpeed, smooth])

  return (
    <div className={`letter-glitch ${className}`}>
      <canvas ref={canvasRef} className="letter-glitch__canvas" />
      {outerVignette && <div className="letter-glitch__outer-vignette" />}
      {centerVignette && <div className="letter-glitch__center-vignette" />}
    </div>
  )
}
