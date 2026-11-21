import Image from "next/image";

type Project = {
  name: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  status: string;
  tags: readonly string[];
  number: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <Image
          className="project-image"
          src={project.image}
          alt={project.imageAlt}
          width={1200}
          height={820}
          sizes="(max-width: 760px) 100vw, 50vw"
        />
        <span className="preview-label">Temporary visual</span>
      </div>
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.number}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tag-list" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
        <span className="project-status">{project.status}</span>
      </div>
    </article>
  );
}
