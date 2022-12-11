import { BreadCrumbs } from '#/components/Breadcrumbs';
import { Footer } from '#/components/Footer';
import { GlobalNavigation } from '#/components/GlobalNavigation';
import '#/styles/globals.css';
import { Inter, JetBrains_Mono } from '@next/font/google';
import { usePathname } from 'next/navigation';

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
      className={`${inter.variable} ${jetBrains.variable} `}
      style={{ colorScheme: 'light' }}
    >
      <head />
      <body className="relative bg-zinc-100 antialiased selection:bg-vercel-blue/90 selection:text-white dark:bg-zinc-900">
        <GlobalNavigation />

        <div className="mx-auto max-w-4xl space-y-8 px-2 py-8 sm:my-4 lg:px-8">
          <div className="rounded-lg border bg-white bg-opacity-50 transition-colors hover:bg-opacity-100">
            <div className="space-y-4 p-6">
              <BreadCrumbs />

              <div className="mt-6"> {children}</div>
            </div>
          </div>

          <div className="rounded-lg border bg-white bg-opacity-50 transition-colors hover:bg-opacity-100">
            <div className="p-4 lg:p-6">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
