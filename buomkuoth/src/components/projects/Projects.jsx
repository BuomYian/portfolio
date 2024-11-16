import Project1 from "../../assets/aiimage.jpeg";
import Project2 from "../../assets/hos.png";
import Project3 from "../../assets/pos.jpeg";
import "./Projects.css";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      image: Project1,
      title: "Ai Image Generator",
      liveUrl: "#",
      githubUrl: "https://github.com/BuomYian/ai_image_generation_app",
      description:
        "Web app used for generating AI-generated images based on user input.",
    },
    {
      id: 2,
      image: Project2,
      title: "Hospital Appointment System",
      liveUrl: "#",
      githubUrl: "https://github.com/BuomYian/hospital_appointment_system",
      description: "Web app used to manage appointments for hospitals.",
    },
    {
      id: 3,
      image: Project3,
      title: "Inventory Management system",
      liveUrl: "#",
      githubUrl: "https://github.com/BuomYian/inventory-management-dashboard",
      description: "Inventory dashboard web app used for managing inventories",
    },
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">My Portfolio</h2>
      <span className="section__subtitle">Most Recent Work</span>

      <div className="portfolio__container container grid">
        {projects.map((project) => (
          <div className="portfolio__content" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="portfolio__img"
            />
            <div className="portfolio__data">
              <h3 className="portfolio__title">{project.title}</h3>
              <p className="portfolio__description">{project.description}</p>
              <div className="portfolio__button">
                <a
                  href={project.liveUrl}
                  className="button button--flex"
                  // target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bx-link-external"></i>
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="button button--flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="uil uil-github-alt"></i>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
