import { defineConfig, globalIgnores } from "eslint/config";
import { nextJsConfig } from "@cashflow/eslint-config/next-js";

const eslintConfig = defineConfig([
  ...nextJsConfig,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;