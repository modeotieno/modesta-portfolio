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
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaBookOpen,
  FaLightbulb,
  FaMusic,
  FaFilm,
  FaUsers,
} from "react-icons/fa";

import "./App.css";

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          MO<span>.</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

/* =========================================================
   HOME PAGE
========================================================= */

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">

          <div className="hero-content">

            <h1 className="hero-title">
              <span className="hero-name">
                I'm Modesta Otieno
              </span>

              <span className="hero-role">
                A Full-Stack Developer
              </span>
            </h1>

            <p className="hero-description">
              I build practical, secure and user-focused digital solutions
              using modern web technologies. I enjoy turning ideas into
              reliable applications while continuously learning and improving
              my development skills.
            </p>

            <div className="hero-buttons">

              <Link
                to="/projects"
                className="btn btn-primary"
              >
                View My Work
                <FaArrowRight />
              </Link>

              {/* =================================================
                  DOWNLOAD CV
                  PDF must be inside:
                  public/Modesta-Otieno-CV.pdf
              ================================================= */}

              <a
                href="/Modesta-Otieno-CV.pdf"
                className="btn btn-outline"
                download
              >
                Download CV
                <FaDownload />
              </a>

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
                href="mailto:modestaotieno@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* HOME PHOTO */}

          <div className="hero-image-wrapper">

            <div className="hero-image-card">

              <img
                src="/images/home.jpg"
                alt="Modesta Otieno"
                className="hero-image"
              />

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          HOME FEATURES
      ===================================================== */}

      <section className="home-intro section">

        <div className="container">

          <div className="section-heading center">

            <p className="section-label">
              WHAT I DO
            </p>

            <h2>
              Building practical digital solutions
            </h2>

            <p>
              I enjoy working across frontend, backend and development
              infrastructure to create applications that are useful,
              secure and maintainable.
            </p>

          </div>

          <div className="feature-grid">

            <div className="feature-card">

              <div className="feature-icon">
                <FaCode />
              </div>

              <h3>
                Frontend Development
              </h3>

              <p>
                Creating responsive and user-friendly interfaces with
                React, JavaScript, HTML and CSS.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                <FaServer />
              </div>

              <h3>
                Backend Development
              </h3>

              <p>
                Building APIs and backend services using Go while focusing
                on clean architecture and reliable application logic.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                <FaDatabase />
              </div>

              <h3>
                Data & Systems
              </h3>

              <p>
                Working with databases, APIs, Git, Linux and containerized
                development environments.
              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

/* =========================================================
   ABOUT PAGE
========================================================= */

function About() {
  return (
    <>
      <section className="page-hero">

        <div className="container">

          <p className="section-label">
            ABOUT ME
          </p>

          <h1>
            A developer who enjoys building useful things.
          </h1>

          <p>
            My journey into software development is driven by curiosity,
            problem solving and a desire to create technology that can make
            everyday processes simpler.
          </p>

        </div>

      </section>

      <section className="section">

        <div className="container about-grid">

          {/* ABOUT PHOTO */}

          <div className="about-image-card">

            <img
              src="/images/about.jpg"
              alt="Modesta Otieno"
              className="about-image"
            />

          </div>

          <div className="about-content">

            <p className="section-label">
              MY JOURNEY
            </p>

            <h2>
              Learning, building and growing
            </h2>

            <p>
              I am a software developer focused on building practical
              digital solutions. My current development journey includes
              frontend development with React and backend development
              with Go.
            </p>

            <p>
              I enjoy understanding how systems work from the interface
              users interact with to the backend services and databases
              that power them.
            </p>

            <p>
              I am also interested in secure application development,
              APIs, databases, Linux and modern development workflows.
            </p>

            <div className="about-highlights">

              <div>
                <FaLightbulb />
                <span>
                  Continuous Learning
                </span>
              </div>

              <div>
                <FaCode />
                <span>
                  Software Development
                </span>
              </div>

              <div>
                <FaUsers />
                <span>
                  Collaboration
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          HOBBIES
      ===================================================== */}

      <section className="section section-soft">

        <div className="container">

          <div className="section-heading">

            <p className="section-label">
              HOBBIES
            </p>

            <h2>
              Things I enjoy outside coding
            </h2>

          </div>

          <div className="hobbies-grid">

            <div className="hobby-card">

              <FaBookOpen />

              <h3>
                Reading
              </h3>

              <p>
                Exploring books and resources that help me learn new
                ideas and improve my skills.
              </p>

            </div>

            <div className="hobby-card">

              <FaMusic />

              <h3>
                Music
              </h3>

              <p>
                Listening to music and discovering different sounds
                during my free time.
              </p>

            </div>

            <div className="hobby-card">

              <FaFilm />

              <h3>
                Movies
              </h3>

              <p>
                Enjoying movies and stories that provide entertainment
                and new perspectives.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ARTICLES
      ===================================================== */}

      <section className="section">

        <div className="container">

          <div className="section-heading">

            <p className="section-label">
              ARTICLES
            </p>

            <h2>
              Writing & learning
            </h2>

            <p>
              I am interested in documenting what I learn as I continue
              growing as a developer.
            </p>

          </div>

          <div className="article-card">

            <div className="article-icon">
              <FaBookOpen />
            </div>

            <div>

              <p className="article-date">
                Coming soon
              </p>

              <h3>
                My developer learning journey
              </h3>

              <p>
                I will be sharing notes, lessons and practical experiences
                from my journey into software development.
              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

