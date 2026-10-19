import { useEffect, useState } from "react";
import {
  FaLightbulb,
  FaCode,
  FaUsers,
  FaBookOpen,
  FaMusic,
  FaFilm,
  FaDev,
  FaRegClock,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

const DEV_USERNAME = "modeotieno";

const FALLBACK_ARTICLES = [
  {
    id: "building-my-developer-portfolio-with-react-and-vite-4545",
    title: "Building My Developer Portfolio with React and Vite",
    description:
      "How I planned, structured and built my personal portfolio using React, Vite and React Router.",
    url: "https://dev.to/modeotieno/building-my-developer-portfolio-with-react-and-vite-4545",
    published_at: "2026-10-12T00:00:00Z",
    reading_time_minutes: 2,
    tag_list: ["frontend", "learning", "react", "webdev"],
    positive_reactions_count: 0,
  },
  {
    id: "my-axis-green-economy-hackathon-experience-building-a-smart-irrigation-solution-10j6",
    title:
      "My AXIS Green Economy Hackathon Experience: Building a Smart Irrigation Solution",
    description:
      "My experience building AXIS, a smart irrigation and water-management solution during a green economy hackathon.",
    url: "https://dev.to/modeotieno/my-axis-green-economy-hackathon-experience-building-a-smart-irrigation-solution-10j6",
    published_at: "2026-10-12T00:00:00Z",
    reading_time_minutes: 2,
    tag_list: ["careerjourney"],
    positive_reactions_count: 0,
  },
  {
    id: "building-my-smart-electoral-integrity-system-1lb7",
    title: "Building My Smart Electoral Integrity System",
    description:
      "Designing a secure platform that lets citizens monitor election progress and verify recorded results.",
    url: "https://dev.to/modeotieno/building-my-smart-electoral-integrity-system-1lb7",
    published_at: "2026-10-12T00:00:00Z",
    reading_time_minutes: 2,
    tag_list: ["learninginpublic"],
    positive_reactions_count: 0,
  },
  {
    id: "starting-my-go-journey-by-solving-problem-4836",
    title: "Starting My Go Journey by Solving Problems",
    description:
      "How solving programming challenges became my way of learning Go fundamentals.",
    url: "https://dev.to/modeotieno/starting-my-go-journey-by-solving-problem-4836",
    published_at: "2026-10-12T00:00:00Z",
    reading_time_minutes: 2,
    tag_list: ["programming"],
    positive_reactions_count: 0,
  },
  {
    id: "my-journey-into-software-development-1a69",
    title: "My Journey Into Software Development",
    description:
      "The curiosity, problem solving and motivation that led me into software development.",
    url: "https://dev.to/modeotieno/my-journey-into-software-development-1a69",
    published_at: "2026-10-12T00:00:00Z",
    reading_time_minutes: 2,
    tag_list: ["ai", "programming"],
    positive_reactions_count: 0,
  },
];

function formatDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function About() {
  const [articles, setArticles] = useState(FALLBACK_ARTICLES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetch(
      `https://dev.to/api/articles?username=${DEV_USERNAME}&per_page=6`
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        if (active && Array.isArray(data) && data.length > 0) {
          setArticles(data);
        }
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

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
          ARTICLES (synced from DEV Community)
      ===================================================== */}

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">
              ARTICLES
            </p>

            <h2>
              Writing &amp; learning
            </h2>

            <p>
              I document what I learn as I grow as a developer. My latest
              posts are pulled straight from my DEV Community profile.
            </p>
          </div>

          <div className="articles-grid">
            {loading
              ? FALLBACK_ARTICLES.slice(0, 3).map((article) => (
                  <div
                    className="article-card article-card-skeleton"
                    key={article.id}
                  >
                    <div className="article-skeleton-line" />
                    <div className="article-skeleton-line short" />
                    <div className="article-skeleton-line" />
                  </div>
                ))
              : articles.map((article) => (
                  <a
                    className="article-card"
                    key={article.id}
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="article-card-head">
                      <div className="article-icon">
                        <FaDev />
                      </div>

                      {formatDate(article.published_at) && (
                        <p className="article-date">
                          {formatDate(article.published_at)}
                        </p>
                      )}
                    </div>

                    <h3>
                      {article.title}
                    </h3>

                    <p>
                      {article.description}
                    </p>

                    {Array.isArray(article.tag_list) &&
                      article.tag_list.length > 0 && (
                        <div className="article-meta">
                          {article.tag_list.slice(0, 3).map((tag) => (
                            <span className="article-tag" key={tag}>
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                    <div className="article-footer">
                      <span className="article-footer-item">
                        <FaRegClock />
                        {article.reading_time_minutes || 2} min
                      </span>

                      {typeof article.positive_reactions_count === "number" && (
                        <span className="article-footer-item">
                          <FaHeart />
                          {article.positive_reactions_count}
                        </span>
                      )}

                      <span className="article-read-more">
                        Read
                        <FaArrowRight />
                      </span>
                    </div>
                  </a>
                ))}
          </div>

          <div className="articles-cta">
            <a
              href={`https://dev.to/${DEV_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <FaBookOpen />
              See all articles on DEV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
