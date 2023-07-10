import { currentURL,visit } from '@ember/test-helpers';
import { module, test } from 'qunit';

import mirageConfig from 'ember-mirage-sample/mirage/servers/default';
import { setupApplicationTest } from 'ember-mirage-sample/tests/helpers';

import { setupMirage } from 'ember-mirage-sample/tests/test-support/mirage';

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
    setupMirage(hooks, { makeserver: mirageConfig });
    test('visiting /example', async function (assert) {
      await visit('/example');

      assert.strictEqual(currentURL(), '/example');
    });
  });
});
