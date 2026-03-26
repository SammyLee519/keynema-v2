import storybook from "eslint-plugin-storybook";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-config-prettier";
import globals from "globals";
import perfectionist from "eslint-plugin-perfectionist";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config(
  // 1. 무시할 파일/폴더 설정
  {
    ignores: [
      "dist",
      "node_modules",
      "*.config.js",
      "*.config.ts",
      "public",
      ".storybook",
      "vitest.shims.d.ts",
    ],
  },

  // 2. 기본 JavaScript 규칙 적용
  js.configs.recommended,

  // 3. TypeScript 권장 규칙 적용
  ...tseslint.configs.recommended,

  // 4. 메인 설정 블록
  {
    files: ["**/*.{ts,tsx}"],

    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      perfectionist,
      "jsx-a11y": jsxA11y,
    },

    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: ["./tsconfig.app.json", "./tsconfig.node.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.es2023,
      },
    },

    settings: {
      react: { version: "detect" },
    },

    rules: {
      // ===== React =====
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-boolean-value": "warn",
      "react/jsx-fragments": "warn",
      "react/jsx-no-useless-fragment": "warn",

      // ===== JavaScript 품질 =====
      "prefer-const": "warn",
      "no-var": "error",
      "no-unused-vars": "off",
      "no-console": "warn",
      "no-debugger": "warn",
      "no-duplicate-imports": "off", // perfectionist가 대신 처리
      "prefer-arrow-callback": "warn",
      "arrow-body-style": ["warn", "as-needed"],
      curly: ["error", "all"],
      "spaced-comment": [
        "warn",
        "always",
        { markers: ["/"], exceptions: ["-", "+", "*"] },
      ],
      "padding-line-between-statements": [
        "warn",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
      ],

      // ===== TypeScript =====
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // enum 금지 → as const 사용
      "no-restricted-syntax": [
        "error",
        {
          selector: "TSEnumDeclaration",
          message: "enum 대신 as const를 사용하세요.",
        },
      ],

      // 타입/인터페이스 네이밍 (PascalCase)
      "@typescript-eslint/naming-convention": [
        "warn",
        { selector: "typeLike", format: ["PascalCase"] },
        { selector: "typeProperty", format: ["camelCase", "snake_case"] },
        {
          selector: "variable",
          types: ["boolean"],
          format: ["PascalCase"],
          prefix: ["is", "has", "should", "can"],
        },
      ],

      // ===== Vite HMR =====
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // ===== Perfectionist (import 정렬) =====
      "perfectionist/sort-imports": ["warn", { type: "natural", order: "asc" }],
      "perfectionist/sort-named-imports": [
        "warn",
        { type: "natural", order: "asc" },
      ],

      // ===== 접근성 (a11y) =====
      ...jsxA11y.configs.recommended.rules,
    },
  },

  // 5. Prettier 충돌 규칙 비활성화
  prettier,

  // 6. Storybook 권장 규칙
  storybook.configs["flat/recommended"],
);
