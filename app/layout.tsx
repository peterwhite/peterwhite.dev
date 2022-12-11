import { BreadCrumbs } from '#/components/Breadcrumbs';
import { DarkModeBackDrop } from '#/components/DarkModeBackDrop';
import { Footer } from '#/components/Footer';
import { GlobalNavigation } from '#/components/GlobalNavigation';
import '#/styles/globals.css';
import { Inter, JetBrains_Mono } from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetBrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrains.variable} dark
    `}
    >
      <head />
      <body className="relative bg-zinc-100 text-zinc-800 antialiased selection:bg-vercel-blue/90 selection:text-white dark:bg-zinc-900 dark:text-zinc-200">
        <DarkModeBackDrop />

        <GlobalNavigation />

        <div className="mx-auto max-w-4xl space-y-8 py-8 sm:my-4 sm:px-2 lg:px-8">
          <div className="bg-white bg-opacity-50 transition-colors hover:bg-opacity-100 dark:border-zinc-600 dark:bg-zinc-900 dark:bg-opacity-25 dark:backdrop-blur-xl hover:dark:bg-opacity-75 sm:rounded-lg sm:border">
            <div className="space-y-4 p-6">
              <BreadCrumbs />

              <div className="mt-6"> {children}</div>
            </div>
          </div>

          <div className="bg-white bg-opacity-50 transition-colors hover:bg-opacity-100 dark:border-zinc-600 dark:bg-zinc-900 dark:bg-opacity-25 dark:backdrop-blur-xl hover:dark:bg-opacity-75 sm:rounded-lg sm:border">
            <div className="p-4 lg:p-6">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
