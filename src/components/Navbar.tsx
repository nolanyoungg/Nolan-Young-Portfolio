import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems } from '../data/portfolio'

export function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    try {
      localStorage.setItem('nolan-portfolio-theme', theme)
    } catch {
      // Theme switching still works when storage is unavailable.
    }
  }, [theme])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-34% 0px -56% 0px', threshold: 0.05 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const links = navItems.map((item) => {
    const id = item.href.slice(1)
    return (
      <a
        key={item.href}
        href={item.href}
        onClick={() => setOpen(false)}
        className={`rounded-full px-3 py-2 text-sm transition ${
          active === id ? 'nav-link-active bg-sky-400/12 text-sky-100 ring-1 ring-sky-300/20' : 'nav-link text-slate-300 hover:text-white'
        }`}
      >
        {item.label}
      </a>
    )
  })

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="theme-nav mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/78 px-4 py-3 shadow-2xl shadow-slate-950/50 backdrop-blur-xl">
        <a href="#home" className="theme-strong flex items-center gap-3 font-semibold text-white">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-sky-300 text-slate-950">NY</span>
          <span className="text-sm">Nolan Young</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {links}
          <button
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-pressed={theme === 'light'}
            className="theme-toggle ml-1 grid h-9 w-9 place-items-center rounded-full border border-white/15 text-slate-200 transition-[transform,background-color,border-color,color] duration-150 active:scale-[0.97]"
            onClick={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-pressed={theme === 'light'}
            className="theme-toggle grid h-10 w-10 place-items-center rounded-full border border-white/15 text-slate-200 transition-[transform,background-color,border-color,color] duration-150 active:scale-[0.97]"
            onClick={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="theme-toggle grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="theme-nav-menu mx-auto mt-3 grid max-w-7xl gap-1 rounded-3xl border border-white/10 bg-slate-950/94 p-3 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {links}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
