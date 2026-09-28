import "../App.css";

function Projects() {
  return (
    <div className="app">
      <section className="section page-section">
        <div className="container">
          <div className="section-label">03 — PROJECTS</div>

          <h1>Things I've built.</h1>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-number">01</div>

              <div>
                <h3>SEIS</h3>
                <p>
                  Smart Electoral Integrity System
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-number">02</div>

              <div>
                <h3>AXIS</h3>
                <p>
                  Smart Irrigation & Water Management
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-number">03</div>

              <div>
                <h3>Zone01 Projects</h3>
                <p>
                  Software development and learning projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;