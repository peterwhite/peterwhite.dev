import { BreadCrumbs } from '#/components/Breadcrumbs';
import { BackDrop } from '#/components/BackDrop';
import { Footer } from '#/components/Footer';
import { GlobalNavigation } from '#/components/GlobalNavigation';
import '#/styles/globals.css';
import { Inter, JetBrains_Mono } from '@next/font/google';
import Script from 'next/script';
import Head from 'next/head';

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
      className={`${inter.variable} ${jetBrains.variable} invisible antialiased
    `}
    >
      <body className="relative bg-zinc-100 text-zinc-800 ease-linear selection:bg-vercel-blue/90 selection:text-white dark:bg-zinc-900 dark:text-zinc-200">
        <BackDrop />

        <GlobalNavigation />

        <div className="mx-auto max-w-4xl space-y-8 py-8 sm:my-4 sm:px-2 lg:px-8">
          <div className="bg-white bg-opacity-75 transition-colors dark:border-zinc-600 dark:bg-transparent dark:bg-opacity-75 dark:backdrop-blur-xl sm:rounded-lg sm:border dark:sm:border-transparent">
            <div className="space-y-4 p-6">
              <BreadCrumbs />

              <div className="mt-6"> {children}</div>
            </div>
          </div>

          <div className="bg-white bg-opacity-75 transition-colors dark:border-zinc-600 dark:bg-transparent dark:bg-opacity-75 dark:backdrop-blur-xl sm:rounded-lg sm:border dark:sm:border-transparent">
            <div className="p-4 lg:p-6">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
