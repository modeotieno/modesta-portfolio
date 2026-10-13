import {
  FaCode,
  FaServer,
  FaDatabase,
  FaGitAlt,
  FaLinux,
  FaReact,
  FaMobileAlt,
  FaGlobe,
} from "react-icons/fa";

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

function Skills() {
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
              <div className="skill-card" key={skill.title}>
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

export default Skills;
