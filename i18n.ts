import { getRequestConfig } from 'next-intl/server';
import { routing } from './navigation';

export default getRequestConfig(async ({ locale }) => {
  // 1. Ensure we have a valid locale, or fallback to the default
  const activeLocale = locale || routing.defaultLocale;

  return {
    locale: activeLocale, 
    messages: (await import(`./messages/${activeLocale}.json`)).default
  };
});