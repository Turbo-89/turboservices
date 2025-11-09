"use client";

type EventParams = Record<string, any>;

/**
 * Algemene event-tracker:
 * - stuurt naar Google (gtag)
 * - stuurt naar Meta Pixel (fbq)
 */
export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  const w = window as any;

  // Google Ads / GA4
  if (typeof w.gtag === "function") {
    w.gtag("event", eventName, params);
  }

  // Meta Pixel (Facebook / Instagram)
  if (typeof w.fbq === "function") {
    w.fbq("trackCustom", eventName, params);
  }
}

/**
 * Specifiek voor het boekingsformulier
 * - stuurt 1 event "booking_submit" naar beide platformen
 */
export function trackBookingSubmit(source: string, extra: EventParams = {}) {
  const params = { source, ...extra };
  trackEvent("booking_submit", params);
}
