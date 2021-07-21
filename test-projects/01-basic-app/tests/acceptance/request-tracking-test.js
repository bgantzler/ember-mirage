import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import ENV from 'basic-app/config/environment';
import fetch from 'fetch';

let App;

module('Acceptance | Enabling request tracking', function (hooks) {
  hooks.afterEach(function () {
    server.shutdown();
    run(App, 'destroy');
    ENV['ember-mirage'].enabled = undefined;
  });

  test('Request tracking defaults to false', async function (assert) {
    App = startApp();

    await fetch('/users');

    assert.equal(
      server.pretender.handledRequests.length,
      0,
      'request tracking should be false by default'
    );
  });

  test('Request tracking treats undefined config as false', async function (assert) {
    ENV['ember-mirage'] = { trackRequests: undefined };
    App = startApp();

    await fetch('/users');

    assert.equal(
      server.pretender.handledRequests.length,
      0,
      'request tracking should be false when undefined in config'
    );
  });

  test('Request tracking can be set to true in config', async function (assert) {
    ENV['ember-mirage'] = { trackRequests: true };
    App = startApp();

    await fetch('/users');

    assert.equal(
      server.pretender.handledRequests.length,
      1,
      'request tracking can be turned on in config and track requests'
    );
    assert.equal(
      server.pretender.handledRequests[0].method,
      'GET',
      'tracked request method should match the requests method'
    );
  });
});
