'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const DarkModeToggle = () => {
  return (
    <div className="cursor-pointer text-zinc-700 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 ">
      <SunIcon
        className="hidden h-4 w-4 dark:block"
        onClick={() => {
          localStorage.setItem('darkMode', 'false');
          document.getElementsByTagName('html')[0].classList.toggle('dark');
        }}
      />
      <MoonIcon
        className="block h-4 w-4 dark:hidden"
        onClick={() => {
          localStorage.setItem('darkMode', 'true');
          document.getElementsByTagName('html')[0].classList.toggle('dark');
        }}
      />
    </div>
  );
};

export default DarkModeToggle;
