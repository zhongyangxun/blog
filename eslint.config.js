import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['*.{js,mjs,cjs}', '**/*.{js,mjs,cjs}'],
    ignores: ['src/**'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['src/**/*.{js,mjs,cjs,ts,tsx,astro}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    // One-off Node scripts kept next to content assets
    files: ['src/content/**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.node,
    },
  },
  eslintConfigPrettier,
);
