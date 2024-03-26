if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(
    'Please provide a valid WordPress instance URL. ' +
    'Add to your environment variables WORDPRESS_API_URL.'
  );
}

const { protocol, hostname, port, pathname } = new URL(process.env.WORDPRESS_API_URL);

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: protocol.slice(0, -1),
        hostname,
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
      },
    ],
    minimumCacheTTL: 15000000,
  },
}

module.exports = nextConfig
