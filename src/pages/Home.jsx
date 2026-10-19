import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDev,
  FaArrowRight,
  FaDownload,
  FaCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";

function AnimatedName({ text, baseDelay = 0.15, step = 0.035 }) {
  let index = 0;

  return (
    <span className="hero-name" aria-label={text}>
      {text.split(" ").map((word, wordIndex) => (
        <span className="hero-word" key={wordIndex} aria-hidden="true">
          {Array.from(word).map((char, charIndex) => {
            const delay = baseDelay + index * step;
            index += 1;

            return (
              <span
                className="hero-letter"
                key={charIndex}
                style={{ animationDelay: `${delay}s` }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-badge">
                <span className="hero-badge-dot" />
                Available for opportunities
              </span>

              <AnimatedName text="I'm Modesta Otieno" />

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
              <Link to="/projects" className="btn btn-primary">
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
                href="https://dev.to/modeotieno"
                target="_blank"
                rel="noreferrer"
                aria-label="DEV Community"
              >
                <FaDev />
              </a>

              <a
                href="mailto:otienomodesta505@gmail.com"
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

export default Home;
