import { BreadCrumbs } from '#/components/Breadcrumbs';
import { BackDrop } from '#/components/BackDrop';
import { Footer } from '#/components/Footer';
import { GlobalNavigation } from '#/components/GlobalNavigation';
import '#/styles/globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { AnalyticsWrapper } from '#/components/Analytics';
import type { Metadata } from 'next';
import 'highlight.js/styles/github-dark.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Peter White',
  description:
    'Full Stack Developer in Norway, happily building things on the internet since 2008',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetBrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

// Inline script that applies the "dark" class to <html> before the first paint,
// preventing a flash of the wrong theme. Uses dangerouslySetInnerHTML to inject
// the script directly into the HTML — the standard pattern used by next-themes
// and other Next.js dark mode implementations.
const THEME_SCRIPT = `
  (function () {
    try {
      var classList = document.documentElement.classList;
      var stored = localStorage.getItem('darkMode');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (stored === 'true' || (!stored && prefersDark)) {
        classList.add('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrains.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }}
        />
      </head>
      <body className="relative bg-zinc-100 text-zinc-800 selection:bg-vercel-blue/90 selection:text-white dark:bg-zinc-900 dark:text-zinc-200">
        <AnalyticsWrapper />
        <BackDrop />

        <GlobalNavigation />

        <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:my-4 ">
          <div className="space-y-4 py-6">
            <BreadCrumbs />

            <main className="mt-6"> {children}</main>
          </div>

          <div className="py-4">
            <Footer />
          </div>
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
