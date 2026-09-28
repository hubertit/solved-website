# SOLVED Website

Corporate website for SOLVED, built with Next.js, TypeScript and Tailwind CSS.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Docker

## Getting Started

### Requirements

- Node.js 20 or later
- npm

### Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser. The page updates as you edit files.

### Build for production

```bash
npm run build
npm start
```

## Run with Docker

Docker Desktop must be running first.

```bash
docker compose up -d --build
```

The site is served at http://localhost:3000.

Useful commands:

```bash
docker compose down       # stop and remove the container
docker compose logs -f    # watch live logs
```

Always use `--build` after changing code, otherwise Docker reuses the old image.

The container restarts automatically if it stops unexpectedly.

## Environment Variables

Copy the template and fill in real values:

```bash
cp .env.example .env
```

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 ID. Analytics stays inactive while this is empty. |

Never commit the `.env` file. Only `.env.example` is committed.

## Project Structure

```
src/
├── app/            Pages and routes (each folder is a URL)
│   ├── services/[slug]/     Individual service pages
│   ├── portfolio/[slug]/    Individual case study pages
│   ├── careers/[slug]/      Individual job pages
│   ├── sitemap.ts           Generates sitemap.xml
│   └── robots.ts            Generates robots.txt
├── components/     Reusable UI (Header, Footer, Hero, cards, forms)
├── content/        Site content as data files
└── lib/            Helpers (analytics)
```

## Managing Content

Content lives in `src/content/`, separate from the page layout. To add or edit content, change the data file and the pages update automatically:

| File | Controls |
|---|---|
| `services.ts` | Services grid and service detail pages |
| `industries.ts` | Industries section and page |
| `portfolio.ts` | Featured projects and case studies |
| `testimonials.ts` | Client testimonials |
| `team.ts` | Team members on the About page |
| `careers.ts` | Open job positions |
| `techStack.ts` | Technologies section |
| `process.ts` | Process steps |
| `whySolved.ts` | "Why SOLVED" pillars |

To add a new service, add one object to the array in `services.ts`. Its page, its card on the homepage, and its sitemap entry are generated automatically.

## Current Status

Placeholder content is still in use for: client logos, testimonials, team members, portfolio projects, stats and contact details. Replace these in `src/content/` and the relevant components once real information is available.

The Contact, Quote and Job Application forms currently log submissions to the browser console only. They still need a backend or email service to deliver submissions.

## Pages

Home, About, Services, Industries, Portfolio, Careers, Contact, Request a Quote, Privacy Policy, Terms & Conditions.

Not yet built: Insights (blog) and CMS/admin.