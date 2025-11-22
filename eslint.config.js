import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import astro from 'eslint-plugin-astro'
import globals from 'globals'
import prettier from 'eslint-config-prettier'

export default [
  // Ignore built files
  {ignores: ['dist/**', '.astro/**', 'node_modules/**']},

  // JavaScript base rules
  js.configs.recommended,

  // TypeScript (type-aware)
  ...tseslint.configs.recommendedTypeChecked,

  // Astro linting
  astro.configs.recommended,

  // Env & parser options
  {
    languageOptions: {
      globals: {...globals.browser, ...globals.node},
      parserOptions: {
        project: true, // auto-detect tsconfig.json
      },
    },
  },

  // Accessibility (optional)
  {
    plugins: {
      'jsx-a11y': (await import('eslint-plugin-jsx-a11y')).default,
    },
    rules: {
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
    },
  },

  // Disable stylistic conflicts with Prettier
  prettier,
]
