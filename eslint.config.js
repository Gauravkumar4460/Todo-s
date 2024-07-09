import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  pluginJs.configs.recommended,
  {
    files: ["src/*.js"]
  },
  { 
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } 
  },
  {
    languageOptions: { globals: globals.browser }
  },
];