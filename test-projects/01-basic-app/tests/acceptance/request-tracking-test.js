import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { setupMirage } from 'ember-mirage/test-support';

import ENV from 'basic-app/config/environment';
import fetch from 'fetch';

module('Acceptance | Enabling request tracking', function (hooks) {
  setupTest(hooks);

  module('a', function (hooks) {
    setupMirage(hooks);
    test('Request tracking defaults to false', async function (assert) {
      await fetch('/users');

      assert.equal(
        this.server.pretender.handledRequests.length,
        0,
        'request tracking should be false by default'
      );
    });
  });

  module('b', function (hooks) {
    hooks.beforeEach(function () {
      ENV['ember-mirage'] = { trackRequests: undefined };
    });
    setupMirage(hooks);

    test('Request tracking treats undefined config as false', async function (assert) {
      await fetch('/users');

      assert.equal(
        this.server.pretender.handledRequests.length,
        0,
        'request tracking should be false when undefined in config'
      );
    });
  });

  module('c', function (hooks) {
    hooks.beforeEach(function () {
      ENV['ember-mirage'] = { trackRequests: true };
    });
    setupMirage(hooks);

    test('Request tracking can be set to true in config', async function (assert) {
      await fetch('/users');

      assert.equal(
        this.server.pretender.handledRequests.length,
        1,
        'request tracking can be turned on in config and track requests'
      );
      assert.equal(
        this.server.pretender.handledRequests[0].method,
        'GET',
        'tracked request method should match the requests method'
      );
    });
  });
});
