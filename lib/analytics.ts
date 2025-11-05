// lib/analytics.ts
export function trackEvent(event: string, params?: Record<string, any>) {
  if (typeof window === 'undefined') return;

  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event,
    ...params,
  });
}
