/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = {
  ...nextConfig,
  images: {
    domains: [`cdn.midjourney.com`, `cdn.pixabay.com`, `images.unsplash.com`, `lh3.googleusercontent.com`, `res.cloudinary.com`],
  },
};

