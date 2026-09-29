import {
  FaArrowRight,
  FaBookOpen,
  FaCalendarAlt,
  FaCode,
} from "react-icons/fa";

const articles = [
  {
    title: "My Journey Learning Go",
    description:
      "Lessons I have learned while developing with Go and building backend applications.",
    category: "Go Development",
    date: "2026",
    icon: <FaCode />,
  },
  {
    title: "Understanding Git Branching",
    description:
      "A beginner-friendly look at branches, commits, merging and collaboration with Git.",
    category: "Git & GitHub",
    date: "2026",
    icon: <FaCode />,
  },
  {
    title: "Building a Secure Digital Election System",
    description:
      "Lessons from developing the Smart Electoral Integrity System and exploring secure software practices.",
    category: "Software Development",
    date: "2026",
    icon: <FaBookOpen />,
  },
  {
    title: "Technology for Smart Irrigation",
    description:
      "Exploring how software and data can support smarter water management for smallholder farmers.",
    category: "Technology & Agriculture",
    date: "2026",
    icon: <FaBookOpen />,
  },
];

function Articles() {
  return (
    <main className="articles-page">
      <section className="page-header">
        <div className="container">
          <span className="section-label">MY WRITING</span>

          <h1>
            Articles & <span>Insights</span>
          </h1>

          <p>
            Thoughts, lessons and experiences from my journey in software
            development and technology.
          </p>
        </div>
      </section>

      <section className="articles-section">
        <div className="container">
          <div className="articles-grid">
            {articles.map((article, index) => (
              <article className="article-card" key={index}>
                <div className="article-icon">{article.icon}</div>

                <div className="article-content">
                  <span className="article-category">
                    {article.category}
                  </span>

                  <h2>{article.title}</h2>

                  <p>{article.description}</p>

                  <div className="article-footer">
                    <span>
                      <FaCalendarAlt />
                      {article.date}
                    </span>

                    <button type="button" className="read-more">
                      Read Article
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Articles;