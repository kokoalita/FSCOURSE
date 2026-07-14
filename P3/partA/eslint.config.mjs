import js from "@eslint/js";
import globals from "globals";
//import { defineConfig } from "eslint/config";
import stylisticJs from '@stylistic/eslint-plugin'

//export default defineConfig([
//  { files: ["**/*.{js,mjs,cjs}"], 
//    plugins: { js }, 
//    extends: ["js/recommended"], 
//    languageOptions: { 
//      globals: globals.browser 
//    } 
//   },
//]);

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: { ...globals.node },
      ecmaVersion: 'latest',
    },
    plugins: { 
      '@stylistic/js': stylisticJs,
    },
    rules: { 
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
      eqeqeq: ['error', 'always'],
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-console': 'off',
    }, 
  },
  {
    ignores: ['dist/**'], 
  }
]