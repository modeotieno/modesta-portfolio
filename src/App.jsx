import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaCode,
  FaUsers,
  FaBookOpen,
  FaMapMarkerAlt,
  FaClock,
  FaHeart,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaMobileAlt,
  FaDatabase,
  FaGitAlt,
  FaUser,
  FaServer,
  FaDocker,
} from "react-icons/fa";

import "./App.css";

/* =========================================================
   HEADER
========================================================= */

function Header() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          MO<span>.</span>
        </Link>

        <nav className="nav-links">
          <Link to="/" target="_blank">
            Home
          </Link>

          <Link to="/about" target="_blank">
            About
          </Link>

          <Link to="/skills" target="_blank">
            Skills
          </Link>

          <Link to="/projects" target="_blank">
            Projects
          </Link>

          <Link to="/experience" target="_blank">
            Experience
          </Link>

          <Link to="/contact" target="_blank">
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
}


/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-info">

          <div className="footer-logo">
            MO<span>.</span>
          </div>

          <p>
            Building secure, practical, and user-focused
            digital experiences.
          </p>

          <span className="footer-tagline">
            CODE · CREATE · IMPACT
          </span>

        </div>


        <div className="footer-cv">

          <p>
            Want to know more about my experience?
          </p>

          <a
            href="/Modesta-Otieno-CV.pdf"
            download
            className="cv-button"
          >
            Download CV
            <FaDownload />
          </a>

        </div>


        <div className="footer-socials">

          <a
            href="https://github.com/modeotieno"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/modesta-otieno-0551b4408/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:modesta@example.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="copyright">
        © 2026 Modesta Otieno. All rights reserved.
      </div>

    </footer>
  );
}


/* =========================================================
   PAGE LAYOUT
========================================================= */

function PageLayout({ children }) {
  return (
    <div className="portfolio">

      <Header />

      <main>
        {children}
      </main>

      <Footer />

    </div>
  );
}


/* =========================================================
   HOME
========================================================= */

