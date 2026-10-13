import { FaCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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

function Projects() {
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
            <article className="project-card" key={project.title}>
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

export default Projects;
