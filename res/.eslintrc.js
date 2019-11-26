module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "vue/singleline-html-element-content-newline": false,
    "vue/max-attributes-per-line": false,
    "vue/html-self-closing": false,
    "vue/attribute-hyphenation": "never"
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:vue/essential', 'plugin:vue/recommended', 'plugin:vue/strongly-recommended', '@vue/standard']
}
