const createNextIntlPlugin = require('next-intl/plugin');

// Tell Next.js where to find the config file we just made
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextIntl(nextConfig);