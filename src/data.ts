import {
  Bot,
  Code2,
  Flame,
  Globe2,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap
} from "lucide-react";

export const navigation = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#stack", label: "Stack" },
  { href: "#contato", label: "Contato" }
];

export const services = [
  {
    icon: Code2,
    title: "Desenvolvimento de Sites",
    text: "Sites institucionais modernos, responsivos, rápidos e com estética profissional para sua marca parecer maior.",
    tags: ["Responsivo", "Performance", "SEO"]
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    text: "Páginas com foco em conversão, copy estratégica, CTA forte, prova social e caminho direto para o WhatsApp.",
    tags: ["Conversão", "Leads", "WhatsApp"]
  },
  {
    icon: Layers3,
    title: "Soluções Digitais",
    text: "Sistemas e interfaces personalizados para organizar processos, apresentar produtos e transformar ideias em operação.",
    tags: ["Sistemas", "UX", "Escala"]
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    text: "Automatizações para reduzir tarefas repetitivas, organizar dados, criar relatórios e acelerar rotinas manuais.",
    tags: ["Fluxos", "Planilhas", "APIs"]
  },
  {
    icon: Globe2,
    title: "Marketing Digital",
    text: "Estrutura digital para posicionamento, presença online e comunicação visual focada em gerar oportunidades.",
    tags: ["Oferta", "Marca", "Tráfego"]
  },
  {
    icon: Bot,
    title: "Inteligência Artificial Aplicada",
    text: "Assistentes, chatbots, análise de informações e IA integrada aos processos reais do negócio.",
    tags: ["Chatbot", "IA", "Análise"]
  },
  {
    icon: Sparkles,
    title: "Projetos Personalizados",
    text: "Soluções sob medida, pensadas do zero, com estratégia, design e tecnologia alinhados ao objetivo.",
    tags: ["Sob medida", "Premium", "Único"]
  },
  {
    icon: ShieldCheck,
    title: "Otimização e Melhorias",
    text: "Revisão visual, ajustes de performance, melhoria de experiência e refinamento de páginas existentes.",
    tags: ["Refatoração", "UI", "UX"]
  }
];

export const projects = [
  {
    number: "01",
    type: "Cardápio Digital",
    title: "Pizzaria — Cardápio Digital",
    text: "Interface moderna para apresentação de produtos, categorias e chamada direta para pedidos via WhatsApp.",
    tags: ["HTML", "CSS", "WhatsApp"],
    image: "/src/assets/projeto-1.jpg"
  },
  {
    number: "02",
    type: "Portfólio Premium",
    title: "Portfólio Profissional",
    text: "Página pessoal com narrativa forte, visual premium, animações e foco em autoridade profissional.",
    tags: ["React", "Design", "SEO"],
    image: "/src/assets/projeto-2.jpg"
  },
  {
    number: "03",
    type: "Landing Page",
    title: "Academia — Captação",
    text: "Página de alto impacto para captar alunos, apresentar planos e levar visitantes para contato.",
    tags: ["Conversão", "CTA", "Mobile"],
    image: "/src/assets/projeto-3.jpg"
  },
  {
    number: "04",
    type: "Automação",
    title: "Fluxos com IA",
    text: "Automação de tarefas, análise de dados e classificação de leads com inteligência artificial.",
    tags: ["IA", "APIs", "Processos"],
    image: "/src/assets/projeto-4.jpg"
  }
];

export const modules = [
  "Desenvolvimento Web",
  "Landing Pages",
  "Inteligência Artificial",
  "Automações",
  "Marketing Digital",
  "Projetos Personalizados"
];

export const stack = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "TailwindCSS", "Node.js", "Git", "APIs", "IA", "WordPress", "Lovable", "SEO"
];

export const differentials = [
  { icon: Flame, title: "Atendimento próximo", text: "Você fala com quem entende o projeto e acompanha cada etapa com clareza." },
  { icon: Zap, title: "Projetos personalizados", text: "Nada de aparência genérica. O visual é pensado para o objetivo do negócio." },
  { icon: Sparkles, title: "Aprendizado constante", text: "Tecnologia evolui rápido. A Digital Dragon Forge evolui junto." },
  { icon: ShieldCheck, title: "Foco em qualidade", text: "Design, responsividade, performance e organização não são opcionais." },
  { icon: Bot, title: "Soluções modernas", text: "IA, automações, integrações e interfaces atuais para projetos reais." },
  { icon: Rocket, title: "Compromisso com resultado", text: "O site precisa impressionar, mas também precisa ajudar a gerar oportunidades." }
];
