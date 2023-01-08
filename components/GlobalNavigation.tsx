'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import { ActiveLink } from './ActiveLink';

export function GlobalNavigation() {
  return (
    <nav className="sticky left-0 top-0 z-40 w-full sm:top-6  ">
      <div className="[@supports(backdrop-filter:blur(0px))]:bg-opacity-50] mx-auto flex max-w-5xl items-center justify-between border-b bg-white bg-opacity-50 p-4 py-2 text-sm backdrop-blur  transition-colors dark:border-transparent dark:bg-zinc-700 dark:bg-opacity-25 dark:shadow-sm sm:rounded-lg sm:border lg:px-6 ">
        <Link
          className="group flex items-center justify-center rounded-full bg-white bg-gradient-to-r from-blue-500 via-green-500 to-purple-600 bg-[length:400%_400%] transition hover:scale-105 hover:animate-border focus:outline-none focus:ring-0 "
          href="/"
        >
          <div className="rounded-full p-[3px] transition-transform group-hover:scale-105 ">
            <Image
              src="/ProfilePicture.png"
              className="block h-10 w-10 rounded-full"
              width={200}
              height={200}
              alt="Profile Picture"
            />
          </div>
        </Link>
        <nav className="flex items-center space-x-4">
          <ActiveLink
            href="/"
            className="hidden text-zinc-700 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400  dark:hover:text-zinc-200 sm:block [&.active]:text-zinc-900 [&.active]:underline dark:[&.active]:text-zinc-200"
          >
            <span>Home</span>
          </ActiveLink>
          <ActiveLink
            href="/posts"
            className="text-zinc-700 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline  dark:text-zinc-400 dark:hover:text-zinc-200 [&.active]:text-zinc-900 [&.active]:underline dark:[&.active]:text-zinc-200"
          >
            <span>Posts</span>
          </ActiveLink>
          <ActiveLink
            href="/about"
            className="text-zinc-700 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline  dark:text-zinc-400 dark:hover:text-zinc-200 [&.active]:text-zinc-900 [&.active]:underline dark:[&.active]:text-zinc-200"
          >
            <span>About</span>
          </ActiveLink>
          <ActiveLink
            href="/contact"
            className="text-zinc-700 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200 [&.active]:text-zinc-900 [&.active]:underline dark:[&.active]:text-zinc-200"
          >
            <span>Contact</span>
          </ActiveLink>

          <div className="cursor-pointer text-zinc-700 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 ">
            <SunIcon
              className="hidden h-4 w-4 dark:block"
              onClick={() => {
                localStorage.setItem('darkMode', 'false');
                document
                  .getElementsByTagName('html')[0]
                  .classList.toggle('dark');
              }}
            />
            <MoonIcon
              className="block h-4 w-4 dark:hidden"
              onClick={() => {
                localStorage.setItem('darkMode', 'true');
                document
                  .getElementsByTagName('html')[0]
                  .classList.toggle('dark');
              }}
            />
          </div>
        </nav>
      </div>
    </nav>
  );
}
