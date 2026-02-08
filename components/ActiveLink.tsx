'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const ActiveLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={
        pathname === href ? 'active ' + className : 'in-active ' + className
      }
    >
      {children}
    </Link>
  );
};
