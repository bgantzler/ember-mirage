import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { setupMirage } from 'ember-mirage';

module('Acceptance | Ember Data Serializer', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test('it works', function (assert) {
    let transforms =
      this.server.serializerOrRegistry.serializerFor('author').transforms;
    assert.equal(transforms.name.key, 'fullName');
    assert.equal(transforms.books.serialize, false);
  });
});
