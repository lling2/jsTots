/*
 * @Author: your name
 * @Date: 2021-08-20 14:46:43
 * @LastEditTime: 2021-08-20 14:46:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CLI/vision-code/lib/utils/outputFile.js
 */
const fs = require('promise-fs');

const output2File = (path, data) => {
  fs.readFile(path, {
    encoding: 'utf8',
  })
    .then(res => {
      fs.writeFile(path, `${res}\n${data}`).catch(err => console.error(err));
    })
    .catch(({ errno }) => {
      if (errno === -2) {
        fs.writeFile(path, data).catch(err => console.error(err));
      }
    });
};

module.exports = output2File;
