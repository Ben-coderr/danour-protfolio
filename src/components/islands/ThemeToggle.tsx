import { useEffect, useState } from 'react';

export function ThemeToggle({
  className = '',
  showLabel = false,
}: {
  className?: string;
  showLabel?: boolean;
}) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const syncTheme = () => {
      const currentTheme =
        (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') ||
        (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
      setTheme(currentTheme);
    };

    syncTheme();

    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<'dark' | 'light'>;
      if (customEvent.detail) {
        setTheme(customEvent.detail);
      } else {
        syncTheme();
      }
    };

    window.addEventListener('theme-change', handleCustomChange);

    // Sync across tabs
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'theme' && (e.newValue === 'dark' || e.newValue === 'light')) {
        setTheme(e.newValue);
        document.documentElement.setAttribute('data-theme', e.newValue);
        document.documentElement.style.colorScheme = e.newValue;
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('theme-change', handleCustomChange);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    document.documentElement.style.colorScheme = nextTheme;
    try {
      localStorage.setItem('theme', nextTheme);
    } catch {
      // Ignore if localStorage unavailable
    }

    window.dispatchEvent(new CustomEvent('theme-change', { detail: nextTheme }));

    const metaTheme = document.getElementById('meta-theme-color');
    if (metaTheme) {
      metaTheme.setAttribute('content', nextTheme === 'dark' ? '#0A0A0A' : '#FAFAFA');
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Current mode: ${theme}`}
      className={`relative inline-flex items-center justify-center rounded-lg border border-border bg-surface text-text-muted hover:text-text hover:border-border-strong transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-text focus-visible:outline-offset-2 select-none ${
        showLabel ? 'px-3 py-1.5 gap-2 text-xs font-mono' : 'p-2'
      } ${className}`}
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Sun icon (shown when dark to switch to light) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-4 h-4 transition-transform duration-300 ${
          mounted && theme === 'light' ? 'rotate-90 scale-0 hidden' : 'rotate-0 scale-100 block'
        }`}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>

      {/* Moon icon (shown when light to switch to dark) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-4 h-4 transition-transform duration-300 ${
          mounted && theme === 'light' ? 'rotate-0 scale-100 block' : '-rotate-90 scale-0 hidden'
        }`}
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>

      {showLabel && (
        <span className="capitalize text-text font-medium">
          {mounted ? (theme === 'dark' ? 'Dark' : 'Light') : 'Theme'}
        </span>
      )}
    </button>
  );
}
