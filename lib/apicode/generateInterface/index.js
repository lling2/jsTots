const { 
  resolve, 
  basename 
} = require('path');
const { 
  removeEmpty, 
  pathCamelCase 
} = require('../../utils');
const output2File = require('../../utils/outputFile');
const quicktypeJSON = require('../../utils/quicktypeJSON');
const request = require('../../utils/request');

const outputInterface = (data, name, output) => {
  quicktypeJSON('TypeScript', name, JSON.stringify(data))
  .then(({ lines }) => {
    output2File(resolve(process.cwd(), output), lines.join('\n'));
  })
  .catch(err => console.error(err));
};

// fromRequest
const fromRequest = options => {
  const babyData = options.body ? require(options.body) : null;
  request(
    removeEmpty({
      method: options.httpMethod,
      url: `${options.url}${options.path}`,
      data: babyData,
    }),
  )
  .then(({ data }) =>
    outputInterface(data, pathCamelCase(options.path), options.output),
  )
  .catch(err => console.error(err));
};

const fromLocalJson = options => {
  const dataJson = require(options.input);
  const name = basename(options.input)
    .split('.')[0]
    .replace(/^(\w)/g, (all, letter) => letter.toUpperCase());
  outputInterface(dataJson, name, options.output);
};

const generateInterface = options => {
  if (options.input) {
    fromLocalJson(options);
    return;
  }
  fromRequest(options);
};

module.exports = generateInterface;
