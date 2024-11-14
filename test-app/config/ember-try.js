'use strict';

const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    usePnpm: true,
    scenarios: [
      {
        name: 'ember-lts-3.28',
        npm: {
          devDependencies: {
            '@ember/test-helpers': '~2.7.0',
            'ember-resolver': '^8.0.0',
            'ember-source': '~3.28.0',
            'ember-qunit': '^5.0.0',
            'ember-data': '~3.28.0',
            'ember-cli': '~4.12.0',
          },
        },
      },
      {
        name: 'ember-lts-4.4',
        npm: {
          devDependencies: {
            '@ember/test-helpers': '~2.7.0',
            'ember-qunit': '^5.0.0',
            'ember-resolver': '^8.0.0',
            'ember-data': '~4.4.0',
            'ember-source': '~4.4.0',
          },
        },
      },
      {
        name: 'ember-lts-4.8',
        npm: {
          devDependencies: {
            'ember-source': '~4.8.0',
          },
        },
      },
      {
        name: 'ember-lts-4.12',
        npm: {
          devDependencies: {
            'ember-source': '~4.12.0',
          },
        },
      },
      {
        name: 'ember-lts-5.4',
        npm: {
          devDependencies: {
            'ember-source': '~5.4.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': 'latest',
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': 'beta',
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': 'alpha',
          },
        },
      },
      embroiderSafe(),
      embroiderOptimized(),
    ],
  };
};