function Home() {
  return (
    <PageLayout>

      {/* HERO */}

      <section className="hero">

        {/* LEFT */}

        <div className="hero-content">

          <p className="eyebrow">
            SOFTWARE DEVELOPER
          </p>

          <h1>
            Hi, I'm
            <br />
            <span>Modesta Otieno</span>
          </h1>

          <p className="hero-description">
            Software developer focused on building secure,
            practical, and user-focused applications with Go,
            React, and Flutter.
          </p>

          <div className="hero-buttons">

            <Link
              to="/projects"
              target="_blank"
              className="btn primary"
            >
              View My Projects
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              target="_blank"
              className="btn secondary"
            >
              Let's Connect
            </Link>

          </div>


          <div className="social-links">

            <a
              href="https://github.com/modeotieno"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/modesta-otieno-0551b4408/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:modesta@example.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>


        {/* RIGHT — PHOTO */}

        <div className="hero-visual">

          <div className="hero-photo-area">

            <div className="photo-decoration"></div>

            <div className="photo-placeholder">

              <div className="photo-icon">
                <FaUser />
              </div>

              <h3>
                Your Photo Here
              </h3>

              <p>
                Add your professional photo later
              </p>

            </div>

            <div className="hero-side-text">
              CODE
              <br />
              CREATE
              <br />
              IMPACT
            </div>

          </div>

        </div>

      </section>


      {/* ABOUT PREVIEW */}

      <section className="home-section">

        <div className="section-container">

          <p className="section-label">
            01 — ABOUT
          </p>

          <h2>
            Building with purpose.
          </h2>

          <p className="section-description">
            I'm a software developer with a background in ICT,
            passionate about learning, building, and solving
            real-world problems through technology.
          </p>

          <Link
            to="/about"
            target="_blank"
            className="text-link"
          >
            Learn more about me
            <FaArrowRight />
          </Link>

        </div>

      </section>


      {/* SKILLS PREVIEW */}

      <section className="home-section">

        <div className="section-container">

          <p className="section-label">
            02 — SKILLS
          </p>

          <h2>
            My toolkit.
          </h2>

          <div className="skills-preview">

            <SkillCard
              icon={<FaCode />}
              title="Go"
              subtitle="Backend Development"
            />

            <SkillCard
              icon={<FaLaptopCode />}
              title="React"
              subtitle="Frontend Development"
            />

            <SkillCard
              icon={<FaMobileAlt />}
              title="Flutter"
              subtitle="Mobile Development"
            />

            <SkillCard
              icon={<FaDatabase />}
              title="PostgreSQL"
              subtitle="Database"
            />

            <SkillCard
              icon={<FaDocker />}
              title="Docker"
              subtitle="Containers"
            />

            <SkillCard
              icon={<FaGitAlt />}
              title="Git"
              subtitle="Version Control"
            />

          </div>

          <Link
            to="/skills"
            target="_blank"
            className="text-link"
          >
            View all skills
            <FaArrowRight />
          </Link>

        </div>

      </section>


      {/* PROJECTS PREVIEW */}

      <section className="home-section">

        <div className="section-container">

          <p className="section-label">
            03 — PROJECTS
          </p>

          <h2>
            Things I've built.
          </h2>

          <div className="projects-preview">

            <ProjectCard
              number="01"
              name="SEIS"
              description="Smart Electoral Integrity System"
            />

            <ProjectCard
              number="02"
              name="AXIS"
              description="Smart Irrigation & Water Management"
            />

            <ProjectCard
              number="03"
              name="Zone01"
              description="Software development projects"
            />

          </div>

          <Link
            to="/projects"
            target="_blank"
            className="text-link"
          >
            View all projects
            <FaArrowRight />
          </Link>

        </div>

      </section>


      {/* EXPERIENCE PREVIEW */}

      <section className="home-section">

        <div className="section-container">

          <p className="section-label">
            04 — EXPERIENCE
          </p>

          <h2>
            My journey.
          </h2>

          <p className="section-description">
            From ICT support and data operations to software
            development, my experience has given me practical
            exposure to technology, troubleshooting, teamwork,
            and building software solutions.
          </p>

          <Link
            to="/experience"
            target="_blank"
            className="text-link"
          >
            View my experience
            <FaArrowRight />
          </Link>

        </div>

      </section>


      {/* CONTACT PREVIEW */}

      <section className="home-section contact-preview">

        <div className="section-container">

          <p className="section-label">
            05 — CONTACT
          </p>

          <h2>
            Let's build something.
          </h2>

          <p className="section-description">
            Have an idea, project, or opportunity?
            I'd love to connect and learn more about it.
          </p>

          <Link
            to="/contact"
            target="_blank"
            className="btn primary"
          >
            Get In Touch
            <FaArrowRight />
          </Link>

        </div>

      </section>

    </PageLayout>
  );
}


/* =========================================================
   ABOUT
========================================================= */

function About() {
  return (
    <PageLayout>

      <section className="page-header">

        <p className="section-label">
          01 — ABOUT
        </p>

        <h1>
          About Me
        </h1>

        <p>
          A little about my journey into software development.
        </p>

      </section>


      <section className="about-section">

        {/* LEFT PHOTO */}

        <div className="about-photo">

          <div className="about-photo-placeholder">

            <div className="photo-icon">
              <FaUser />
            </div>

            <h3>
              Your Photo Here
            </h3>

            <p>
              Add your professional photo later
            </p>

          </div>

        </div>


        {/* RIGHT CONTENT */}

        <div className="about-content">

          <p className="section-label">
            SOFTWARE DEVELOPER
          </p>

          <h2>
            Building with purpose.
          </h2>

          <p>
            I'm a software developer with a background in ICT,
            passionate about learning, building, and solving
            real-world problems through technology.
          </p>

          <p>
            My journey combines technical support, software
            development, and hands-on project experience. I enjoy
            understanding how systems work and turning ideas into
            practical applications.
          </p>

          <p>
            I'm currently developing my skills in Go, React,
            Flutter, databases, APIs, Git, Linux, and modern
            software development practices.
          </p>


          <div className="about-highlights">

            <div>
              <strong>01</strong>
              <span>Learn</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Build</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Impact</span>
            </div>

          </div>

        </div>

      </section>

    </PageLayout>
  );
}


