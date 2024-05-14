import { getAnalytics, logEvent } from 'firebase/analytics';

export function logAnalyticsEvent (eventName: string, eventParams?: any): void {
  if (process.env.NODE_ENV !== 'development') {
    const analytics = getAnalytics();
    logEvent(analytics, eventName, eventParams || undefined);
  }
}
