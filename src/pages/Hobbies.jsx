import {
  FaBookOpen,
  FaCamera,
  FaCode,
  FaLightbulb,
  FaMusic,
  FaRunning,
} from "react-icons/fa";

const hobbies = [
  {
    icon: <FaCode />,
    title: "Building Projects",
    description:
      "I enjoy turning ideas into practical software projects and experimenting with new technologies.",
  },
  {
    icon: <FaBookOpen />,
    title: "Learning",
    description:
      "I enjoy learning new programming concepts, exploring technical topics and continuously improving my skills.",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem Solving",
    description:
      "I enjoy challenging myself with programming problems and finding simple solutions to complex tasks.",
  },
  {
    icon: <FaCamera />,
    title: "Photography",
    description:
      "Photography gives me a creative way to observe details, capture moments and explore visual storytelling.",
  },
  {
    icon: <FaMusic />,
    title: "Music",
    description:
      "I enjoy listening to music while relaxing, working on projects and taking a break from coding.",
  },
  {
    icon: <FaRunning />,
    title: "Staying Active",
    description:
      "I enjoy activities that help me stay active, refresh my mind and maintain a healthy balance outside technology.",
  },
];

function Hobbies() {
  return (
    <main className="hobbies-page">

      {/* PAGE HEADER */}
      <section className="page-header">
        <div>
          <span className="section-label">BEYOND CODE</span>

          <h1>
            My <span>Hobbies</span>
          </h1>

          <p>
            Technology is an important part of my journey, but I also enjoy
            activities that keep me curious, creative and balanced outside
            software development.
          </p>
        </div>
      </section>


      {/* HOBBIES */}
      <section className="hobbies-section">
        <div className="hobbies-grid">

          {hobbies.map((hobby, index) => (
            <article className="hobby-card" key={index}>

              <div className="hobby-number">
                0{index + 1}
              </div>

              <div className="hobby-icon">
                {hobby.icon}
              </div>

              <h2>{hobby.title}</h2>

              <p>{hobby.description}</p>

            </article>
          ))}

        </div>
      </section>


      {/* CLOSING SECTION */}
      <section className="hobbies-closing">
        <div className="hobbies-closing-content">

          <span className="section-label">
            KEEP EXPLORING
          </span>

          <h2>
            Curiosity drives
            <span> growth.</span>
          </h2>

          <p>
            Whether I am writing code, learning something new or exploring a
            creative interest, I enjoy experiences that help me grow and see
            problems from different perspectives.
          </p>

        </div>
      </section>

    </main>
  );
}

export default Hobbies;