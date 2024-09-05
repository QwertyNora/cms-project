/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.storyblok.com",
        port: "",
        // pathname: '/account123/**',
      },
    ],
  },

  // images: {
  //   domains: ["a.storyblok.com"],
  // },
};

export default nextConfig;
