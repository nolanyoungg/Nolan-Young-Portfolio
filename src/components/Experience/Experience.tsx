import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "../../data/portfolio";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import "./Experience.css";

export function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__inner">
        <SectionHeader
          eyebrow="Experience"
          title="Technical leadership with operational context"
          copy="Nolan’s work spans full-stack development, IT leadership, project delivery, client communication, and practical business execution."
        />
        <div className="experience__timeline">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.company}`}
              className={`experience__entry ${index % 2 === 1 ? "experience__entry--right" : ""}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="experience__card">
                <span className="experience__marker">
                  <Briefcase size={16} />
                </span>
                <p className="experience__dates">{item.dates}</p>
                <h3 className="experience__title">{item.role}</h3>
                <p className="experience__company">{item.company}</p>
                <ul className="experience__bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="experience__education">
          <div className="experience__education-inner">
            <GraduationCap className="experience__education-icon" size={26} />
            <div>
              <h3 className="experience__education-title">
                Computer Science A.S. - SUNY Adirondack
              </h3>
              <p className="experience__education-date">
                September 2022 to May 2024
              </p>
              <p className="experience__education-copy">
                Relevant coursework: Data Structures and Objects in C++,
                Computer Systems, Calculus I and II, Linear Algebra, Discrete
                Mathematics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
