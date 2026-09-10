import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        'expired-callback': () => void;
        'error-callback': () => void;
      }) => string;
    };
  }
}

type TurnstileProps = {
  onVerify: (token: string) => void;
};

export default function Turnstile({ onVerify }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
    if (!siteKey || !containerRef.current) return;

    const renderWidget = () => {
      if (!window.turnstile || !containerRef.current || widgetIdRef.current) return;
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: onVerify,
        'expired-callback': () => onVerify(''),
        'error-callback': () => onVerify(''),
      });
    };

    const selector = 'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"]';
    const existingScript = document.querySelector<HTMLScriptElement>(selector);
    if (existingScript) {
      renderWidget();
      existingScript.addEventListener('load', renderWidget);
      return () => existingScript.removeEventListener('load', renderWidget);
    }

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.addEventListener('load', renderWidget);
    document.head.appendChild(script);
    return () => script.removeEventListener('load', renderWidget);
  }, [onVerify]);

  return <div ref={containerRef} className="pt-2" />;
}
