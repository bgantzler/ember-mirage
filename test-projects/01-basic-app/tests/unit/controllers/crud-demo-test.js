import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | crud-demo', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:crud-demo');
    assert.ok(controller);
  });
});
