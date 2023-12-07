/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },
  images: {
    domains: ["localhost", "https://img.clerk.com", "img.clerk.com"],
  },
};

module.exports = nextConfig;
