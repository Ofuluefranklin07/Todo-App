import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  User,
  MessageSquare,
  ArrowDown,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task manager with real-time updates and team features.",
      tags: ["Vue.js", "Firebase", "Tailwind"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather app with forecasts, maps, and location-based alerts.",
      tags: ["React", "API", "Charts"],
      link: "#",
    },
    {
      title: "Portfolio CMS",
      description:
        "Content management system for portfolios with drag-and-drop builder.",
      tags: ["Next.js", "PostgreSQL", "AWS"],
      link: "#",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "Jest"] },
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrollY > 50
            ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-purple-500/10"
            : "bg-transparent"
        } border-b border-purple-500/20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-purple-400 transition-all duration-300 transform hover:scale-110 ${
                    activeSection === item.toLowerCase()
                      ? "text-purple-400"
                      : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden transform transition-transform hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}>
          <div className="bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-3">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-purple-400 transition-all duration-300 hover:translate-x-2">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8 animate-bounce">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-12 shadow-lg shadow-purple-500/50">
                <User size={64} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              John Developer
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in"
              style={{
                animation: "fadeIn 1s ease-in forwards",
                animationDelay: "0.3s",
                opacity: 0,
              }}>
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <p
              className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in"
              style={{
                animation: "fadeIn 1s ease-in forwards",
                animationDelay: "0.6s",
                opacity: 0,
              }}>
              Crafting beautiful, functional web experiences with modern
              technologies. Passionate about clean code and user-centered
              design.
            </p>
            <div
              className="flex justify-center gap-4 animate-fade-in"
              style={{
                animation: "fadeIn 1s ease-in forwards",
                animationDelay: "0.9s",
                opacity: 0,
              }}>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                View My Work
              </button>
              <button className="border-2 border-purple-500 px-8 py-3 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Contact Me
              </button>
            </div>
            <div className="mt-12 animate-bounce">
              <ArrowDown className="mx-auto text-purple-400" size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-20 px-4 bg-slate-900/50 relative"
        id="about-section"
        data-animate>
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 transform ${
              isVisible["about-section"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible["about-section"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}>
              <p className="text-gray-300 text-lg mb-6">
                I'm a passionate full-stack developer with 5+ years of
                experience building web applications. I love turning complex
                problems into simple, beautiful solutions.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source, or sharing knowledge with the
                developer community.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition-all duration-300 transform hover:scale-110 hover:rotate-6">
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition-all duration-300 transform hover:scale-110 hover:rotate-6">
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition-all duration-300 transform hover:scale-110 hover:rotate-6">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div
              className={`space-y-6 transition-all duration-1000 transform ${
                isVisible["about-section"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "0.2s" }}>
              {skills.map((skillGroup, index) => (
                <div
                  key={skillGroup.category}
                  className="transition-all duration-500 transform hover:translate-x-2"
                  style={{ transitionDelay: `${index * 0.1}s` }}>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-purple-500/20 rounded-full text-sm border border-purple-500/30 transition-all duration-300 hover:bg-purple-500/30 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
                        style={{
                          animation: `fadeIn 0.5s ease-in forwards`,
                          animationDelay: `${idx * 0.05}s`,
                          opacity: 0,
                        }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="py-20 px-4 relative"
        id="projects-section"
        data-animate>
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 transform ${
              isVisible["projects-section"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 hover:scale-105 ${
                  isVisible["projects-section"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-start mb-4">
                  <Code
                    className="text-purple-400 transition-transform duration-300 hover:rotate-12"
                    size={32}
                  />
                  <a
                    href={project.link}
                    className="text-purple-400 hover:text-purple-300 transition-all duration-300 transform hover:scale-125">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-sm transition-all duration-300 hover:bg-purple-500/30 hover:scale-110">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-20 px-4 bg-slate-900/50 relative"
        id="contact-section"
        data-animate>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={`text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 transform ${
              isVisible["contact-section"]
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
            }`}>
            Let's Work Together
          </h2>
          <p
            className={`text-gray-300 text-lg mb-12 transition-all duration-1000 transform ${
              isVisible["contact-section"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}>
            Have a project in mind? I'm always open to discussing new
            opportunities and creative ideas.
          </p>
          <div
            className={`bg-slate-800/50 rounded-xl p-8 border border-purple-500/20 transition-all duration-1000 transform ${
              isVisible["contact-section"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.4s" }}>
            <div className="space-y-6">
              <div className="transition-all duration-300 transform hover:scale-105">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/20 transition-all duration-300"
                />
              </div>
              <div className="transition-all duration-300 transform hover:scale-105">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/20 transition-all duration-300"
                />
              </div>
              <div className="transition-all duration-300 transform hover:scale-105">
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/20 transition-all duration-300"></textarea>
              </div>
              <button
                onClick={(e) => e.preventDefault()}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 John Developer. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
