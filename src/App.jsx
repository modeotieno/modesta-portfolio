import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaCode,
  FaServer,
  FaDatabase,
  FaGitAlt,
  FaLinux,
  FaReact,
  FaMobileAlt,
  FaGlobe,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaPhone,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
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
            Software developer focused on building practical,
            secure, and meaningful digital solutions.
          </p>

          <div className="footer-tagline">
            BUILD • LEARN • CREATE
          </div>

        </div>


        <div className="footer-cv">

          <p>
            Interested in my background and experience?
          </p>

          <a
            href="/Modesta-Otieno-CV.pdf"
            download
            className="cv-button"
          >
            <FaDownload />
            Download CV
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
            href="mailto:otienomodesta505@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>


      <div className="copyright">
        © {new Date().getFullYear()} Modesta Otieno. All rights reserved.
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
   HOME PAGE
========================================================= */

function Home() {
  return (
    <PageLayout>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <div className="eyebrow">
            SOFTWARE DEVELOPER
          </div>


          <h1 className="hero-title">

            <span className="greeting">
              Hi, I'm
            </span>

            <span className="animated-name">
              Modesta Otieno
            </span>

            <span className="role-line">

              <span className="role-prefix">
                I'm a{" "}
              </span>

              <span className="animated-role">
                Full-Stack Developer
              </span>

            </span>

          </h1>


          <p className="hero-description">
            I'm a software developer with a background in ICT,
            passionate about learning, building, and solving
            real-world problems through technology.
          </p>


          <div className="hero-buttons">

            <Link
              to="/projects"
              target="_blank"
              className="btn primary"
            >
              View My Work
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
              href="mailto:otienomodesta505@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>


        {/* PHOTO */}

        <div className="hero-visual">

          <div className="hero-photo-area">

            <img
              src="/images/home.jpg"
              alt="Modesta Otieno"
              className="hero-profile-image"
            />

            <div className="hero-side-text">
              CODE<br />
              CREATE<br />
              IMPACT
            </div>

          </div>

        </div>

      </section>


      {/* ABOUT PREVIEW */}

      <section className="home-section">

        <div className="section-container">

          <div className="section-label">
            ABOUT ME
          </div>

          <h2>
            Building with purpose.
          </h2>

          <p className="section-description">
            My journey combines technical support, software
            development, and hands-on project experience.
            I enjoy understanding how systems work and turning
            ideas into practical applications.
          </p>


          <Link
            to="/about"
            target="_blank"
            className="text-link"
          >
            More about me
            <FaArrowRight />
          </Link>

        </div>

      </section>


      {/* SKILLS PREVIEW */}

      <section className="home-section">

        <div className="section-container">

          <div className="section-label">
            WHAT I WORK WITH
          </div>

          <h2>
            Tools & technologies.
          </h2>


          <div className="skills-preview">

            <MiniSkill
              icon={<FaCode />}
              title="Development"
              text="Go, C, JavaScript, HTML & CSS"
            />

            <MiniSkill
              icon={<FaReact />}
              title="Frontend"
              text="React, Vite & modern UI development"
            />

            <MiniSkill
              icon={<FaServer />}
              title="Backend"
              text="Go APIs, HTTP servers & services"
            />

            <MiniSkill
              icon={<FaDatabase />}
              title="Databases"
              text="PostgreSQL & data-driven applications"
            />

            <MiniSkill
              icon={<FaGitAlt />}
              title="Version Control"
              text="Git, GitHub & collaborative workflows"
            />

            <MiniSkill
              icon={<FaLinux />}
              title="Linux"
              text="Linux development & command-line workflows"
            />

          </div>


          <Link
            to="/skills"
            target="_blank"
            className="text-link"
          >
            Explore my skills
            <FaArrowRight />
          </Link>

        </div>

      </section>


      {/* PROJECTS PREVIEW */}

      <section className="home-section">

        <div className="section-container">

          <div className="section-label">
            SELECTED WORK
          </div>

          <h2>
            Projects I've built.
          </h2>


          <div className="projects-preview">

            <MiniProject
              number="01"
              title="SEIS"
              text="A secure demonstration platform for transparent and verifiable digital elections."
            />

            <MiniProject
              number="02"
              title="AXIS"
              text="A smart irrigation platform designed to support efficient water management."
            />

            <MiniProject
              number="03"
              title="Zone01"
              text="A collection of software development projects built while learning and practicing Go."
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


      {/* CONTACT PREVIEW */}

      <section className="home-section contact-preview">

        <div className="section-container">

          <div className="section-label">
            HAVE A PROJECT?
          </div>

          <h2>
            Let's build something meaningful.
          </h2>

          <p className="section-description">
            I'm interested in opportunities where I can learn,
            contribute, and build useful technology.
          </p>

          <Link
            to="/contact"
            target="_blank"
            className="btn primary"
            style={{ marginTop: "30px" }}
          >
            Get in touch
            <FaArrowRight />
          </Link>

        </div>

      </section>

    </PageLayout>
  );
}


