import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2, Globe, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { projects, type PortfolioProject } from "../../data/projects";
import "./Projects.css";

const hidden = { opacity: 0, y: -6, filter: "blur(6px)" };
const visible = { opacity: 1, y: 0, filter: "blur(0px)" };

function ProjectCard({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(videoRef, { amount: 0.1 });
  const reduceMotion = useReducedMotion();
  const [playback, setPlayback] = useState<"auto" | "play" | "pause">("auto");
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const videoUrl = `${import.meta.env.BASE_URL}${project.video}`;
  const projectUrl = project.website ?? videoUrl;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updatePlayback = () => {
      const wantsPlayback =
        playback === "play" || (playback === "auto" && !reduceMotion);
      if (inView && wantsPlayback && !document.hidden) {
        // Autoplay can be blocked by browser or device preferences.
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    updatePlayback();
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      document.removeEventListener("visibilitychange", updatePlayback);
      video.pause();
    };
  }, [inView, reduceMotion, playback]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setPlayback("play");
      void video.play().catch(() => {});
    } else {
      setPlayback("pause");
      video.pause();
    }
  };

  return (
    <motion.article
      className="projects__card"
      initial={reduceMotion ? false : hidden}
      whileInView={visible}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay: 0.04 + index * 0.05,
        ease: "easeOut",
      }}
      aria-labelledby={`project-${project.id}`}
    >
      <div className="projects__media">
        <a
          className="projects__preview"
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} ${project.website ? "website" : "video preview"}`}
        >
          <video
            ref={videoRef}
            src={videoUrl}
            poster={`${import.meta.env.BASE_URL}${project.poster}`}
            loop
            muted
            playsInline
            preload="none"
            aria-hidden="true"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setFailed(true)}
          />
        </a>
        <div className="projects__links">
          {project.website ? (
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              <Globe /> Website
              <span className="projects__sr-only">: {project.title}</span>
            </a>
          ) : (
            <button type="button" disabled title="Website coming soon">
              <Globe /> Website
              <span className="projects__sr-only">: {project.title}</span>
            </button>
          )}
          {project.source ? (
            <a href={project.source} target="_blank" rel="noopener noreferrer">
              <Code2 /> Source
              <span className="projects__sr-only">: {project.title}</span>
            </a>
          ) : (
            <button type="button" disabled title="Source coming soon">
              <Code2 /> Source
              <span className="projects__sr-only">: {project.title}</span>
            </button>
          )}
        </div>
        {!failed && (
          <button
            className="projects__playback"
            type="button"
            onClick={togglePlayback}
            aria-label={`${playing ? "Pause" : "Play"} ${project.title} preview`}
          >
            {playing ? <Pause /> : <Play />}
          </button>
        )}
        {failed && (
          <span className="projects__media-status">Preview unavailable</span>
        )}
      </div>
      <div className="projects__body">
        <div className="projects__card-heading">
          <div>
            <h3 id={`project-${project.id}`}>{project.title}</h3>
            <p className="projects__date">{project.period}</p>
          </div>
          <a
            className="projects__open"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
          >
            <ArrowUpRight size={16} />
          </a>
        </div>
        <p className="projects__description">{project.description}</p>
        <ul
          className="projects__tags"
          aria-label={`${project.title} technologies`}
        >
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // This target mounts after the app's splash, so restore direct anchor visits.
    if (window.location.hash === "#projects") {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  return (
    <section
      id="projects"
      className="projects"
      aria-labelledby="projects-title"
    >
      <div className="projects__inner">
        <motion.header
          className="projects__header"
          initial={reduceMotion ? false : hidden}
          whileInView={visible}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.04, ease: "easeOut" }}
        >
          <div className="projects__eyebrow">
            <span>My Projects</span>
          </div>
          <div className="projects__intro">
            <h2 id="projects-title">Check out my latest work</h2>
            <p>
              From storefronts to tools that simplify everyday work. Here are
              four sample concepts exploring web development, automation,
              analytics, and AI.
            </p>
          </div>
        </motion.header>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
