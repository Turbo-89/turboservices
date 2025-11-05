// lib/analytics.ts

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Algemene helper
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;

  // Als gtag bestaat → normale event
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
    return;
  }

  // Fallback: push naar dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
}

// Optionele helpers (makkelijker leesbaar overal)
export function trackPhoneClick(source: string) {
  trackEvent("phone_click", { source });
}

export function trackBookingSubmit(source: string, extra: Record<string, any> = {}) {
  trackEvent("booking_submit", { source, ...extra });
}
