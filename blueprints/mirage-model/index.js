/* eslint-env node */

'use strict';

var path = require('path');

module.exports = {
  description: 'Generates a Mirage model.',

  fileMapTokens: function () {
    var self = this;
    return {
      __root__: function (options) {
        if (
          !!self.project.config()['ember-mirage'] &&
          !!self.project.config()['ember-mirage'].directory
        ) {
          return self.project.config()['ember-mirage'].directory;
        } else if (options.inAddon) {
          return path.join('tests', 'dummy', 'mirage');
        } else {
          return '/mirage';
        }
      },
    };
  },
};
