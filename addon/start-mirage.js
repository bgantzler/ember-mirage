import readModules from './utils/read-modules';
import { singularize, pluralize } from 'ember-inflector';
import assert from './assert';

/**
  Helper to start mirage. This should not be called directly. In rfc232/rfc268
  tests, use `setupMirage()` or the `autoboot` option in the addon config
  in the environment. In legacy tests that call `startMirage` directly, this
  should be called via the `startMirage` method exported from
  `<app>/initializers/ember-cli-mirage`.

  This is intended to be called with only the `owner` argument (which would be
  `this.owner` in an rfc232/rfc268 test, or the application instance if called
  from an instance initializer). However, to support the legacy initializer, it
  can instead accept a hash of the environment and config objects.

  @hide
*/
export default function startMirage(
  owner,
  { env, testConfig, makeServer } = {}
) {
  if (!env || !makeServer) {
    if (!owner) {
      throw new Error('You must pass `owner` to startMirage()');
    }

    env = env || owner.resolveRegistration('config:environment');

    // These are set from `<app>/initializers/ember-mirage`
    makeServer = makeServer || owner.resolveRegistration('mirage:make-server');
    assert('makeServer was not properly registered', makeServer);
  }

  let environment = env.environment;
  let mirageEnvironment = env['ember-mirage'] || {};
  let modules = readModules(env.modulePrefix);
  let options = {
    ...modules,
    environment,
    testConfig,
  };
  options.trackRequests = mirageEnvironment.trackRequests;
  options.inflector = { singularize, pluralize };

  let server = makeServer(options);
  server.logging = false;
  if (
    typeof window.location !== 'undefined' &&
    window.location.search.indexOf('mirageLogging') !== -1
  ) {
    server.logging = true;
  }

  return server;
}
