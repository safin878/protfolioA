/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        hostname: "portfolio-image-store.s3.ap-south-1.amazonaws.com",
      },
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "i.postimg.cc",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
