import { config as defaultConfig } from "@epic-web/config/eslint";
import importPlugin from "eslint-plugin-import";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ignores: ["./hello-prisma/**/*"],
  },
  ...defaultConfig,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      ["importPlugin.flatConfigs.recommended"]:
        importPlugin.flatConfigs.recommended,
      ["importPlugin.flatConfigs.typescript"]:
        importPlugin.flatConfigs.typescript,
      ["importPlugin.flatConfigs.react"]: importPlugin.flatConfigs.react,
      ["importPlugin.flatConfigs.warnings"]: importPlugin.flatConfigs.warnings,
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
    },
    // other configs...
  },
];
