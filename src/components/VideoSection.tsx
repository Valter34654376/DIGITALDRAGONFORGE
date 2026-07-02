import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section className="section video-section reveal">
      <div>
        <p className="eyebrow">apresentação</p>
        <h2>Conheça a mente por trás da Digital Dragon Forge.</h2>
        <p>
          Espaço pronto para colocar um vídeo seu explicando quem você é, o que faz e como pode ajudar o cliente.
        </p>
      </div>

      <div className="video-player">
        <div className="play-circle">
          <Play size={58} fill="currentColor" />
        </div>
        <span>COLOQUE SEU VÍDEO AQUI</span>
      </div>
    </section>
  );
}