/* =========================================================
   SKILLS PAGE
========================================================= */

function Skills() {

  const skills = [
    {
      icon: <FaCode />,
      title: "Go",
      description: "Backend development and APIs",
    },
    {
      icon: <FaCode />,
      title: "C",
      description: "Programming fundamentals",
    },
    {
      icon: <FaGlobe />,
      title: "JavaScript",
      description: "Interactive web applications",
    },
    {
      icon: <FaReact />,
      title: "React",
      description: "Modern frontend development",
    },
    {
      icon: <FaMobileAlt />,
      title: "Flutter",
      description: "Cross-platform mobile development",
    },
    {
      icon: <FaDatabase />,
      title: "PostgreSQL",
      description: "Relational databases",
    },
    {
      icon: <FaGitAlt />,
      title: "Git & GitHub",
      description: "Version control and collaboration",
    },
    {
      icon: <FaLinux />,
      title: "Linux",
      description: "Development environments and systems",
    },
    {
      icon: <FaServer />,
      title: "REST APIs",
      description: "Backend and client communication",
    },
    {
      icon: <FaCode />,
      title: "Docker",
      description: "Containerized development",
    },
    {
      icon: <FaGlobe />,
      title: "HTML & CSS",
      description: "Responsive web interfaces",
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Full-stack application development",
    },
  ];

  return (
    <>
      <section className="page-hero">

        <div className="container">

          <p className="section-label">
            SKILLS
          </p>

          <h1>
            Technologies I work with
          </h1>

          <p>
            A growing set of tools and technologies that I use to build
            modern applications.
          </p>

        </div>

      </section>

      <section className="section">

        <div className="container">

          <div className="skills-grid">

            {skills.map((skill) => (

              <div
                className="skill-card"
                key={skill.title}
              >

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <div>

                  <h3>
                    {skill.title}
                  </h3>

                  <p>
                    {skill.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
    </>
  );
}

/* =========================================================
   PROJECTS PAGE
========================================================= */

function Projects() {

  const projects = [
    {
      title: "Smart Electoral Integrity System",
      type: "Full-Stack Application",
      description:
        "A secure demonstration platform designed to showcase transparent, verifiable and trustworthy digital election workflows.",
      technologies:
        "React, Vite, Go, PostgreSQL, Docker, REST APIs",
      github:
        "https://github.com/modeotieno/smart-electoral-integrity-system",
    },

    {
      title: "AXIS Smart Irrigation",
      type: "Water Management Platform",
      description:
        "A smart irrigation platform that helps smallholder farmers understand crop water requirements and irrigation needs.",
      technologies:
        "Go, React, APIs, Weather Data, Agriculture Logic",
      github:
        "https://github.com/modeotieno",
      live:
        "https://axis-irrigation.fly.dev/",
    },

    {
      title: "Tetris Optimizer",
      type: "Go Project",
      description:
        "A Go-based puzzle solver that reads tetromino definitions and finds an efficient arrangement inside the smallest possible square.",
      technologies:
        "Go, Algorithms, File Parsing",
      github:
        "https://github.com/modeotieno",
    },

    {
      title: "Groupie Tracker",
      type: "Web Application",
      description:
        "A Go web application that retrieves artist information from an API and presents artist and relationship data through a browser interface.",
      technologies:
        "Go, HTML Templates, REST APIs, JavaScript",
      github:
        "https://github.com/modeotieno",
    },

    {
      title: "Lem-in",
      type: "Algorithm Project",
      description:
        "A Go implementation focused on parsing ant-farm data and finding paths through a graph from a start room to an end room.",
      technologies:
        "Go, Graphs, Algorithms, Parsing",
      github:
        "https://github.com/modeotieno",
    },

    {
      title: "Other Go Projects",
      type: "Learning Projects",
      description:
        "A collection of programming exercises and projects used to strengthen my understanding of Go, algorithms, data structures and problem solving.",
      technologies:
        "Go, Algorithms, Data Structures",
      github:
        "https://github.com/modeotieno",
    },
  ];

  return (
    <>
      <section className="page-hero">

        <div className="container">

          <p className="section-label">
            PROJECTS
          </p>

          <h1>
            Things I have built
          </h1>

          <p>
            A selection of projects that demonstrate my development
            experience and continuous learning.
          </p>

        </div>

      </section>

      <section className="section">

        <div className="container projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.title}
            >

              <div className="project-top">

                <span className="project-type">
                  {project.type}
                </span>

                <FaCode />

              </div>

              <h2>
                {project.title}
              </h2>

              <p className="project-description">
                {project.description}
              </p>

              <p className="project-tech">
                <strong>
                  Technologies:
                </strong>{" "}
                {project.technologies}
              </p>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <FaGithub />
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                    <FaExternalLinkAlt />
                  </a>
                )}

              </div>

            </article>

          ))}

        </div>

      </section>
    </>
  );
}

