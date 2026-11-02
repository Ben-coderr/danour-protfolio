import { useState, useEffect } from 'react';

export function LocalClock() {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Algiers',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);
        setTimeStr(formatted);
      } catch {
        setTimeStr('UTC+1');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-mono text-xs font-semibold text-text">
      {timeStr || '18:15:00'} <span className="text-text-faint font-normal">UTC+1</span>
    </span>
  );
}
