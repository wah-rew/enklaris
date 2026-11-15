/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['*.trycloudflare.com', 'trycloudflare.com'],
  // Old URLs from the retired database service and its two articles
  async redirects() {
    return [
      { source: '/layanan/database', destination: '/layanan/akuisisi-consent', permanent: true },
      { source: '/blog/5-tanda-database-bisnis-butuh-optimasi', destination: '/blog', permanent: true },
      { source: '/blog/best-practices-database-migration-startup-scale-up', destination: '/blog', permanent: true },
      // Indonesian blog slugs, replaced by English articles
      { source: '/blog/telemarketing-setelah-uu-pdp-menelepon-hanya-yang-sudah-setuju', destination: '/blog/telemarketing-after-the-pdp-law-call-only-people-who-agreed', permanent: true },
      { source: '/blog/agent-ai-yang-terhubung-ke-crm-dari-percakapan-ke-prospek', destination: '/blog/ai-agents-connected-to-your-crm-from-conversation-to-lead', permanent: true },
      { source: '/blog/mengapa-bisnis-indonesia-butuh-whatsapp-business-api', destination: '/blog/why-indonesian-businesses-need-the-whatsapp-business-api', permanent: true },
      { source: '/blog/ai-agent-vs-chatbot-apa-bedanya', destination: '/blog/ai-agent-vs-chatbot-which-one-fits-your-business', permanent: true },
      { source: '/blog/cara-memilih-mitra-integrasi-teknologi-untuk-enterprise', destination: '/blog/how-to-choose-a-technology-integration-partner', permanent: true },
      { source: '/blog/membangun-customer-journey-otomatis-whatsapp-api-ai-agent', destination: '/blog/building-an-automated-customer-journey-with-whatsapp-and-ai-agents', permanent: true },
      { source: '/blog/menilai-lahan-dengan-data-peta-dan-ai', destination: '/blog', permanent: true },
      { source: '/blog/geo-analytics-brand-retail-memahami-pelanggan-berdasarkan-lokasi', destination: '/blog', permanent: true },
      { source: '/blog/dari-data-ke-keputusan-peran-geo-intelligence-ekspansi-bisnis', destination: '/blog', permanent: true },
    ];
  },
};

export default nextConfig;
