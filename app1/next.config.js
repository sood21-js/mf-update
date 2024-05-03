const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
module.exports = {
  basePath: "/app1",
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "app1",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Example": "components/Example.tsx",
        },
      })
    );

    return config;
  },
};
