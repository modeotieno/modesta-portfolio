import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaDev } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <Link to="/" className="footer-logo">
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
            href="https://dev.to/modeotieno"
            target="_blank"
            rel="noreferrer"
            aria-label="DEV Community"
          >
            <FaDev />
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

export default Footer;
