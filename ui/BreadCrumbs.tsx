'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/solid';

export function BreadCrumbs() {
  const pathname = usePathname();

  return (
    <div className="flex items-center text-sm ">
      <Link
        href={'/'}
        className="pr-2 font-medium text-gray-500 decoration-dotted underline-offset-4 transition hover:text-gray-800 hover:underline"
      >
        Home
      </Link>
      {pathname ? (
        <>
          {pathname
            .split('/')
            .slice(1)
            .map((segment) => {
              if (segment.length > 0)
                return (
                  <React.Fragment key={segment}>
                    <ChevronRightIcon className="h-4 w-4 text-gray-600" />
                    <span
                      key={segment}
                      className="animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5"
                    >
                      {segment}
                    </span>

                    {/* <span className="text-gray-600">/</span> */}
                  </React.Fragment>
                );
            })}
        </>
      ) : null}
    </div>
  );
}
