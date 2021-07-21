import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { setupMirage } from 'ember-mirage';
import { visit, findAll } from '@ember/test-helpers';

module('Acceptance | Fixtures', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test('I can use fixtures', async function (assert) {
    this.server.loadFixtures();

    await visit('/crud-demo');

    assert.equal(findAll('[data-test-id="user"]').length, 1);
  });

  test('I can use fixtures with the filename api', async function (assert) {
    this.server.loadFixtures('countries');

    await visit('/crud-demo');

    assert.equal(findAll('[data-test-id="user"]').length, 0);
  });
});
