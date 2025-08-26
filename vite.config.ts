import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {sentryReactRouter, type SentryReactRouterBuildOptions} from "@sentry/react-router";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "js-mastery-fof",
  project: "javascript-react",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};

export default defineConfig(config => {
  return {
    plugins: [tailwindcss(), tsconfigPaths(), reactRouter(), sentryReactRouter(sentryConfig, config)],
    sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/]
    }
  };
});