/* =========================================================
   SKILLS
========================================================= */

function Skills() {
  const skills = [
    {
      icon: <FaCode />,
      title: "Go",
      description:
        "Backend development, HTTP servers, APIs and application logic.",
    },
    {
      icon: <FaLaptopCode />,
      title: "React",
      description:
        "Building responsive and interactive web interfaces.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Flutter",
      description:
        "Developing cross-platform mobile applications.",
    },
    {
      icon: <FaDatabase />,
      title: "PostgreSQL",
      description:
        "Working with relational databases and application data.",
    },
    {
      icon: <FaDocker />,
      title: "Docker",
      description:
        "Containerizing applications and development environments.",
    },
    {
      icon: <FaGitAlt />,
      title: "Git & GitHub",
      description:
        "Version control, collaboration and project management.",
    },
    {
      icon: <FaServer />,
      title: "APIs",
      description:
        "Building and integrating backend services and REST APIs.",
    },
    {
      icon: <FaCode />,
      title: "JavaScript",
      description:
        "Frontend development and interactive web applications.",
    },
  ];

  return (
    <PageLayout>

      <section className="page-header">

        <p className="section-label">
          02 — SKILLS
        </p>

        <h1>
          My Toolkit
        </h1>

        <p>
          Technologies and tools I use to build software.
        </p>

      </section>


      <section className="skills-grid">

        {skills.map((skill) => (
          <div className="skill-card" key={skill.title}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>
              {skill.title}
            </h3>

            <p>
              {skill.description}
            </p>

          </div>
        ))}

      </section>

    </PageLayout>
  );
}


/* =========================================================
   PROJECTS
========================================================= */

function Projects() {
  return (
    <PageLayout>

      <section className="page-header">

        <p className="section-label">
          03 — PROJECTS
        </p>

        <h1>
          Things I've Built
        </h1>

        <p>
          A selection of projects I've worked on while learning
          and building software.
        </p>

      </section>


      <section className="project-list">


        {/* SEIS */}

        <article className="project-card-large">

          <div className="project-number">
            01
          </div>

          <div className="project-content">

            <span className="project-category">
              FULL-STACK APPLICATION
            </span>

            <h2>
              Smart Electoral Integrity System
            </h2>

            <p>
              A secure demonstration platform that showcases
              transparent, verifiable and trustworthy digital
              elections.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Go</span>
              <span>PostgreSQL</span>
              <span>Docker</span>
            </div>

            <a
              href="https://github.com/modeotieno/smart-electoral-integrity-system"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub
              <FaExternalLinkAlt />
            </a>

          </div>

        </article>


        {/* AXIS */}

        <article className="project-card-large">

          <div className="project-number">
            02
          </div>

          <div className="project-content">

            <span className="project-category">
              HACKATHON PROJECT
            </span>

            <h2>
              AXIS Smart Irrigation
            </h2>

            <p>
              A smart irrigation and water management platform
              designed to help smallholder farmers make informed
              irrigation decisions.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>APIs</span>
              <span>AgriTech</span>
            </div>

            <a
              href="https://axis-irrigation.fly.dev/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Live Project
              <FaExternalLinkAlt />
            </a>

          </div>

        </article>


        {/* ZONE01 */}

        <article className="project-card-large">

          <div className="project-number">
            03
          </div>

          <div className="project-content">

            <span className="project-category">
              SOFTWARE DEVELOPMENT
            </span>

            <h2>
              Zone01 Projects
            </h2>

            <p>
              Hands-on software development projects involving
              Go, algorithms, APIs, data structures, backend
              development and problem solving.
            </p>

            <div className="project-tech">
              <span>Go</span>
              <span>Git</span>
              <span>Linux</span>
              <span>Algorithms</span>
            </div>

            <a
              href="https://github.com/modeotieno"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View GitHub
              <FaExternalLinkAlt />
            </a>

          </div>

        </article>

      </section>

    </PageLayout>
  );
}


