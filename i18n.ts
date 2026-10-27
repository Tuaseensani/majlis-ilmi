import { getRequestConfig } from 'next-intl/server';
 
export default getRequestConfig(async () => {
  // This is a simplified version for the App Router
  return {
    locale: 'en',
    messages: (await import(`./messages/en.json`)).default
  };
});