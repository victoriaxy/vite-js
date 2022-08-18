/*
 * @Author: victoriaXY 617989449@qq.com
 * @Date: 2022-08-17 18:38:28
 * @LastEditors: victoriaXY 617989449@qq.com
 * @LastEditTime: 2022-08-17 18:38:38
 * @FilePath: \epidvue\vite-js\.prettier.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 100,
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always',
}