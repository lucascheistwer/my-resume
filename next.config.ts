const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/my-resume/" : "",
  basePath: isProd ? "/my-resume" : "",
  output: "export",
};

export default nextConfig;
