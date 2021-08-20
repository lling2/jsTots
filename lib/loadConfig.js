/*
 * @Author: your name
 * @Date: 2021-08-20 14:28:39
 * @LastEditTime: 2021-08-20 14:32:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CLI/vision-code/lib/loadConfig.js
 */
const { cosmiconfigSync } = require('cosmiconfig');

const searchPlaces = [
//   '.fecoderc',
//   '.fecoderc.json',
//   '.fecoderc.yaml',
//   '.fecoderc.yml',
//   '.fecoderc.js',
//   '.fecoderc.cjs',
//   'fe-code.config.js',
//   'fe-code.config.cjs',
];

const defaultConfig = {
  url: 'http://localhost:3000',
  root: 'src',
  framework: [],
  useTypescript: true,
  language: 'zh-CN',
};

const loadConfig = () => {
  const explorer = cosmiconfigSync('vision-code', { searchPlaces });

  if (explorer.search()) {
    return explorer.search().config;
  }
  return defaultConfig;
};

module.exports = loadConfig;
