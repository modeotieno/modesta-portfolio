import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDev,
  FaMapMarkerAlt,
} from "react-icons/fa";

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
              <FaDev />
            </div>

            <h2>
              DEV Community
            </h2>

            <p>
              Read my articles and technical write-ups.
            </p>

            <a
              href="https://dev.to/modeotieno"
              target="_blank"
              rel="noreferrer"
            >
              dev.to/modeotieno
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

export default Contact;
