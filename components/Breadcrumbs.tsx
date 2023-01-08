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
        'flex items-center text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 ',
      )}
    >
      <Link
        href={'/'}
        className="pr-2 decoration-dotted underline-offset-4 hover:underline"
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
                    <ChevronRightIcon className="h-4 w-4 " />
                    <Link
                      href="/posts/"
                      className="px-1.5 capitalize decoration-dotted underline-offset-4 hover:underline"
                    >
                      Posts
                    </Link>
                  </React.Fragment>
                );
              }
              if (segment.length > 0)
                return (
                  <React.Fragment key={segment}>
                    <ChevronRightIcon className="h-4 w-4 text-zinc-700 dark:text-zinc-400" />
                    <span className="px-1.5 capitalize">
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
