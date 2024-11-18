import data from "../../data/data.json"

function ProjectCard({ title, description, img_url }) {
  return (
    <div className="project-card">
      <img src={img_url}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      {data.projects.map((project) => (
        <ProjectCard key={project.id} 
          title={project.title} 
          description={project.description} 
          img_url={project.img_url}/>
      ))}
    </div>
  );
}

export default Projects;
