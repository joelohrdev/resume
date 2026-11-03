# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Joe Lohr's one-page portfolio site (joelohr.com), built with Astro 7 (Node >= 22.23.4). No UI framework or CSS framework: plain `.astro` components with scoped `<style>` blocks. There's one light theme, with no dark mode or theme toggle, on purpose.

## Commands

- `npm run dev`: dev server at `localhost:4321`. For agent sessions, use `astro dev --background` (see AGENTS.md).
- `npm run build`: production build to `./dist/`
- `npm run preview`: serve the built site locally
- `npm run pdf`: build, then print `/resume` to `pdf/joe-lohr-resume.pdf` with headless Chrome. Commit the PDF afterward.

There's no test runner, linter or `astro check` set up.

## Architecture

- `src/data/resume.ts` holds all resume content (profile, jobs, projects, skills). Edit copy there, not in the page.
- `src/layouts/Base.astro` has the `<head>`, the header (photo, name, contact links), the global color tokens on `:root`, and all the shared styles, including print styles.
- `src/pages/index.astro` is the public home page, set up as a portfolio: summary, selected work, case study, a short experience section and the contribution graph. It leaves out the detailed job bullets and skills on purpose.
- `src/pages/resume.astro` is the full resume. It isn't linked, is `noindex`, and is filtered out of the sitemap. It exists only so `npm run pdf` has a page to print; the PDF goes to `pdf/joe-lohr-resume.pdf`, which isn't deployed.
- `src/components/ContributionGraph.astro` renders the GitHub contribution graph for `jlarm`. `src/lib/contributions.ts` fetches `github.com/users/<user>/contributions?from=…&to=…` **at build time** (no token) and parses GitHub's HTML: `data-date` and `data-level` on each `<td>`, and the count from the matching `<tool-tip for=id>`. If GitHub changes that markup or the fetch fails, the build still succeeds and the section falls back to a profile link. The graph only updates when the site is rebuilt.
- Images in `src/assets/` go through `astro:assets` `<Image>`.
- Deployed on Vercel as static files from `joelohrdev/resume`. `vercel.json` redirects the old site's `/blog`, `/tags`, `/tools` and `/rss.xml` URLs to `/`.
- `.github/workflows/nightly-rebuild.yml` calls a Vercel deploy hook (repo secret `VERCEL_DEPLOY_HOOK`) every night so the contribution graph stays current.
- `@astrojs/sitemap` generates `/sitemap-index.xml`; it needs `site` in `astro.config.mjs`.
