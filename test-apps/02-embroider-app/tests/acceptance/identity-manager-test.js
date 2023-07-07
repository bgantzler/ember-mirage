import { module, test } from 'qunit';

import { setupMirage, setupApplicationTest } from 'embroider-app/tests/helpers';

module('Acceptance | Identity manager', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('custom identity managers work', function (assert) {
    let book = this.server.create('book');

    assert.strictEqual(book.id, 'a');
  });
});
