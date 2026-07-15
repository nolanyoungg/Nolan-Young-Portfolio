import { Download, ExternalLink, Mail, MapPin } from 'lucide-react'
import './Contact.css'

export function Contact() {
  const resumeHref = `${import.meta.env.BASE_URL}Nolan-Young-Resume.pdf`

  return (
    <section id="contact" className="contact">
      <div className="contact__panel">
        <p className="contact__eyebrow">
          Contact
        </p>

        <h2 className="contact__title">
          Build software that reduces friction and creates measurable value.
        </h2>

        <p className="contact__copy">
          Nolan Young is a full-stack software developer and technical operator
          focused on scalable web platforms, custom integrations, automation
          systems, AI-assisted workflows, analytics infrastructure, and
          reliable internal tools.
        </p>

        <div className="contact__links">
          <a
            className="contact__link contact__link--interactive"
            href="mailto:nolanyoung7@yahoo.com"
          >
            <Mail className="contact__icon" size={20} />
            nolanyoung7@yahoo.com
          </a>

          <div className="contact__link">
            <MapPin className="contact__icon" size={20} />
            Queensbury, NY
          </div>

          <a
            className="contact__link contact__link--interactive"
            href="https://github.com/nolanyoungg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="contact__icon" size={20} />
            GitHub — nolanyoungg
          </a>

          <a
          className="contact__link contact__link--interactive"
          href="https://www.linkedin.com/in/nolan-young-b4326329b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="contact__icon" size={20} />
          LinkedIn — Nolan Young
        </a>
        </div>

        <a
          className="contact__resume"
          href={resumeHref}
          type="application/pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Nolan Young's résumé PDF in a new tab"
        >
          <Download size={18} />
          View Resume
        </a>
      </div>
    </section>
  )
}
