# pedrohenrique.com

Portfólio pessoal de **Pedro Henrique** — desenvolvedor Full Stack.

Site com tema dark estilo terminal, bilíngue (PT/EN), com dados dinâmicos do GitHub e uma seção de apoio que recebe contribuições via **PIX** (AbacatePay).

## Stack

- **Frontend:** [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org) + [Vite](https://vite.dev)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com)
- **Backend:** [Vercel Serverless Functions](https://vercel.com/docs/functions) (`/api`)
- **Pagamentos:** [AbacatePay](https://abacatepay.com) — QR Code PIX com valor customizado
- **Dados dinâmicos:** [GitHub REST API](https://docs.github.com/rest) (repositórios e seguidores, com fallback estático)

## Estrutura

```
api/                  # Serverless functions (Vercel)
  _lib/abacatepay.ts  # Client HTTP do AbacatePay (a chave nunca chega ao browser)
  donations.ts        # POST cria QR Code PIX · GET ?id= consulta o status
src/
  components/         # layout/ (navbar, footer...) · sections/ (uma por seção) · ui/ (peças reutilizáveis)
  data/               # Conteúdo do site (perfil, skills, projetos, experiência, formação)
  hooks/              # useTypewriter, useRevealOnScroll, useGitHubProfile, useDonation
  i18n/               # Contexto de idioma + dicionários PT/EN
  lib/                # Clients (GitHub, /api/donations) e utilitários de formatação
  styles/             # Tokens de design (Tailwind @theme) e estilos globais
```

## Rodando localmente

```bash
npm install
npm run dev        # somente o frontend (a seção de apoio fica indisponível)
```

Para rodar **com as functions** (necessário para testar as doações):

```bash
cp .env.example .env.local   # e preencha ABACATEPAY_API_KEY com a chave de dev
npx vercel dev               # sobe frontend + /api na mesma porta
```

> Em modo dev do AbacatePay nenhum pagamento real é processado — dá para simular
> a confirmação pelo endpoint `pixQrCode/simulate-payment` ou pelo painel.

### Variáveis de ambiente

| Variável             | Descrição                                             |
| -------------------- | ----------------------------------------------------- |
| `ABACATEPAY_API_KEY` | Chave secreta da API do AbacatePay (dev ou produção). |

## Scripts

| Comando           | Ação                                    |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento (Vite)      |
| `npm run build`   | Type-check (`tsc -b`) + build de produção |
| `npm run lint`    | ESLint                                  |
| `npm run preview` | Serve o build de produção localmente    |

## Deploy (Vercel)

1. Importe o repositório em [vercel.com/new](https://vercel.com/new) — o preset **Vite** é detectado automaticamente e a pasta `api/` vira serverless functions.
2. Em **Settings → Environment Variables**, adicione `ABACATEPAY_API_KEY` com a chave de **produção**.
3. Aponte o domínio `pedrohenrique.com` em **Settings → Domains**.

Sem a variável configurada o site funciona normalmente — apenas a seção de apoio responde como indisponível.
