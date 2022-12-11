import { ActiveLink } from './ActiveLink';

export function GlobalNavigation() {
  return (
    <nav className="sticky left-0 top-0 w-full sm:top-6  ">
      <div className="[@supports(backdrop-filter:blur(0px))]:bg-opacity-10] mx-auto flex max-w-4xl items-center justify-between border-b bg-white bg-opacity-50 p-4 py-3 text-sm backdrop-blur transition-colors  hover:bg-opacity-100 sm:rounded-lg sm:border lg:px-6 ">
        <a
          className="group flex items-center justify-center rounded-full bg-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-[length:400%_400%] transition hover:scale-105 hover:animate-border focus:outline-none focus:ring-0 "
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
          <ActiveLink
            href="/"
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline [&.active]:text-zinc-800"
          >
            <span>Home</span>
          </ActiveLink>
          <ActiveLink
            href="/posts"
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline [&.active]:text-zinc-800"
          >
            <span>Posts</span>
          </ActiveLink>
          <ActiveLink
            href="/uses"
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline [&.active]:text-zinc-800"
          >
            <span>Uses</span>
          </ActiveLink>
          <ActiveLink
            href="/about"
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline [&.active]:text-zinc-800"
          >
            <span>About</span>
          </ActiveLink>
          <ActiveLink
            href="/contact"
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline [&.active]:text-zinc-800"
          >
            <span>Contact</span>
          </ActiveLink>
        </nav>
      </div>
    </nav>
  );
}
