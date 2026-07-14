import { Download, ExternalLink, Mail, MapPin } from 'lucide-react'

export function Contact() {
  const resumeHref = `${import.meta.env.BASE_URL}Nolan-Young-Resume.pdf`

  return (
    <section id="contact" className="px-4 py-24">
      <div className="theme-contact-surface mx-auto max-w-5xl rounded-[2rem] border border-sky-300/16 bg-gradient-to-br from-slate-950/92 via-blue-950/42 to-slate-950/92 p-8 shadow-[0_0_90px_rgba(14,165,233,0.12)] backdrop-blur md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Build software that reduces friction and creates measurable value.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Nolan Young is a full-stack software developer and technical operator
          focused on scalable web platforms, custom integrations, automation
          systems, AI-assisted workflows, analytics infrastructure, and
          reliable internal tools.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a
            className="theme-subtle-surface flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-100 transition hover:border-sky-300/35"
            href="mailto:nolanyoung7@yahoo.com"
          >
            <Mail className="text-sky-300" size={20} />
            nolanyoung7@yahoo.com
          </a>

          <div className="theme-subtle-surface flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-100">
            <MapPin className="text-sky-300" size={20} />
            Queensbury, NY
          </div>

          <a
            className="theme-subtle-surface flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-100 transition hover:border-sky-300/35"
            href="https://github.com/nolanyoungg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="text-sky-300" size={20} />
            GitHub — nolanyoungg
          </a>

          <a
          className="theme-subtle-surface flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-100 transition hover:border-sky-300/35"
          href="https://www.linkedin.com/in/nolan-young-b4326329b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="text-sky-300" size={20} />
          LinkedIn — Nolan Young
        </a>
        </div>

        <a
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-sky-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-200"
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
