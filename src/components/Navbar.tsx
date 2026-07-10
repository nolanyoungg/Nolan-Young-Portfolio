import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems } from '../data/portfolio'

export function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

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
          active === id ? 'bg-sky-400/12 text-sky-100 ring-1 ring-sky-300/20' : 'text-slate-300 hover:text-white'
        }`}
      >
        {item.label}
      </a>
    )
  })

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/78 px-4 py-3 shadow-2xl shadow-slate-950/50 backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-3 font-semibold text-white">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-sky-300 text-slate-950">NY</span>
          <span className="text-sm">Nolan Young</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">{links}</div>
        <button
          type="button"
          aria-label="Toggle navigation"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mx-auto mt-3 grid max-w-7xl gap-1 rounded-3xl border border-white/10 bg-slate-950/94 p-3 backdrop-blur-xl lg:hidden"
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
