import type { NextConfig } from 'next'; // Import the type
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = { 
output: 'export',
  images: {
    unoptimized: true, 
  },
};

export default withNextIntl(nextConfig);