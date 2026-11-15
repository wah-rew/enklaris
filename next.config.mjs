/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['*.trycloudflare.com', 'trycloudflare.com'],
  // Old URLs from the retired database service and its two articles
  async redirects() {
    return [
      { source: '/layanan/database', destination: '/layanan/akuisisi-consent', permanent: true },
      { source: '/blog/5-tanda-database-bisnis-butuh-optimasi', destination: '/blog', permanent: true },
      { source: '/blog/best-practices-database-migration-startup-scale-up', destination: '/blog', permanent: true },
    ];
  },
};

export default nextConfig;
