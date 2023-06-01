/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next",
          outputPath: "static/media",
          name: "[name].[hash].[ext]",
          esModule: false,
        },
      },
    });

    return config;
  },
  env: {
    NEXT_FORCE_EDGE_IMAGES: true,
  },
};

module.exports = nextConfig;
