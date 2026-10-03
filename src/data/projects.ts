import type { Lang } from '../i18n/ui';

export interface Project {
  title: string;
  description: Record<Lang, string>;
  tags: string[];
  url?: string; // link ao vivo ou repositório
}

// Substitua pelos seus projetos reais (freelas e estudos de caso).
// Quando tiver `url`, o card vira um link.
export const projects: Project[] = [
  {
    title: 'Bot de atendimento',
    description: {
      pt: 'Bot de WhatsApp com IA para triagem de clientes e agendamento automático.',
      en: 'AI-powered WhatsApp bot for customer triage and automatic scheduling.',
      fr: 'Bot WhatsApp avec IA pour le tri des clients et la prise de rendez-vous automatique.',
    },
    tags: ['Python', 'OpenAI', 'WhatsApp API'],
  },
  {
    title: 'Dashboard de vendas',
    description: {
      pt: 'Painel em tempo real integrado ao ERP e ao gateway de pagamento.',
      en: 'Real-time dashboard integrated with the ERP and payment gateway.',
      fr: 'Tableau de bord en temps réel intégré à l’ERP et à la passerelle de paiement.',
    },
    tags: ['Next.js', 'NestJS', 'PostgreSQL'],
  },
  {
    title: 'Landing page de alta conversão',
    description: {
      pt: 'Página institucional rápida, com SEO e pontuação 100 no Lighthouse.',
      en: 'Fast marketing page with SEO and a 100 Lighthouse score.',
      fr: 'Page vitrine rapide, optimisée SEO, avec un score Lighthouse de 100.',
    },
    tags: ['Astro', 'Tailwind'],
  },
];

export const stack = [
  'Python', 'TypeScript', 'React', 'Next.js', 'NestJS', 'Astro', 'Tailwind',
  'WordPress', 'PostgreSQL', 'Docker', 'Git', 'OpenAI / LLMs',
];
