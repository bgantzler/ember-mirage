import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { setupMirage } from 'ember-mirage';

module('Acceptance | Identity manager', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test('custom identity managers work', function (assert) {
    let book = this.server.create('book');

    assert.equal(book.id, 'a');
  });
});