/* =========================================================
   MINI SKILL
========================================================= */

function MiniSkill({ icon, title, text }) {
  return (
    <div className="mini-skill-card">

      <div className="mini-skill-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </div>
  );
}


/* =========================================================
   MINI PROJECT
========================================================= */

function MiniProject({ number, title, text }) {
  return (
    <div className="mini-project-card">

      <span>
        {number}
      </span>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </div>
  );
}


/* =========================================================
   ABOUT PAGE
========================================================= */

function About() {
  return (
    <PageLayout>

      <section className="page-header">

        <div className="section-label">
          ABOUT ME
        </div>

        <h1>
          Who I am.
        </h1>

        <p>
          A developer learning, building, and growing through
          real-world projects and practical experience.
        </p>

      </section>


      <section className="about-section">

        <div className="about-photo">

          <img
            src="/images/about.jpg"
            alt="Modesta Otieno"
            className="about-profile-image"
          />

        </div>


        <div className="about-content">

          <div className="section-label">
            MY JOURNEY
          </div>

          <h2>
            Learning by building.
          </h2>

          <p>
            I'm a software developer with a background in ICT
            and a growing focus on software development.
          </p>

          <p>
            My experience includes technical support, data
            operations, software development, and working with
            technologies such as Go, React, databases, Git,
            Linux, and Docker.
          </p>

          <p>
            I enjoy taking an idea, understanding the problem
            behind it, and turning it into a practical digital
            solution.
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
   SKILLS PAGE
========================================================= */

function Skills() {
  return (
    <PageLayout>

      <section className="page-header">

        <div className="section-label">
          MY TOOLKIT
        </div>

        <h1>
          Skills.
        </h1>

        <p>
          Technologies and tools I use while building,
          learning, and solving software problems.
        </p>

      </section>


      <section className="skills-grid">

        <SkillCard
          icon={<FaCode />}
          title="Go"
          text="Building backend applications, HTTP servers, APIs, and command-line programs."
        />

        <SkillCard
          icon={<FaCode />}
          title="C"
          text="Understanding programming fundamentals, algorithms, memory, and systems concepts."
        />

        <SkillCard
          icon={<FaGlobe />}
          title="JavaScript"
          text="Creating interactive web applications and working with modern frontend technologies."
        />

        <SkillCard
          icon={<FaReact />}
          title="React"
          text="Building component-based user interfaces with React and Vite."
        />

        <SkillCard
          icon={<FaMobileAlt />}
          title="Flutter"
          text="Exploring cross-platform mobile application development with Flutter and Dart."
        />

        <SkillCard
          icon={<FaDatabase />}
          title="PostgreSQL"
          text="Working with relational databases and data-driven applications."
        />

        <SkillCard
          icon={<FaGitAlt />}
          title="Git & GitHub"
          text="Managing source code, branches, commits, collaboration, and project history."
        />

        <SkillCard
          icon={<FaLinux />}
          title="Linux"
          text="Using Linux for development, terminal workflows, configuration, and deployment."
        />

        <SkillCard
          icon={<FaServer />}
          title="APIs"
          text="Designing and consuming HTTP APIs and connecting frontend applications to backend services."
        />

        <SkillCard
          icon={<FaDatabase />}
          title="Docker"
          text="Working with containers and multi-service application environments."
        />

        <SkillCard
          icon={<FaCode />}
          title="HTML & CSS"
          text="Building responsive and accessible web interfaces with modern CSS."
        />

        <SkillCard
          icon={<FaGlobe />}
          title="Web Development"
          text="Combining frontend and backend technologies to create complete web applications."
        />

      </section>

    </PageLayout>
  );
}


/* =========================================================
   SKILL CARD
========================================================= */

function SkillCard({ icon, title, text }) {
  return (
    <div className="skill-card">

      <div className="skill-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </div>
  );
}


/* =========================================================
   PROJECTS PAGE
========================================================= */

function Projects() {
  return (
    <PageLayout>

      <section className="page-header">

        <div className="section-label">
          SELECTED WORK
        </div>

        <h1>
          Projects.
        </h1>

        <p>
          A collection of projects where I apply what I'm
          learning to practical problems.
        </p>

      </section>


      <section className="project-list">

        <ProjectCard
          number="01"
          category="FULL-STACK DEVELOPMENT"
          title="Smart Electoral Integrity System"
          description="A secure demonstration platform that showcases transparent, verifiable, and trustworthy digital elections. The system explores secure authentication, role-based access, audit logging, encrypted communication, and results verification workflows."
          tech={[
            "React",
            "Vite",
            "Go",
            "Gin",
            "PostgreSQL",
            "Docker",
          ]}
          link="https://github.com/modeotieno/smart-electoral-integrity-system"
          linkText="View on GitHub"
        />


        <ProjectCard
          number="02"
          category="SMART AGRICULTURE"
          title="AXIS Smart Irrigation"
          description="A smart irrigation and water-management platform designed for smallholder farmers. It combines crop information, weather data, irrigation calculations, and water-use recommendations."
          tech={[
            "Go",
            "React",
            "APIs",
            "Hargreaves",
            "Irrigation",
            "Fly.io",
          ]}
          link="https://axis-irrigation.fly.dev/"
          linkText="View Live Project"
        />


        <ProjectCard
          number="03"
          category="GO DEVELOPMENT"
          title="Zone01 Projects"
          description="A collection of software development projects completed while learning Go, including algorithmic challenges, backend development, data structures, and problem-solving exercises."
          tech={[
            "Go",
            "Git",
            "Linux",
            "Algorithms",
            "HTTP",
          ]}
          link="https://github.com/modeotieno"
          linkText="View GitHub"
        />

      </section>

    </PageLayout>
  );
}


/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  number,
  category,
  title,
  description,
  tech,
  link,
  linkText,
}) {
  return (
    <article className="project-card-large">

      <div className="project-number">
        {number}
      </div>


      <div className="project-content">

        <span className="project-category">
          {category}
        </span>

        <h2>
          {title}
        </h2>

        <p>
          {description}
        </p>


        <div className="project-tech">

          {tech.map((item) => (
            <span key={item}>
              {item}
            </span>
          ))}

        </div>


        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          {linkText}
          <FaExternalLinkAlt />
        </a>

      </div>

    </article>
  );
}


