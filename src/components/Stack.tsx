import { stack } from "../data";

export function Stack() {
  const marquee = [...stack, ...stack];

  return (
    <section id="stack" className="section stack-section">
      <div className="section-head reveal">
        <p className="eyebrow">tecnologias</p>
        <h2>Stack usada em projetos reais.</h2>
        <p>
          Ferramentas para construir interfaces rápidas, responsivas, escaláveis e prontas para integrar com IA, APIs e automações.
        </p>
      </div>

      <div className="stack-marquee reveal">
        <div>
          {marquee.map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
        </div>
      </div>

      <div className="stack-cards reveal">
        <article><b>Front-end moderno</b><span>Interfaces responsivas, fluidas e bem organizadas.</span></article>
        <article><b>Performance</b><span>Código leve, rápido e preparado para boa experiência.</span></article>
        <article><b>SEO básico</b><span>Estrutura inicial para indexação e presença digital.</span></article>
        <article><b>Integrações</b><span>WhatsApp, formulários, APIs, automações e IA.</span></article>
      </div>
    </section>
  );
}
