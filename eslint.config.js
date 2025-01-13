import pluginReact from "eslint-plugin-react";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Desabilita a regra que exige a importação do React
    },
  },
];
