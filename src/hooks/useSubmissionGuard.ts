import { useRef, useState } from 'react';

/** Browser-side signals used with server verification to reject simple form bots. */
export function useSubmissionGuard() {
  const [website, setWebsite] = useState('');
  const formStartedAt = useRef(Date.now());

  return {
    website,
    setWebsite,
    formStartedAt: formStartedAt.current,
  };
}
