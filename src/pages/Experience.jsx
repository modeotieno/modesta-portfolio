import {
  FaBriefcase,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";

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

export default Experience;
