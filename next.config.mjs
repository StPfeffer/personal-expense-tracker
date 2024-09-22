/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.vercel.com",
        port: "",
        pathname: "/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: ""
      }
    ],
  },
};

export default nextConfig;
