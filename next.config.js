/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   optimizeFonts: true,
   swcMinify: true,
   trailingSlash: false,
   i18n: {
      locales: ['en', 'de'],
      defaultLocale: 'en'
   }
}

module.exports = nextConfig
