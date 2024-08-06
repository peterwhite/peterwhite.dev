export function Footer() {
  const duolingoStreak = Math.ceil(
    (new Date().getTime() - new Date('08/31/2016').getTime()) /
      (1000 * 3600 * 24),
  );

  return (
    <div className="text-sm">
      <div className="mb-4 w-full items-center space-x-0 border-b pb-4 dark:border-zinc-600 sm:flex-row  sm:space-x-2">
        <div className="flex gap-x-2 divide-x dark:divide-zinc-600 ">
          <p className=" font-medium text-zinc-800 dark:text-zinc-200 ">
            🦉 {duolingoStreak} days
          </p>
          <p className="truncate pl-2  text-zinc-700 dark:text-zinc-400 ">
            Duolingo Streak
          </p>
        </div>
      </div>

      <div className=" mb-4 grid w-full grid-cols-1 gap-4 border-b pb-4 dark:border-zinc-600 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <a
            className="text-zinc-700 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
            href="/"
          >
            Home
          </a>
          <a
            className="text-zinc-700 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
            href="/posts"
          >
            Posts
          </a>
        </div>

        <div className="flex flex-col space-y-4">
          <a
            className="text-zinc-700 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
            href="/about"
          >
            About
          </a>
          <a
            className="text-zinc-700 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
            href="/contact"
          >
            Contact
          </a>
        </div>

        <div className="flex flex-col space-y-4">
          <a
            className="text-zinc-700 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/petewht"
          >
            Twitter
          </a>
          <a
            className="text-zinc-700 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/peterwhite"
          >
            GitHub
          </a>
          <a
            className="text-zinc-700 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/petewht/"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className=" text-zinc-700 dark:text-zinc-400">
        <p>Proudly created in beautiful Sætre in Norway 🇳🇴</p>
      </div>
    </div>
  );
}
