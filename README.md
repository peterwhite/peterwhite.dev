# PeterWhite.dev Personal Website

Part blog, part playground, part excuse to experiment with `/app/` directory. PRs and feedback welcome.

Next.js introduced the `app/` directory (beta). This is the result of the [Layouts RFC](https://nextjs.org/blog/layouts-rfc) previously published for community feedback. This includes support for:

- **Layouts:** Easily share UI while preserving state and avoiding re-renders.
- **Server Components:** Making server-first the default for the most dynamic applications.
- **Streaming:** Display instant loading states and stream in updates.
- **Suspense for Data Fetching:** `async`/`await` support and the `use` hook for component-level fetching.

## Running Locally

1. Install dependencies: `npm` (Next Canary + ContentLayer requires --force right now (27/01/23))
2. Start the dev server: `npm run dev`
