import { MusicNoteIcon } from '@heroicons/react/solid';

export function Footer() {
  return (
    <div className="text-sm">
      <div className="mb-4 flex w-full flex-row-reverse items-center space-x-0 border-b pb-4 dark:border-zinc-600 sm:flex-row  sm:space-x-2">
        <div className="inline-flex w-full max-w-full flex-col truncate sm:flex-row">
          <p className=" font-medium text-zinc-800 dark:text-zinc-200 ">
            Not Playing
          </p>
          <span className=" mx-2 hidden text-zinc-500  sm:block">–</span>
          <p className="truncate text-zinc-400 ">Apple Music</p>
        </div>
      </div>

      <div className=" mb-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <a
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
            href="/"
          >
            Home
          </a>
          <a
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
            href="/test"
          >
            Test
          </a>
          <a
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
            href="/newsletter"
          >
            Newsletter
          </a>
        </div>
        <div className="flex flex-col space-y-4">
          <a
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/leeerob"
          >
            Twitter
          </a>
          <a
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/leerob"
          >
            GitHub
          </a>
          <a
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw"
          >
            YouTube
          </a>
        </div>
        <div className="flex flex-col space-y-4">
          <a
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
            href="/uses"
          >
            Uses
          </a>
          <a
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
            href="/guestbook"
          >
            Guestbook
          </a>
          <a
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
            href="/snippets"
          >
            Snippets
          </a>
          <a
            className="text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
            href="/tweets"
          >
            Tweets
          </a>
        </div>
      </div>

      <div className=" text-zinc-500 dark:text-zinc-400">
        <p>Proudly created in beautiful Sætre in Norway</p>
      </div>
    </div>
  );
}