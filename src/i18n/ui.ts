export const languages = { pt: 'Português', en: 'English', fr: 'Français' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'pt';

// Edite aqui seus dados de contato (usados em todos os idiomas)
export const profile = {
  name: 'Pedro Henrique',
  whatsapp: '5592985823982',
  email: 'henriquesilvamoura81@gmail.com',
  github: 'https://github.com/PedroHMour',
  linkedin: 'https://www.linkedin.com/in/pedro-h-aab8a514b/',
};

type Service = { icon: string; title: string; text: string };
type Step = { title: string; text: string };

export interface Dict {
  meta: { title: string; description: string };
  nav: { services: string; process: string; projects: string; stack: string; contact: string };
  hero: { badge: string; title: string; highlight: string; text: string; cta: string; cv: string };
  services: { title: string; subtitle: string; items: Service[] };
  process: { title: string; subtitle: string; steps: Step[] };
  projects: { title: string; subtitle: string; view: string; empty: string };
  stack: { title: string };
  contact: { title: string; text: string; whatsapp: string; email: string; msg: string };
  footer: string;
}

export const ui: Record<Lang, Dict> = {
  pt: {
    meta: {
      title: 'Pedro Henrique | Desenvolvedor Freelancer: Automação, IA, Web e SaaS',
      description:
        'Desenvolvedor freelancer: automações em Python, bots, integrações, IA, landing pages, WordPress, Next.js e SaaS sob medida.',
    },
    nav: { services: 'Serviços', process: 'Processo', projects: 'Projetos', stack: 'Stack', contact: 'Contato' },
    hero: {
      badge: 'Disponível para novos projetos',
      title: 'Eu transformo ideias e tarefas repetitivas em',
      highlight: 'software que gera resultado.',
      text: 'Automações, bots, integrações, IA, sites e SaaS sob medida. Do primeiro contato à entrega, com comunicação clara e prazo combinado.',
      cta: 'Pedir orçamento',
      cv: 'Baixar currículo',
    },
    services: {
      title: 'O que eu faço',
      subtitle: 'Soluções para economizar tempo, vender mais e escalar o seu negócio.',
      items: [
        { icon: '⚙️', title: 'Automações com Python', text: 'Scripts e rotinas que eliminam trabalho manual: planilhas, relatórios, scraping, e-mails e arquivos.' },
        { icon: '🤖', title: 'Bots', text: 'Bots para WhatsApp, Telegram e Discord para atendimento, vendas e notificações.' },
        { icon: '🧠', title: 'IA aplicada', text: 'Assistentes, chatbots e fluxos com LLMs integrados aos dados e sistemas da sua empresa.' },
        { icon: '🔌', title: 'Integrações e APIs', text: 'Conecto CRMs, ERPs, gateways de pagamento e ferramentas para que conversem entre si.' },
        { icon: '📊', title: 'Dashboards', text: 'Painéis claros com os números que importam, atualizados automaticamente.' },
        { icon: '🚀', title: 'Landing pages e WordPress', text: 'Páginas rápidas, responsivas e focadas em conversão, com SEO bem feito.' },
        { icon: '🧩', title: 'SaaS e sistemas web', text: 'Aplicações completas com React, Next.js e NestJS, do MVP à escala.' },
      ],
    },
    process: {
      title: 'Como eu trabalho',
      subtitle: 'Um processo simples e transparente.',
      steps: [
        { title: 'Conversa', text: 'Entendo o problema, o objetivo e o orçamento.' },
        { title: 'Proposta', text: 'Escopo, prazo e valor definidos antes de começar.' },
        { title: 'Desenvolvimento', text: 'Entregas parciais e acompanhamento constante.' },
        { title: 'Entrega e suporte', text: 'Deploy, documentação e suporte pós-entrega.' },
      ],
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Alguns trabalhos e estudos de caso.',
      view: 'Ver projeto',
      empty: 'Em breve',
    },
    stack: { title: 'Tecnologias' },
    contact: {
      title: 'Vamos conversar sobre o seu projeto?',
      text: 'Me conte a sua ideia. Respondo rápido e sem compromisso.',
      whatsapp: 'Chamar no WhatsApp',
      email: 'Enviar e-mail',
      msg: 'Olá! Vi seu portfólio e gostaria de um orçamento.',
    },
    footer: 'Todos os direitos reservados.',
  },
  en: {
    meta: {
      title: 'Pedro Henrique | Freelance Developer: Automation, AI, Web & SaaS',
      description:
        'Freelance developer: Python automation, bots, integrations, AI, landing pages, WordPress, Next.js and custom SaaS.',
    },
    nav: { services: 'Services', process: 'Process', projects: 'Projects', stack: 'Stack', contact: 'Contact' },
    hero: {
      badge: 'Available for new projects',
      title: 'I turn ideas and repetitive tasks into',
      highlight: 'software that delivers results.',
      text: 'Automation, bots, integrations, AI, websites and custom SaaS. From first contact to delivery, with clear communication and agreed deadlines.',
      cta: 'Request a quote',
      cv: 'Download résumé',
    },
    services: {
      title: 'What I do',
      subtitle: 'Solutions to save time, sell more and scale your business.',
      items: [
        { icon: '⚙️', title: 'Python automation', text: 'Scripts and workflows that remove manual work: spreadsheets, reports, scraping, emails and files.' },
        { icon: '🤖', title: 'Bots', text: 'WhatsApp, Telegram and Discord bots for support, sales and notifications.' },
        { icon: '🧠', title: 'Applied AI', text: 'Assistants, chatbots and LLM workflows connected to your company data and systems.' },
        { icon: '🔌', title: 'Integrations & APIs', text: 'I connect CRMs, ERPs, payment gateways and tools so they talk to each other.' },
        { icon: '📊', title: 'Dashboards', text: 'Clear panels with the numbers that matter, updated automatically.' },
        { icon: '🚀', title: 'Landing pages & WordPress', text: 'Fast, responsive, conversion-focused pages with solid SEO.' },
        { icon: '🧩', title: 'SaaS & web apps', text: 'Full applications with React, Next.js and NestJS, from MVP to scale.' },
      ],
    },
    process: {
      title: 'How I work',
      subtitle: 'A simple and transparent process.',
      steps: [
        { title: 'Talk', text: 'I understand the problem, the goal and the budget.' },
        { title: 'Proposal', text: 'Scope, deadline and price agreed before we start.' },
        { title: 'Development', text: 'Incremental deliveries and constant updates.' },
        { title: 'Delivery & support', text: 'Deployment, documentation and after-sales support.' },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle: 'Selected work and case studies.',
      view: 'View project',
      empty: 'Coming soon',
    },
    stack: { title: 'Technologies' },
    contact: {
      title: "Let's talk about your project",
      text: "Tell me your idea. I reply fast and there's no commitment.",
      whatsapp: 'Chat on WhatsApp',
      email: 'Send an email',
      msg: 'Hi! I saw your portfolio and would like a quote.',
    },
    footer: 'All rights reserved.',
  },
  fr: {
    meta: {
      title: 'Pedro Henrique | Développeur freelance : automatisation, IA, web et SaaS',
      description:
        "Développeur freelance : automatisation Python, bots, intégrations, IA, landing pages, WordPress, Next.js et SaaS sur mesure.",
    },
    nav: { services: 'Services', process: 'Méthode', projects: 'Projets', stack: 'Stack', contact: 'Contact' },
    hero: {
      badge: 'Disponible pour de nouveaux projets',
      title: 'Je transforme vos idées et tâches répétitives en',
      highlight: 'logiciels qui produisent des résultats.',
      text: "Automatisation, bots, intégrations, IA, sites web et SaaS sur mesure. Du premier contact à la livraison, avec une communication claire et des délais respectés.",
      cta: 'Demander un devis',
      cv: 'Télécharger le CV',
    },
    services: {
      title: 'Ce que je fais',
      subtitle: 'Des solutions pour gagner du temps, vendre plus et faire grandir votre activité.',
      items: [
        { icon: '⚙️', title: 'Automatisation Python', text: 'Scripts et workflows qui suppriment le travail manuel : tableurs, rapports, scraping, e-mails et fichiers.' },
        { icon: '🤖', title: 'Bots', text: 'Bots WhatsApp, Telegram et Discord pour le support, la vente et les notifications.' },
        { icon: '🧠', title: 'IA appliquée', text: "Assistants, chatbots et workflows LLM connectés aux données et systèmes de votre entreprise." },
        { icon: '🔌', title: 'Intégrations et API', text: 'Je connecte CRM, ERP, passerelles de paiement et outils pour qu’ils communiquent.' },
        { icon: '📊', title: 'Tableaux de bord', text: 'Des tableaux clairs avec les chiffres qui comptent, mis à jour automatiquement.' },
        { icon: '🚀', title: 'Landing pages et WordPress', text: 'Pages rapides, responsives et axées conversion, avec un bon SEO.' },
        { icon: '🧩', title: 'SaaS et applications web', text: 'Applications complètes avec React, Next.js et NestJS, du MVP à la montée en charge.' },
      ],
    },
    process: {
      title: 'Ma méthode',
      subtitle: 'Un processus simple et transparent.',
      steps: [
        { title: 'Échange', text: 'Je comprends le problème, l’objectif et le budget.' },
        { title: 'Proposition', text: 'Périmètre, délai et prix définis avant de commencer.' },
        { title: 'Développement', text: 'Livraisons progressives et suivi constant.' },
        { title: 'Livraison et support', text: 'Déploiement, documentation et support après livraison.' },
      ],
    },
    projects: {
      title: 'Projets',
      subtitle: 'Une sélection de réalisations et études de cas.',
      view: 'Voir le projet',
      empty: 'Bientôt',
    },
    stack: { title: 'Technologies' },
    contact: {
      title: 'Parlons de votre projet',
      text: 'Racontez-moi votre idée. Je réponds vite et sans engagement.',
      whatsapp: 'Écrire sur WhatsApp',
      email: 'Envoyer un e-mail',
      msg: 'Bonjour ! J’ai vu votre portfolio et je souhaiterais un devis.',
    },
    footer: 'Tous droits réservés.',
  },
};
