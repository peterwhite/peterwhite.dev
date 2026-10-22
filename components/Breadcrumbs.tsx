'use client';

import React, { useSyncExternalStore } from 'react';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import { ChevronRightIcon } from './icons';
import classnames from 'classnames';

const subscribe = () => () => {};

export function BreadCrumbs() {
  const pathname = usePathname();
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  // The 404 page is prerendered once as /_not-found, so the visited path is only known after hydration.
  const isNotFound = useSelectedLayoutSegment() === '/_not-found';
  const segments = isNotFound && !hydrated ? [] : pathname.split('/').slice(1);
  return (
    <div
      className={classnames(
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
      {segments.map((segment) => {
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
    </div>
  );
}
