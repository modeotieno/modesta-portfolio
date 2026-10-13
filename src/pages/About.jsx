import {
  FaLightbulb,
  FaCode,
  FaUsers,
  FaBookOpen,
  FaMusic,
  FaFilm,
} from "react-icons/fa";

function About() {
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
          ARTICLES
      ===================================================== */}

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">
              ARTICLES
            </p>

            <h2>
              Writing & learning
            </h2>

            <p>
              I am interested in documenting what I learn as I continue
              growing as a developer.
            </p>
          </div>

          <div className="article-card">
            <div className="article-icon">
              <FaBookOpen />
            </div>

            <div>
              <p className="article-date">
                Coming soon
              </p>

              <h3>
                My developer learning journey
              </h3>

              <p>
                I will be sharing notes, lessons and practical experiences
                from my journey into software development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
