/** @type {import('next').NextConfig} */
/**
 * to use custom image from a remote host, configure here
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
