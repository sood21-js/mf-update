const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
module.exports = {
  basePath: "/app2",
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "app2",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          app1: `app1@http://localhost:8080/app1/_next/static/${
            options.isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
      })
    );

    return config;
  },
};
