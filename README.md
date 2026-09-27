# Mohamed Boukadida — portfolio

Single-page portfolio for Werkstudent and part-time backend, DevOps, and fullstack roles. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Run locally

```bash
pnpm i
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
pnpm lint
pnpm build
pnpm start
pnpm format
```

## Edit content

All copy lives in [`content/site.ts`](content/site.ts): profile, experience, education, projects, and skills.

Project shape:

```ts
{
  id, title, status: "shipped" | "in_progress" | "planned",
  summary, stack, repoUrl, liveUrl, extraLinks, images, highlights
}
```

- Set `repoUrl` when a repository exists. Leave it `null` until then.
- Screenshots go in `public/projects/<id>/`. Add each file to that project’s `images` array with `src`, `alt`, `width`, and `height`. The page already renders whatever is in the array, including the screenshot dialog.
- Flight Automation is `in_progress`. CI/CD Pipeline Lab is `planned`.

The Resume buttons point at [`public/resume.pdf`](public/resume.pdf). Replace that file when the CV changes.

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new). Framework preset: Next.js. Package manager: pnpm. No extra build command.
3. Set the environment variable `NEXT_PUBLIC_SITE_URL` to the production origin, for example `https://your-domain.vercel.app`. It is used for canonical URLs, Open Graph, `sitemap.xml`, and `robots.txt`. If it is unset, those URLs fall back to `http://localhost:3000`.
4. No other environment variables are required. There is no contact backend; the contact action is a `mailto` link.

Analytics are off. Do not add a tracker unless you want one, and keep it privacy-friendly if you do.
