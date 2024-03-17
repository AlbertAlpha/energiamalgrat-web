/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions & import('@ianvs/prettier-plugin-sort-imports').PluginConfig} */
const config = {
  endOfLine: 'lf',
  printWidth: 120,
  singleQuote: true,
  semi: true,
  tabWidth: 2,
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'cn', 'cva'],
  importOrder: ['<BUILT_IN_MODULES>', '', '^react-?', '<THIRD_PARTY_MODULES>', '^(~/.*)$', '^[.]'],
  importOrderTypeScriptVersion: '5.4.0',
};

export default config;
