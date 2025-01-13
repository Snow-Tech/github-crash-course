import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js", "**/*.ts"],
    languageOptions: { globals: globals.node },
  },
];
