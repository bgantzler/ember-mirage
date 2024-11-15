import { currentURL, visit } from '@ember/test-helpers';
import { createServer } from 'miragejs';
import { module, test } from 'qunit';

import mirageConfig from 'test-app/mirage/servers/manual';
import { setupApplicationTest } from 'test-app/tests/helpers';

import { setupMirage } from 'test-app/tests/test-support/mirage';

module('Acceptance | example test', function (hooks) {
  setupApplicationTest(hooks);

  module('Test with default config', function (hooks) {
    setupMirage(hooks);

    test('visiting /example', async function (assert) {
      await visit('/example');

      assert.strictEqual(currentURL(), '/example');
    });
  });

  module('Test with imported config', function (hooks) {
    setupMirage(hooks, { config: mirageConfig });
    test('visiting /example', async function (assert) {
      await visit('/example');

      assert.strictEqual(currentURL(), '/example');
    });
  });

  module('Test with custom server', function (hooks) {
    setupMirage(hooks, { createServer: () => createServer(mirageConfig) });

    test('visiting /example', async function (assert) {
      await visit('/example');

      assert.strictEqual(currentURL(), '/example');
    });
  });
});
