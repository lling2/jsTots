const { resolve } = require('path');
const inquirer = require('inquirer');
const generateInterface = require('../lib/apicode/generateInterface');
// const generateCRUD = require('../lib/apicode/generateCRUD');
const loadConfig = require('../lib/loadConfig');
const { removeEmpty } = require('../lib/utils');

const config = loadConfig();

const handleTargetMap = {
  interface: generateInterface,
  // CRUD: generateCRUD,
};

const promptList = [
  {
    type: 'list',
    name: 'target',
    message: 'Please select the type of generation.',
    choices: Object.keys(handleTargetMap),
  },
];

const chooseHttpMethod = {
  type: 'list',
  name: 'httpMethod',
  message: 'Please choose your HTTP method.',
  choices: ['get', 'post'],
};

const apicode = program => {
  program
    .command('apicode')
    .alias('a2c')
    .description('🐻 api translation typescript')

    // .option(
    //   '-u, --url <url>',
    //   'api addres(domain or ip)', 
    //   config.url
    // )
    // .option(
    //   '-p, --path <path>',
    //   'api path'
    // )
    // .option(
    //   '-b, --body <body>',
    //   'data json path for http body, only post method.',
    // )

    .option('-i, --input <input>', 'input json file')
    .requiredOption('-o, --output <output>', 'path of generation file')
    .action(options => {
      // { url: 'http://localhost:3000/getList', output: '/aaaaa.ts' } options
      console.log(options, 'options')
      const { url, output, path, body, input } = options;
      path && promptList.push(chooseHttpMethod);
      console.log(path, 'path')
      // options
      // {
      //   url: 'http://localhost:3000',
      //   output: 'src/indexq.ts',
      //   path: '/data.json'
      // } options///
      inquirer.prompt(promptList).then(({ target, httpMethod }) => {
        // console.log(process, 'process', target, 'target')
        handleTargetMap[target](
          removeEmpty({
            url,
            path,
            output,
            httpMethod,
            input: input && resolve(process.cwd(), input),
            body: body && resolve(process.cwd(), body),
          }),
        );
      });
    });
};
module.exports = apicode;
