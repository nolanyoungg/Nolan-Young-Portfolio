import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { experience } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

export function Experience() {
  return (
    <section id="experience" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Experience"
          title="Technical leadership with operational context"
          copy="Nolan’s work spans full-stack development, IT leadership, project delivery, client communication, and practical business execution."
        />
        <div className="relative space-y-6 before:absolute before:bottom-0 before:left-5 before:top-0 before:w-px before:bg-blue-300/18 md:before:left-1/2">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.company}`}
              className={`relative grid gap-4 md:grid-cols-2 ${index % 2 === 1 ? 'md:[&>div]:col-start-2' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <div className="ml-12 rounded-3xl border border-blue-300/14 bg-slate-950/62 p-6 backdrop-blur md:ml-0">
                <span className="absolute left-2 top-6 grid h-8 w-8 place-items-center rounded-full bg-blue-500 text-white md:left-1/2 md:-translate-x-1/2">
                  <Briefcase size={16} />
                </span>
                <p className="text-sm font-medium text-cyan-300">{item.dates}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
                <p className="mt-1 text-slate-300">{item.company}</p>
                <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-cyan-300/14 bg-cyan-300/8 p-6">
          <div className="flex items-start gap-4">
            <GraduationCap className="shrink-0 text-cyan-300" size={26} />
            <div>
              <h3 className="text-xl font-semibold text-white">Computer Science A.S. - SUNY Adirondack</h3>
              <p className="mt-1 text-slate-300">September 2022 to May 2024</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Relevant coursework: Data Structures and Objects in C++, Computer Systems, Calculus I and II, Linear Algebra, Discrete Mathematics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
