/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatars.steamstatic.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
    
};

export default nextConfig;
