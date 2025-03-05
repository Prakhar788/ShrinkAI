import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Determine __dirname for compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create compatibility instance
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname || __dirname, // Use import.meta.dirname if available (Node.js v20.11.0+)
});

// Define ESLint configuration
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    extends: ["next"],
    rules: {
      "react/no-unescaped-entities": "off", // Disable warnings for unescaped entities
      "@next/next/no-page-custom-font": "off", // Disable warnings for custom fonts in Next.js
    },
  }),
];

export default eslintConfig;
