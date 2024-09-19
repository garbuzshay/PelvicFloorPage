import { createProxyMiddleware } from 'http-proxy-middleware';

export default {
  // i18n: {
  //   locales: ['en', 'he'],
  //   defaultLocale: 'en',
  // },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://firestore.googleapis.com/:path*', // Proxy to Firestore API
      },
    ];
  },
};
