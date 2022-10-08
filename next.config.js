/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // i18n: {
  //   locales: ["en-US", "es"],
  //   defaultLocale: "en-US ",
  // },
};

module.exports = nextConfig;

console.log(`>>`, JSON.stringify(module.exports, null, 2));
