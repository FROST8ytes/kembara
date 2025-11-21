import antfu from "@antfu/eslint-config";

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

// TODO: add eslint-plugin-tailwindcss once support for Tailwind v4 is stable

export default withNuxt(antfu(
  {
    type: "app",
    vue: true,
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    ignores: ["./app/lib/db/migrations/"],
  },
  {
    rules: {
      // "ts/no-redeclare": "off",
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["off"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["error"],
      "style/no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
      "perfectionist/sort-imports": ["error", {
        tsconfigRootDir: ".",
      }],
      "unicorn/filename-case": ["error", {
        case: "kebabCase",
        ignore: ["README.md"],
      }],
    },
  },
  {
    files: ["./app/components/**/*.vue"],
    rules: {
      "unicorn/filename-case": ["error", {
        case: "pascalCase",
        ignore: ["index.vue"],
      }],
    },
  },
));
