import Image from 'next/image';
import Link from 'next/link';
import { ActiveLink } from './ActiveLink';
import DarkModeToggle from './DarkModeToggle';

export function GlobalNavigation() {
  return (
    <nav className="sticky left-0 top-0 z-40 w-full sm:top-6  ">
      <div className="mx-auto flex max-w-5xl items-center justify-between border-b bg-white/50 p-4 py-2 text-sm backdrop-blur-sm  transition-colors duration-150 dark:border-zinc-600 dark:bg-zinc-700/25 dark:shadow-xs sm:rounded-lg lg:px-6 ">
        <Link
          className="group flex items-center justify-center rounded-full bg-white bg-linear-to-r from-blue-500 via-green-500 to-purple-600 bg-size-[400%_400%] transition hover:scale-105 hover:animate-border focus:outline-hidden focus:ring-0 "
          href="/"
        >
          <div className="rounded-full p-[3px] transition-transform group-hover:scale-105 ">
            <Image
              src="/ProfilePicture.jpg"
              className="block h-10 w-10 rounded-full"
              width={200}
              height={200}
              alt="Profile Picture"
            />
          </div>
        </Link>
        <nav className="flex items-center [&>*:not(:first-child)]:ml-4">
          <ActiveLink
            href="/"
            className="hidden text-zinc-700 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-200  dark:hover:text-zinc-200 sm:block [&.active]:text-zinc-900 [&.active]:underline dark:[&.active]:text-zinc-100"
          >
            <span>Home</span>
          </ActiveLink>
          <ActiveLink
            href="/posts"
            className="text-zinc-700 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline  dark:text-zinc-200 dark:hover:text-zinc-200 [&.active]:text-zinc-900 [&.active]:underline dark:[&.active]:text-zinc-100"
          >
            <span>Posts</span>
          </ActiveLink>
          <ActiveLink
            href="/about"
            className="text-zinc-700 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline  dark:text-zinc-200 dark:hover:text-zinc-200 [&.active]:text-zinc-900 [&.active]:underline dark:[&.active]:text-zinc-100"
          >
            <span>About</span>
          </ActiveLink>
          <ActiveLink
            href="/contact"
            className="text-zinc-700 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-200 dark:hover:text-zinc-200 [&.active]:text-zinc-900 [&.active]:underline dark:[&.active]:text-zinc-100"
          >
            <span>Contact</span>
          </ActiveLink>

          <DarkModeToggle />
        </nav>
      </div>
    </nav>
  );
}
