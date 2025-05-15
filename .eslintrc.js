/*module.exports = {
  // ...
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false, // ← Adicione esta linha para desativar a verificação do arquivo de configuração
    babelOptions: {
      presets: ['@babel/preset-env']
    }
  }
  // ...
}*/
module.exports = {
  env: {
    browser: true,
    es2021: true, // ← Suporte a ES2021 (inclui ES6+)
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended', // Ou 'plugin:vue/recommended' para Vue 2
  ],
  parserOptions: {
    ecmaVersion: 'latest', // ← Suporte à versão mais recente do ECMAScript
    sourceType: 'module', // ← Necessário para usar 'import/export'
  parser: '@babel/eslint-parser',
  requireConfigFile: false, // Ignora se não tiver config do Babel
  },
  rules: {
    // Suas regras personalizadas aqui
   // Regras personalizadas (opcional)
    'vue/multi-word-component-names': 'off', // Desativa nomes multi-word
  },
};
