'use client';

import React from 'react';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

export function BreadCrumbs() {
  const pathname = usePathname();
  return (
    <div
      className={clsx(
        pathname === '/' && 'invisible',
        'flex items-center text-sm',
      )}
    >
      <Link
        href={'/'}
        className="pr-2  text-zinc-500 decoration-dotted underline-offset-4 transition hover:text-zinc-800 hover:underline dark:text-zinc-200"
      >
        Home
      </Link>
      {pathname ? (
        <>
          {pathname
            .split('/')
            .slice(1)
            .map((segment) => {
              if (segment === 'posts') {
                return (
                  <React.Fragment key={segment}>
                    <ChevronRightIcon className="h-4 w-4 text-zinc-500" />
                    <Link
                      href="/posts/"
                      className="animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5 capitalize text-zinc-500 hover:underline"
                    >
                      Posts
                    </Link>
                  </React.Fragment>
                );
              }
              if (segment.length > 0)
                return (
                  <React.Fragment key={segment}>
                    <ChevronRightIcon className="h-4 w-4 text-zinc-600" />
                    <span className="animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5 capitalize">
                      {segment.replace(/-/g, ' ')}
                    </span>
                  </React.Fragment>
                );
            })}
        </>
      ) : null}
    </div>
  );
}
