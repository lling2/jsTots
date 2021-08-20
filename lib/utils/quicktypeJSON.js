/*
 * @Author: your name
 * @Date: 2021-08-20 14:45:55
 * @LastEditTime: 2021-08-20 14:46:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CLI/vision-code/lib/utils/quicktypeJSON.js
 */
const {
    quicktype,
    InputData,
    jsonInputForTargetLanguage,
  } = require('quicktype-core');
  
  async function quicktypeJSON(targetLanguage, typeName, jsonString) {
    const jsonInput = jsonInputForTargetLanguage(targetLanguage);
  
    await jsonInput.addSource({
      name: typeName,
      samples: [jsonString],
    });
  
    const inputData = new InputData();
    inputData.addInput(jsonInput);
  
    return quicktype({
      inputData,
      lang: targetLanguage,
      rendererOptions: {
        'just-types': true,
      },
    });
  }
  
  module.exports = quicktypeJSON;
  