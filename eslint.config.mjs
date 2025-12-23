import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
  // ----------------------------
  // 1️⃣ Global ignores
  // ----------------------------
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "coverage/**",
      "docusaurus-build/**",
      ".docusaurus/**",
      "vitest.config.ts",
    ],
  },

  // ----------------------------
  // 2️⃣ TypeScript base
  // ----------------------------
  {
    files: ["**/*.ts"],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: process.cwd(),
        sourceType: "module",
      },
    },

    plugins: {
      "@typescript-eslint": tsPlugin,
    },

    rules: {
      // ❌ Запрещаем export *
      "no-restricted-syntax": [
        "error",
        {
          selector: "ExportAllDeclaration",
          message:
            "❌ export * is forbidden. Public API must be explicitly declared in src/index.ts",
        },
      ],
    },
  },

  // ----------------------------
  // 3️⃣ Guard: запрещаем consumer-доступ к internal
  // ----------------------------
  {
    files: ["tests/**/*.ts"],

    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["../src/modules/*", "../src/types/*"],
              message:
                "❌ Tests must import ONLY from public API (src/index.ts)",
            },
          ],
        },
      ],
    },
  },
];