/* =========================================================
   EXPERIENCE PAGE
========================================================= */

function Experience() {
  return (
    <PageLayout>

      <section className="page-header">

        <div className="section-label">
          EXPERIENCE
        </div>

        <h1>
          My journey.
        </h1>

        <p>
          The experiences and learning environments that have
          shaped my development journey.
        </p>

      </section>


      <section className="timeline">


        {/* HUDUMA */}

        <div className="timeline-item">

          <div className="timeline-marker">
            01
          </div>


          <div className="timeline-content">

            <div className="timeline-date">
              MAR 2026 — MAY 2026
            </div>

            <h2>
              ICT Support & Data Operations
            </h2>

            <h3>
              Huduma Kenya
            </h3>

            <p>
              Supported technical and data-related operations
              while gaining practical experience working with
              users, systems, and technology.
            </p>

            <ul>
              <li>
                Provided technical support and troubleshooting.
              </li>

              <li>
                Assisted with network configuration.
              </li>

              <li>
                Supported hardware repair and maintenance.
              </li>

              <li>
                Worked with data operations and digital systems.
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

            <div className="timeline-date">
              CURRENT
            </div>

            <h2>
              Software Development Apprentice
            </h2>

            <h3>
              Zone01 Kisumu
            </h3>

            <p>
              Developing practical software engineering skills
              through project-based learning, collaboration,
              problem solving, and peer learning.
            </p>

            <ul>
              <li>
                Learning Go and backend development.
              </li>

              <li>
                Building projects through hands-on practice.
              </li>

              <li>
                Using Git and collaborative development workflows.
              </li>

              <li>
                Developing problem-solving and software engineering skills.
              </li>
            </ul>

          </div>

        </div>


        {/* EDUCATION */}

        <div className="timeline-item">

          <div className="timeline-marker">
            03
          </div>


          <div className="timeline-content">

            <div className="timeline-date">
              EDUCATION
            </div>

            <h2>
              ICT
            </h2>

            <h3>
              Rotary Vocational Training Centre
            </h3>

            <p>
              Building a foundation in information and
              communication technology while developing practical
              technical skills.
            </p>

          </div>

        </div>

      </section>

    </PageLayout>
  );
}


