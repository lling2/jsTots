/*
 * @Author: your name
 * @Date: 2021-08-20 14:44:50
 * @LastEditTime: 2021-08-20 14:44:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CLI/vision-code/lib/utils/request.js
 */
const axios = require('axios');
const HttpsProxyAgent = require('https-proxy-agent');
const loadConfig = require('../loadConfig');

const { url } = loadConfig();
const httpsAgent = new HttpsProxyAgent(url);

const request = axios.create({
  httpsAgent,
});

module.exports = request;
