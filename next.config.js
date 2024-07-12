/** @type {import('next').NextConfig} */
const nextConfig = {
  // allows to pass serverasync functions to client components with the "use server" directive inside them
  images: {
    remotePatterns:
      [{
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }, {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      }, {
        protocol: 'https',
        hostname: 'f.nooncdn.com',
      }, {
        protocol: 'https',
        hostname: 'picsum.photos',
      }],
  },
  async redirects() {
    return [{
      source: '/',
      destination: '/en/women',
      permanent: true,
    }]
  }
};

export default nextConfig;
