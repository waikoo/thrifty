/** @type {import('next').NextConfig} */
const nextConfig = {
  // allows to pass serverasync functions to client components with the "use server" directive inside them
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
