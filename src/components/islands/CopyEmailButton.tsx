import { useState } from 'react';

interface CopyEmailButtonProps {
  email?: string;
  className?: string;
}

export function CopyEmailButton({
  email = 'benkorich.abdenour@gmail.com',
  className = '',
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        const legacyDoc = document as unknown as { execCommand?: (command: string) => boolean };
        if (typeof legacyDoc.execCommand === 'function') {
          legacyDoc.execCommand('copy');
        }
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy email address"
        className={`inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md bg-surface-2 text-text hover:bg-surface transition-colors duration-150 cursor-pointer text-sm font-medium select-none focus-visible:outline-2 focus-visible:outline-text ${className}`}
      >
        {copied ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-status"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span className="text-status font-semibold">Email Copied!</span>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Copy Address</span>
          </>
        )}
      </button>
    </div>
  );
}
