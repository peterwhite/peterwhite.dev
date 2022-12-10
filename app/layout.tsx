import '#/styles/globals.css';
import { BreadCrumbs } from '#/ui/BreadCrumbs';
import { Footer } from './footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <head />
      <body className=" relative bg-gray-100 antialiased selection:bg-vercel-blue/90 selection:text-white dark:bg-gray-900">
        {/* TODO: Global nav goes here */}

        <div className="relative">
          <nav className="sticky left-0 top-0 w-full sm:top-6  ">
            <div className="[@supports(backdrop-filter:blur(0px))]:bg-opacity-10] mx-auto flex max-w-4xl items-center justify-between border-b bg-white  bg-opacity-50 p-4 py-3 text-sm backdrop-blur transition-colors  hover:bg-opacity-100 sm:rounded-lg sm:border lg:px-6 ">
              <a
                className="group flex items-center justify-center rounded-full bg-gradient-to-tl from-pink-300/60 via-red-500/60 to-yellow-500/60 transition ease-out hover:scale-110 hover:from-pink-300 hover:via-red-500 hover:to-yellow-500 focus:outline-none focus-visible:outline-none"
                href="/"
              >
                <div className="rounded-full p-[2px] ">
                  <img
                    src="https://via.placeholder.com/200x200"
                    className="block h-10 w-10 rounded-full"
                  />
                </div>
              </a>
              <nav className="flex space-x-4">
                <span>Home</span>
                <span>Posts</span>
                <span>Uses</span>
                <span>Contact</span>
                <span>Dark/Light</span>
              </nav>
            </div>
          </nav>

          <div className="mx-auto max-w-4xl space-y-8 px-2 py-8 sm:my-4 lg:px-8">
            <div className="rounded-lg border bg-white bg-opacity-50 transition-colors hover:bg-opacity-100">
              <div className="space-y-2 p-4 lg:p-6">
                <BreadCrumbs />
                <div className="h-screen">{children}</div>
              </div>
            </div>

            <div className="rounded-lg border bg-white bg-opacity-50 transition-colors hover:bg-opacity-100">
              <div className="p-4 lg:p-6">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
