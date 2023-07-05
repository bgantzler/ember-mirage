import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-mirage-sample/tests/helpers';
import { setupMirage } from 'ember-mirage-sample/tests/test-support/mirage';
import mirageConfig from 'ember-mirage-sample/mirage/config';

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