/* =========================================================
   EXPERIENCE PAGE
========================================================= */

function Experience() {
  return (
    <>
      <section className="page-hero">

        <div className="container">

          <p className="section-label">
            EXPERIENCE
          </p>

          <h1>
            My development journey
          </h1>

          <p>
            Education, practical experience and hands-on software
            development.
          </p>

        </div>

      </section>

      <section className="section">

        <div className="container timeline">

          <div className="timeline-item">

            <div className="timeline-icon">
              <FaBriefcase />
            </div>

            <div className="timeline-content">

              <span className="timeline-date">
                Mar 2026 – May 2026
              </span>

              <h2>
                ICT Support and Data Operations
              </h2>

              <h3>
                Huduma Kenya
              </h3>

              <p>
                Provided technical support, troubleshooting, network
                configuration and hardware support while working with
                data operations.
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-icon">
              <FaCode />
            </div>

            <div className="timeline-content">

              <span className="timeline-date">
                Current Learning
              </span>

              <h2>
                Software Development Apprentice
              </h2>

              <h3>
                Zone01 Kisumu
              </h3>

              <p>
                Developing practical programming and software engineering
                skills through project-based learning, peer collaboration
                and technical challenges.
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-icon">
              <FaGraduationCap />
            </div>

            <div className="timeline-content">

              <span className="timeline-date">
                Education
              </span>

              <h2>
                ICT Studies
              </h2>

              <h3>
                Rotary Vocational Training Centre
              </h3>

              <p>
                Building a foundation in information and communication
                technology while developing practical technical skills.
              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

/* =========================================================
   CONTACT PAGE
========================================================= */

function Contact() {
  return (
    <>
      <section className="page-hero">

        <div className="container">

          <p className="section-label">
            CONTACT
          </p>

          <h1>
            Let's connect
          </h1>

          <p>
            If you would like to discuss a project, collaboration or
            opportunity, feel free to reach out.
          </p>

        </div>

      </section>

      <section className="section">

        <div className="container contact-grid">

          <div className="contact-card">

            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <h2>
              Email
            </h2>

            <p>
              Send me an email for professional enquiries.
            </p>

            <a href="mailto:modestaotieno@gmail.com">
              modestaotieno@gmail.com
            </a>

          </div>

          <div className="contact-card">

            <div className="contact-icon">
              <FaGithub />
            </div>

            <h2>
              GitHub
            </h2>

            <p>
              Explore my projects and development work.
            </p>

            <a
              href="https://github.com/modeotieno"
              target="_blank"
              rel="noreferrer"
            >
              github.com/modeotieno
            </a>

          </div>

          <div className="contact-card">

            <div className="contact-icon">
              <FaLinkedin />
            </div>

            <h2>
              LinkedIn
            </h2>

            <p>
              Connect with me professionally.
            </p>

            <a
              href="https://www.linkedin.com/in/modesta-otieno-0551b4408/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>

          </div>

          <div className="contact-card">

            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <h2>
              Location
            </h2>

            <p>
              Based in Kenya and open to connecting with people,
              teams and organizations.
            </p>

            <span>
              Kenya
            </span>

          </div>

        </div>

      </section>
    </>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-content">

        <div>

          <Link
            to="/"
            className="footer-logo"
          >
            MO<span>.</span>
          </Link>

          <p>
            Full-Stack Developer building practical digital solutions.
          </p>

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
            href="mailto:modestaotieno@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="container footer-bottom">

        <p>
          © {new Date().getFullYear()} Modesta Otieno. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Navbar />

        <main>

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

        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;