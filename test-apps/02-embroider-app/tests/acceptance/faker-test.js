import { module, test } from 'qunit';
import { setupMirage, setupTest } from 'embroider-app/tests/helpers';

module('Acceptance | Faker', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test('it works', function (assert) {
    let user = this.server.create('user');

    assert.strictEqual(user.age, 32);
  });
});
