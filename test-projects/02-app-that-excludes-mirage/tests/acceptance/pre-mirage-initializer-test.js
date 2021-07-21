import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { visit, findAll } from '@ember/test-helpers';

module('Acceptance | noop initializer test', function (hooks) {
  setupTest(hooks);

  test('visiting /noop-initializer-test', async function (assert) {
    await visit('/');

    assert.equal(findAll('[data-test-initializer]').length, 1);
  });
});