/* =========================================================
   EXPERIENCE
========================================================= */

function Experience() {
  return (
    <PageLayout>

      <section className="page-header">

        <p className="section-label">
          04 — EXPERIENCE
        </p>

        <h1>
          My Journey
        </h1>

        <p>
          Experience, learning and professional development.
        </p>

      </section>


      <section className="timeline">


        {/* HUDUMA */}

        <div className="timeline-item">

          <div className="timeline-marker">
            01
          </div>

          <div className="timeline-content">

            <span className="timeline-date">
              MAR 2026 — MAY 2026
            </span>

            <h2>
              ICT Support & Data Operations
            </h2>

            <h3>
              Huduma Kenya
            </h3>

            <p>
              Provided technical support and worked with
              technology systems in a practical service
              environment.
            </p>

            <ul>
              <li>
                Technical troubleshooting and support
              </li>

              <li>
                Network configuration
              </li>

              <li>
                Hardware troubleshooting and repair
              </li>

              <li>
                Data operations and technical assistance
              </li>
            </ul>

          </div>

        </div>


        {/* ZONE01 */}

        <div className="timeline-item">

          <div className="timeline-marker">
            02
          </div>

          <div className="timeline-content">

            <span className="timeline-date">
              CURRENT LEARNING JOURNEY
            </span>

            <h2>
              Software Development Apprentice
            </h2>

            <h3>
              Zone01 Kisumu
            </h3>

            <p>
              Developing practical software engineering skills
              through hands-on projects, collaboration,
              problem solving and peer learning.
            </p>

            <ul>
              <li>
                Go programming
              </li>

              <li>
                Algorithms and problem solving
              </li>

              <li>
                Git and collaborative development
              </li>

              <li>
                Backend and web development
              </li>

            </ul>

          </div>

        </div>

      </section>

    </PageLayout>
  );
}


/* =========================================================
   CONTACT
========================================================= */

function Contact() {
  return (
    <PageLayout>

      <section className="page-header">

        <p className="section-label">
          05 — CONTACT
        </p>

        <h1>
          Let's Build Something
        </h1>

        <p>
          Have an idea, opportunity, or project?
          Let's connect.
        </p>

      </section>


      <section className="contact-section">

        <div className="contact-intro">

          <h2>
            Let's talk.
          </h2>

          <p>
            I'm always interested in learning, collaborating,
            building useful software and connecting with people
            in technology.
          </p>

        </div>


        <div className="contact-details">

          <a
            href="mailto:modesta@example.com"
            className="contact-item"
          >
            <FaEnvelope />

            <div>
              <span>Email</span>
              <strong>
                modesta@example.com
              </strong>
            </div>

          </a>


          <a
            href="https://github.com/modeotieno"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <FaGithub />

            <div>
              <span>GitHub</span>
              <strong>
                github.com/modeotieno
              </strong>
            </div>

          </a>


          <a
            href="https://www.linkedin.com/in/modesta-otieno-0551b4408/"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <FaLinkedin />

            <div>
              <span>LinkedIn</span>
              <strong>
                Modesta Otieno
              </strong>
            </div>

          </a>


          <div className="contact-item">

            <FaMapMarkerAlt />

            <div>
              <span>Location</span>
              <strong>
                Kenya
              </strong>
            </div>

          </div>

        </div>

      </section>

    </PageLayout>
  );
}


/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SkillCard({ icon, title, subtitle }) {
  return (
    <div className="mini-skill-card">

      <div className="mini-skill-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {subtitle}
      </p>

    </div>
  );
}


function ProjectCard({ number, name, description }) {
  return (
    <div className="mini-project-card">

      <span>
        {number}
      </span>

      <h3>
        {name}
      </h3>

      <p>
        {description}
      </p>

    </div>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/experience" element={<Experience />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;