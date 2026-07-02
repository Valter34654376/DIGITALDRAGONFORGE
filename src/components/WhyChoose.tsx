import { differentials } from "../data";

export function WhyChoose() {
  return (
    <section className="section why-section">
      <div className="section-head reveal">
        <p className="eyebrow">diferenciais</p>
        <h2>Por que escolher a Digital Dragon Forge.</h2>
      </div>

      <div className="why-grid">
        {differentials.map((item, index) => {
          const Icon = item.icon;

          return (
            <article className="why-card reveal" key={item.title}>
              <div>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <Icon size={24} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
