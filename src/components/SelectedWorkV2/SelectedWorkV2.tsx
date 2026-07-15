import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { caseStudies } from "../../data/portfolio";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import "./SelectedWorkV2.css";

export function SelectedWorkV2() {
  return (
    <section id="work" className="selected-work-v2">
      <div className="selected-work-v2__inner">
        <SectionHeader
          eyebrow="Selected work"
          title="Case studies across software, platforms, automation, AI, and infrastructure"
          copy="Each project is framed around the real operating problem, the technical solution, and what the work demonstrates."
        />
        <div className="selected-work-v2__list">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              className="selected-work-v2__card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ delay: index * 0.04 }}
            >
              <div>
                <p className="selected-work-v2__category">{study.category}</p>
                <h3 className="selected-work-v2__title">{study.title}</h3>
                <div className="selected-work-v2__problem">
                  <p className="selected-work-v2__problem-label">Problem</p>
                  <p className="selected-work-v2__problem-copy">
                    {study.problem}
                  </p>
                </div>
              </div>
              <div>
                <p className="selected-work-v2__solution">{study.solution}</p>
                <ul className="selected-work-v2__proof">
                  {study.proof.map((item) => (
                    <li key={item} className="selected-work-v2__proof-item">
                      <CheckCircle2
                        className="selected-work-v2__check"
                        size={17}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="selected-work-v2__tags">
                  {study.tags.map((tag) => (
                    <span key={tag} className="selected-work-v2__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
