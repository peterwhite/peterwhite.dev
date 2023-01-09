import { Post, Repost } from '#/.contentlayer/generated';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

type BothPosts = Post | Repost;

export const PostFeed = ({ posts }: { posts: BothPosts[] }) => {
  return (
    <ul className="grid grid-cols-1 divide-y first-of-type:border-t dark:divide-zinc-600 dark:border-zinc-600">
      {posts.map((post) => {
        if (post.type === 'Post')
          return (
            <li key={post._id} className="group flex gap-4 py-4 sm:pl-8">
              <Link href={post.slug} className="w-full">
                <span className="font-medium text-zinc-800 underline decoration-dotted underline-offset-4 transition hover:text-zinc-800 dark:text-zinc-200 ">
                  {post.title}
                </span>
                <div className="mt-1">
                  <div className="prose prose-zinc dark:prose-invert">
                    {post.description}
                  </div>
                  <div className="mt-2 flex space-x-2 font-mono text-sm uppercase text-zinc-800 dark:text-zinc-200">
                    {/* <span>45345 Views</span>
                    <span>-</span> */}
                    <time dateTime={post.date}>
                      {format(new Date(post.date), 'MMMM dd yyyy')}
                    </time>
                  </div>
                </div>
              </Link>
            </li>
          );

        if (post.type === 'Repost')
          return (
            <li key={post._id} className="group flex gap-4 py-4 sm:pl-8">
              <a
                href={post.link}
                target="_blank"
                className="w-full"
                rel="noreferrer"
              >
                <span className="flex items-center font-medium text-zinc-800 underline decoration-dotted underline-offset-4 transition hover:text-zinc-800 dark:text-zinc-200 ">
                  {post.title}
                  <ExternalLinkIcon className="ml-2 block h-4 w-4" />
                </span>
                <div className="mt-1">
                  <div className="prose prose-zinc dark:prose-invert">
                    {post.description}
                  </div>
                  <div className="mt-2 flex space-x-2 font-mono text-sm uppercase text-zinc-800 dark:text-zinc-200">
                    <span>Repost</span>
                    <span>-</span>
                    <time dateTime={post.date}>
                      {format(new Date(post.date), 'MMMM dd yyyy')}
                    </time>
                  </div>
                </div>
              </a>
            </li>
          );
      })}
    </ul>
  );
};
