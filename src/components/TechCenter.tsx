import { useState } from "react";
import { MousePointer2 } from "lucide-react";
import { modules } from "../data";

export function TechCenter() {
  const [active, setActive] = useState(modules[0]);

  return (
    <section className="section tech-section">
      <div className="section-head reveal">
        <p className="eyebrow">central tecnológica</p>
        <h2>A engrenagem por trás de cada projeto.</h2>
        <p>
          Uma central visual para mostrar como design, código, IA, automação e estratégia se conectam.
        </p>
      </div>

      <div className="orbit-system reveal">
        <div className="orbit-grid" />

        <div className="orbit-core">
          <span>DIGITAL</span>
          <strong>DRAGON</strong>
          <span>FORGE</span>
        </div>

        {modules.map((module, index) => (
          <button
            key={module}
            className={`orbit-node node-${index} ${active === module ? "active" : ""}`}
            onClick={() => setActive(module)}
          >
            {module}
          </button>
        ))}

        <div className="orbit-info">
          <small><MousePointer2 size={14} /> módulo selecionado</small>
          <h3>{active}</h3>
          <p>
            {active} entra como parte do sistema: estratégia, interface, performance, mensagem e tecnologia trabalhando juntas para uma entrega profissional.
          </p>
        </div>
      </div>
    </section>
  );
}
