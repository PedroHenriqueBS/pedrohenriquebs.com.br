import type { Localized } from "../i18n";
import streamingScreenshot from "../assets/projects/streaming.webp";
import playstationScreenshot from "../assets/projects/lp-playstation.webp";

export interface Project {
  name: string;
  repo: string;
  url: string;
  language: string;
  screenshot: string;
  description: Localized;
  tags: readonly string[];
}

export const featuredProjects: readonly Project[] = [
  {
    name: "DevFlix",
    repo: "streaming",
    url: "https://github.com/PedroHenriqueBS/streaming",
    language: "TypeScript",
    screenshot: streamingScreenshot,
    description: {
      pt: "Plataforma de streaming completa: Vue 3, Pinia e Tailwind no front, NestJS, Prisma e PostgreSQL no back. Autenticação JWT, múltiplos perfis por conta e catálogo alimentado pela API do TMDB.",
      en: "Full streaming platform: Vue 3, Pinia and Tailwind on the front end, NestJS, Prisma and PostgreSQL on the back end. JWT auth, multiple profiles per account and a catalog powered by the TMDB API.",
    },
    tags: ["Vue 3", "NestJS", "Prisma", "PostgreSQL"],
  },
  {
    name: "LP PlayStation",
    repo: "lp-playstation",
    url: "https://github.com/PedroHenriqueBS/lp-playstation",
    language: "TypeScript",
    screenshot: playstationScreenshot,
    description: {
      pt: "Landing page construída com Angular, Tailwind e Swiper, explorando componentes e carrosséis interativos.",
      en: "Landing page built with Angular, Tailwind and Swiper, exploring components and interactive carousels.",
    },
    tags: ["Angular", "TailwindCSS", "Swiper"],
  },
];
