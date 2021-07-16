import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | crud-demo', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:crud-demo');
    assert.ok(route);
  });
});
