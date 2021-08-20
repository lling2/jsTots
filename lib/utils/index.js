/*
 * @Author: your name
 * @Date: 2021-08-20 14:33:59
 * @LastEditTime: 2021-08-20 17:02:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CLI/vision-code/lib/utils/index.js
 */
const removeEmpty = obj => {
    const newObj = {};
    Object.keys(obj).forEach(key => {
      // 去除undefined的情况
      if (obj[key] === Object(obj[key])) newObj[key] = removeEmpty(obj[key]);
      else if (obj[key] !== undefined) newObj[key] = obj[key];
    });
    return newObj;
  };
  
  const pathCamelCase = name =>
    name.replace(/\/(\w)/g, (all, letter) => letter.toUpperCase());
  
  module.exports = {
    removeEmpty,
    // path2CamelCase,
    pathCamelCase
  };
  