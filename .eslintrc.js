// https://eslint.org/docs/user-guide/configuring

module.exports = {
   root: true,
   parserOptions: {
      parser: 'babel-eslint'
   },
   env: {
      browser: true,
   },
   extends: [
      // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
      // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
      'plugin:vue/essential', 
      // https://github.com/standard/standard/blob/master/docs/RULES-en.md
      'standard'
   ],
   // required to lint *.vue files
   plugins: [
      'vue'
   ],
   // add your custom rules here
   rules: {
      // allow async-await
      'generator-star-spacing': 'off',
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'indent': [0, 3],
      'space-before-function-paren': [1, 'never'],//强制函数括号之前的空格的一致性
      'semi': ["error", "always"],
      'no-extra-semi': "error",
      'space-before-blocks': [1, "never"],
      'spaced-comment': 'off',
      'keyword-spacing': ["error", {"overrides": {
         "if": { "after": false }
      }}],
      'no-unused-vars': 'off'
   }
}
