'use strict';

const { configs } = require('@nullvoxpopuli/eslint-configs');

// accommodates: JS, TS, App, Addon, and V2 Addon
const config = configs.ember();

module.exports = {
  ...config,
  overrides: [
    ...config.overrides,
    {
      files: ['app/mirage/routes/config.js'],
      rules: {
        // Get here is GET as in the HTTP request verb
        'ember/no-get': 'off',
      },
    },
  ],
};
