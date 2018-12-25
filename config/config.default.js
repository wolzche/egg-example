'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545635098252_8956';

  // add your config here
  config.middleware = [];

  config.view = {
      mapping: {'.html': 'ejs'} //左边写成.html后缀，会自动渲染.html文件
  };

  return config;
};
