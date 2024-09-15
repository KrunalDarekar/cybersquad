/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'g-6d1m8at3r7v.vusercontent.net',
          pathname: '/**',  // This allows any pathname from the host
        },
      ],
    },
  };
  
  export default nextConfig;
