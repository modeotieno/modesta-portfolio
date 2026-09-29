import "../App.css";

function About() {
  return (
    <div className="app">
      <section className="section page-section">
        <div className="container">
          <div className="section-label">01 — ABOUT</div>

          <div className="about-section">
            {/* Photo */}
            <div className="about-photo">
              <img
                src="/images/About.jpg"
                alt="Modesta Otieno"
                className="about-profile-image"
              />
            </div>

            {/* Content */}
            <div className="about-content">
              <h2>Building with purpose.</h2>

              <p>
                I'm a software developer with a background in ICT,
                passionate about learning, building, and solving
                real-world problems through technology.
              </p>

              <div className="about-highlights">
                <div>
                  <strong>01</strong>
                  <span>Problem Solver</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Team Player</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Continuous Learner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;