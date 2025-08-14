import { flatRoutes } from "remix-flat-routes";

/**
 * @type {import('@remix-run/dev').AppConfig}
 */

export default {
  cacheDirectory: "./node_modules/.cache/remix",
  tailwind: true,
  postcss: true,
  v3_relativeSplatPath: false,
  v3_lazyRouteDiscovery: false,
  v3_singleFetch: false,
  v3_throwAbortReason: false,
  watchPaths: ["./tailwind.config.ts"],
  ignoredRouteFiles: ["**/*"],
  routes: async (defineRoutes) => {
    return flatRoutes("routes", defineRoutes, {
      ignoredRouteFiles: [
        ".*",
        "**/*.css",
        "**/*.test.{js,jsx,ts,tsx}",
        "**/__*.*",
      ],
    });
  },
};
