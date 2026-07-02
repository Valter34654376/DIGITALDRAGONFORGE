import { ArrowRight, Code2, Flame, Rocket, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Magnetic } from "./Magnetic";

export function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-copy reveal">
        <div className="status-badge">
          <span />
          Digital Dragon Forge · disponível para projetos
        </div>

        <p className="eyebrow">sites · ia · automações · presença digital</p>

        <h1>
          Crio presença digital com cara de empresa grande.
        </h1>

        <p className="hero-text">
          Sites, landing pages, portfólios e automações com visual premium, estrutura profissional e foco em resultado. Tecnologia aplicada para transformar ideia em projeto real.
        </p>

        <div className="hero-actions">
          <a className="button primary" href="#projetos">
            Ver projetos <ArrowRight size={18} />
          </a>
          <a className="button glass" href="#contato">
            Falar comigo
          </a>
        </div>

        <div className="hero-metrics">
          <div>
            <strong>TI</strong>
            <small>Visão técnica</small>
          </div>
          <div>
            <strong>UI</strong>
            <small>Visual premium</small>
          </div>
          <div>
            <strong>IA</strong>
            <small>Automação real</small>
          </div>
        </div>
      </div>

      <div className="hero-photo-area reveal" aria-label="Área para foto de fundo do Valter">
        <div className="hero-photo-bg" />
        <div className="hero-photo-overlay" />
        <div className="hero-photo-reflection" />
        <div className="hero-photo-frame" />

        <div className="photo-signature">
          <small>Founder / Developer</small>
          <b>Valter Luiz</b>
          <span>Sites · TI · IA · Automações</span>
        </div>

        <Magnetic className="floating-hud hud-one">
          <Zap size={18} /> Sites rápidos
        </Magnetic>

        <Magnetic className="floating-hud hud-two">
          <Sparkles size={18} /> Visual premium
        </Magnetic>

        <Magnetic className="floating-hud hud-three">
          <Code2 size={18} /> Código limpo
        </Magnetic>

        <Magnetic className="floating-hud hud-four">
          <Flame size={18} /> Projetos reais
        </Magnetic>

        <div className="hero-tech-strip">
          <span><Rocket size={15} /> Performance</span>
          <span><ShieldCheck size={15} /> Segurança</span>
          <span><Sparkles size={15} /> Experiência</span>
        </div>
      </div>
    </section>
  );
}
