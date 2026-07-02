import { Mail, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="section contact-section">
      <div className="contact-box reveal">
        <p className="eyebrow">contato</p>
        <h2>Vamos tirar sua ideia do papel com tecnologia de verdade.</h2>
        <p>
          Me chame para criar um site, landing page, portfólio, automação ou solução digital com visual profissional.
        </p>

        <div className="contact-actions">
          <a className="button primary" href="https://wa.me/5538999999999" target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Falar no WhatsApp
          </a>
          <a className="button glass" href="mailto:valterluizdasilvaneto@gmail.com">
            <Mail size={18} /> Enviar e-mail
          </a>
        </div>

        <small>@digitaldragonforge · disponível para projetos</small>
      </div>
    </section>
  );
}
