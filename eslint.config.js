import eslintPluginAstro from 'eslint-plugin-astro'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPrettier from 'eslint-config-prettier'

export default [
  ...eslintPluginAstro.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  eslintPrettier,
  {
    rules: {'jsx-a11y/alt-text': 'error'},
  },
]
