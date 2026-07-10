import { motion } from 'framer-motion'
import { BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { experience } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

export function Experience() {
  return (
    <section id="experience" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Experience"
          title="Technical ownership in real operating environments"
          copy="Nolan’s experience combines software development, web platform ownership, automation, AI workflow design, IT systems, and stakeholder-facing project execution."
        />
        <div className="space-y-5">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.company}`}
              className="rounded-[2rem] border border-white/10 bg-slate-950/62 p-6 backdrop-blur"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <BriefcaseBusiness className="mb-4 text-sky-300" size={26} />
                  <p className="text-sm font-medium text-sky-300">{item.dates}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-slate-300">
                    {item.company} · {item.location}
                  </p>
                  <p className="mt-5 leading-7 text-slate-300">{item.description}</p>
                </div>
                <ul className="grid gap-2 text-sm leading-6 text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div
          className="mt-5 rounded-[2rem] border border-sky-300/15 bg-sky-300/7 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GraduationCap className="mb-4 text-sky-300" size={28} />
          <h3 className="text-2xl font-semibold text-white">Computer Science A.S. - SUNY Adirondack</h3>
          <p className="mt-1 text-slate-300">Queensbury, NY · September 2022 to May 2024</p>
          <p className="mt-4 leading-7 text-slate-300">
            Built a technical foundation in software development, object-oriented programming, data structures, systems
            thinking, and mathematical problem solving through coursework in C++, computer systems, calculus, linear
            algebra, and discrete mathematics.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
