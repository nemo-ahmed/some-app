/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["**/__tests__/**.{js,jsx,ts,tsx}"],
    environment: "jsdom",
    setupFiles: ["./tests/setup-env.ts"],
  },
  resolve: {
    alias: [{ find: "~", replacement: resolve(__dirname, "./app") }],
  },
});
