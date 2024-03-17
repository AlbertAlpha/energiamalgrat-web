'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

import { useTheme } from '~/components/theme-provider';

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button type="button" onClick={toggleTheme}>
      <SunIcon className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
