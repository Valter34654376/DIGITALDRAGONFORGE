import { services } from "../data";
import { Magnetic } from "./Magnetic";

export function Services() {
  return (
    <section id="servicos" className="section services-section">
      <div className="section-head reveal">
        <p className="eyebrow">serviços</p>
        <h2>O que eu posso construir para você.</h2>
        <p>
          Soluções digitais para quem precisa sair do improviso e apresentar algo com estética, estrutura e intenção comercial.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <Magnetic key={service.title} className="service-card reveal">
              <div className="service-top">
                <Icon size={30} />
                <span>{String(index + 1).padStart(2, "0")} // ativo</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.text}</p>

              <div className="service-tags">
                {service.tags.map(tag => <small key={tag}>{tag}</small>)}
              </div>
            </Magnetic>
          );
        })}
      </div>
    </section>
  );
}
