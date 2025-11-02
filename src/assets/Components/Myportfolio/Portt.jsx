import { useEffect } from "react";

import "./Port.css"
import Projectcardd from "./Projectcardd";

export default function Myportfolio (){

  useEffect(() => {
    document.title = "My Portfolio";
  }, []);

  const projects = [
    {
      id: 1,
      title: "Weather App",
      description:
        "Responsive weather app using Open-Meteo API. Search locations or use geolocation.",
      tags: ["React", "API", "CSS"],
      link: "#",
    },
    {
      id: 2,
      title: "Task Manager",
      description:
        "Small productivity app with localStorage and drag/drop sorting.",
      tags: ["React", "LocalStorage"],
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Site",
      description:
        "This portfolio layout with animated cards and responsive design.",
      tags: ["HTML", "CSS", "Animations"],
      link: "#",
    },
  ];

  return (
    <main className="pp-root">
      <header className="pp-hero">
        <div className="pp-hero-inner">
          <h1 className="pp-name">Your Name</h1>
          <p className="pp-title">
            Frontend Developer — React · UI · Animations
          </p>
          <div className="pp-cta">
            <a className="btn primary" href="#projects">
              View Projects
            </a>
            <a className="btn ghost" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <div className="pp-hero-decor" aria-hidden="true" />
      </header>

      <section id="about" className="pp-section about">
        <h2 className="section-title">About</h2>
        <p className="about-text">
          I build interactive user interfaces and small apps using React. I
          focus on clean components, accessible markup and smooth
          micro-interactions.
        </p>
      </section>

      <section id="projects" className="pp-section projects">
        <h2 className="section-title">Selected Projects</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Projectcardd key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      <section id="contact" className="pp-section contact">
        <h2 className="section-title">Contact</h2>
        <p>
          Say hi — <a href="mailto:you@example.com">you@example.com</a>
        </p>
      </section>

      <footer className="pp-footer">
        <small>© {new Date().getFullYear()} Your Name</small>
      </footer>
    </main>
  );
}