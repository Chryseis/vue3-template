export default {
  semi: false,                // 语句结尾不加分号
  singleQuote: true,          // 使用单引号
  printWidth: 100,            // 每行最大宽度
  tabWidth: 2,                // tab 占两个空格
  trailingComma: 'es5',       // 尾随逗号，兼容 ES5
  bracketSpacing: true,       // 对象大括号内是否加空格
  arrowParens: 'avoid',       // 箭头函数参数只有一个时省略括号
  vueIndentScriptAndStyle: true, // .vue 文件中 script 和 style 也缩进
  plugins: ['prettier-plugin-vue'], // 启用 Vue 插件
}
