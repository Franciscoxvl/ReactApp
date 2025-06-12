// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {
    ignores: ['**/dist/**', '**/node_modules/**']
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      
      // === ESTILO DE "standard" ===
      'comma-dangle': ['error', 'never'],      // sin coma final
      'indent': ['error', 2],                  // 2 espacios de indentación
      'space-before-function-paren': ['error', 'always'], // espacio antes de paréntesis en funciones
      'object-curly-spacing': ['error', 'always'],        // espacio dentro de llaves
      'eol-last': ['error', 'always'],         // línea en blanco al final
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-console': 'off'
    }
  }
]
