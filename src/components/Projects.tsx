import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "../data";

export function Projects() {
  return (
    <section id="projetos" className="section projects-section">
      <div className="section-head reveal">
        <p className="eyebrow">portfólio</p>
        <h2>Projetos com estética forte, função clara e foco em conversão.</h2>
        <p>
          Estrutura preparada para trocar os previews por imagens reais dos seus projetos em <b>src/assets</b>.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card reveal" key={project.title}>
            <div className={`project-preview preview-${index}`}>
              <span>case · {project.number}</span>
              <div className="project-browser">
                <div className="browser-top"><i /><i /><i /></div>
                <div className="browser-content">
                  <ExternalLink size={34} />
                  <b>{project.type}</b>
                  <small>Substitua por {project.image}</small>
                </div>
              </div>
            </div>

            <div className="project-body">
              <small>{project.number} · {project.type}</small>
              <h3>{project.title}</h3>
              <p>{project.text}</p>

              <div className="project-tags">
                {project.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>

              <a href="#contato">
                Quero algo assim <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
