/**
 * 
 * @param {*} obj 
 * desc: 删除对象存在undefined的情况
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

/**
 * 
 * @param {*} name 
 * desc: 大写
 */
const pathCamelCase = name =>
  name.replace(/\/(\w)/g, (all, letter) => letter.toUpperCase());

module.exports = {
  removeEmpty,
  // path2CamelCase,
  pathCamelCase
};