/* =========================================================
   CONTACT PAGE
========================================================= */

function Contact() {
  return (
    <PageLayout>

      <section className="page-header">

        <div className="section-label">
          CONTACT
        </div>

        <h1>
          Let's connect.
        </h1>

        <p>
          Whether you want to discuss a project, opportunity,
          collaboration, or simply connect, feel free to reach out.
        </p>

      </section>


      <section className="contact-section">

        <div className="contact-intro">

          <div className="section-label">
            GET IN TOUCH
          </div>

          <h2>
            Have an idea?
            <br />
            Let's talk.
          </h2>

          <p>
            I'm open to learning opportunities, software
            development projects, collaborations, and
            conversations around technology.
          </p>

        </div>


        <div className="contact-details">


          {/* EMAIL */}

          <a
            href="mailto:otienomodesta505@gmail.com"
            className="contact-item"
          >

            <FaEnvelope />

            <div>

              <span>
                Email
              </span>

              <strong>
                otienomodesta505@gmail.com
              </strong>

            </div>

          </a>


          {/* GITHUB */}

          <a
            href="https://github.com/modeotieno"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >

            <FaGithub />

            <div>

              <span>
                GitHub
              </span>

              <strong>
                github.com/modeotieno
              </strong>

            </div>

          </a>


          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/modesta-otieno-0551b4408/"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >

            <FaLinkedin />

            <div>

              <span>
                LinkedIn
              </span>

              <strong>
                Modesta Otieno
              </strong>

            </div>

          </a>


          {/* LOCATION */}

          <div className="contact-item">

            <FaMapMarkerAlt />

            <div>

              <span>
                Location
              </span>

              <strong>
                Kenya
              </strong>

            </div>

          </div>


          {/* ROLE */}

          <div className="contact-item">

            <FaBriefcase />

            <div>

              <span>
                Focus
              </span>

              <strong>
                Software Development
              </strong>

            </div>

          </div>

        </div>

      </section>

    </PageLayout>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/skills"
          element={<Skills />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/experience"
          element={<Experience />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;