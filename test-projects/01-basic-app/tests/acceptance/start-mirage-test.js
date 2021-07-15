import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | starting mirage', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /start-mirage', async function (assert) {
    debugger;
    await visit('/start-mirage');

    assert.equal(currentURL(), '/start-mirage');
  });
});
