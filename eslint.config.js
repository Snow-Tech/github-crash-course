import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["src/test/**/*.js", "src/test/**/*.jsx"],
    languageOptions: { globals: globals.node },
  },
];
