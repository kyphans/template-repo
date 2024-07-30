'use client';
import { useState, useEffect } from 'react';

export default function useLocation() {
  const [userTimezone, setUserTimezone] = useState<string>('');

  // using to check timezone change
  const timezoneOffset = new Date().getTimezoneOffset();

  useEffect(() => {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setUserTimezone(timezone);
    } catch (error) {}
  }, [timezoneOffset]);

  return userTimezone;
}
