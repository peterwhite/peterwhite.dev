import Link from 'next/link';

export const PostFeed = () => {
  return (
    <ul className="grid grid-cols-1 divide-y first-of-type:border-t dark:divide-zinc-600 dark:border-zinc-600">
      {[1, 2, 3, 4].map((item) => {
        return (
          <li key={item} className="group flex gap-4 py-4 sm:pl-8">
            <Link href="/posts/slug" className="w-full">
              <span className="font-medium text-zinc-800 underline decoration-dotted underline-offset-4 transition hover:text-zinc-800 dark:text-zinc-200 ">
                Rebuilding List
              </span>
              <div className="mt-1">
                <div className="prose prose-zinc dark:text-zinc-400 dark:prose-invert">
                  Performant, sensible improvements for my side-project
                </div>
                <div className="mt-2 flex space-x-2 font-mono text-sm uppercase text-zinc-800 dark:text-zinc-200">
                  <span>#tag</span>
                  <span>-</span>
                  <span>45345 Views</span>
                  <span>-</span>
                  <span>Sep 13, 2021</span>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
