import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { ActiveLink } from './ActiveLink';

export function GlobalNavigation() {
  return (
    <nav className="sticky left-0 top-0 z-40 w-full sm:top-6  ">
      <div className="[@supports(backdrop-filter:blur(0px))]:bg-opacity-10] mx-auto flex max-w-4xl items-center justify-between border-b bg-white bg-opacity-50 p-4 py-3 text-sm backdrop-blur transition-colors   dark:border-zinc-600 dark:bg-zinc-900 dark:bg-opacity-25 sm:rounded-lg sm:border lg:px-6 ">
        <Link
          className="group flex items-center justify-center rounded-full bg-white bg-gradient-to-r from-green-200 via-green-400 to-green-500 bg-[length:400%_400%] transition hover:scale-105 hover:animate-border focus:outline-none focus:ring-0 "
          href="/"
        >
          <div className="rounded-full p-[3px] ">
            <img
              src="https://via.placeholder.com/200x200"
              className="invisible block h-10 w-10 rounded-full"
            />
          </div>
        </Link>
        <nav className="flex items-center space-x-4">
          <ActiveLink
            href="/"
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline  dark:text-zinc-400 dark:hover:text-zinc-200 [&.active]:text-zinc-800 dark:[&.active]:text-zinc-200"
          >
            <span>Home</span>
          </ActiveLink>
          <ActiveLink
            href="/posts"
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline  dark:text-zinc-400 dark:hover:text-zinc-200 [&.active]:text-zinc-800 dark:[&.active]:text-zinc-200"
          >
            <span>Posts</span>
          </ActiveLink>
          <ActiveLink
            href="/uses"
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline  dark:text-zinc-400 dark:hover:text-zinc-200 [&.active]:text-zinc-800 dark:[&.active]:text-zinc-200"
          >
            <span>Uses</span>
          </ActiveLink>
          <ActiveLink
            href="/about"
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline  dark:text-zinc-400 dark:hover:text-zinc-200 [&.active]:text-zinc-800 dark:[&.active]:text-zinc-200"
          >
            <span>About</span>
          </ActiveLink>
          <ActiveLink
            href="/contact"
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200 [&.active]:text-zinc-800 dark:[&.active]:text-zinc-200"
          >
            <span>Contact</span>
          </ActiveLink>

          <SunIcon className="h-4 w-4" />
          <MoonIcon className="h-4 w-4" />
        </nav>
      </div>
    </nav>
  );
}
