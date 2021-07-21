import { getContext } from '@ember/test-helpers';
import startMirage from '../start-mirage';
import EmberObject from '@ember/object';

// An object we can register with the container to ensure that mirage is shut
// down when the application is destroyed
// TODO Look into destroyables to replace EmberObject https://github.com/ember-polyfills/ember-destroyable-polyfill
//  eslint-disable-next-line ember/no-classic-classes
const MirageShutdown = EmberObject.extend({
  testContext: null,

  willDestroy() {
    this.testContext.server.shutdown();
    delete this.testContext.server;
  },
});
/**
  If we are running an rfc232/rfc268 test then we want to support the
  `autostart` configuration option, which auto-starts mirage before the test
  runs and shuts it down afterwards, and also sets `this.server` on the test
  context so the tests don't need to use the global `server`. We do this in an
  instance initializer because initializers only run once per test run, not
  before and after each test.

  @hide
*/
export function initialize(appInstance) {
  let testContext = getContext();
  if (testContext) {
    let { 'ember-mirage': { autostart } = {} } =
      appInstance.resolveRegistration('config:environment');

    if (autostart) {
      let server = startMirage(appInstance);
      testContext.server = server;

      // To ensure that the server is shut down when the application is
      // destroyed, register and create a singleton object that shuts the server
      // down in its willDestroy() hook.
      appInstance.register('mirage:shutdown', MirageShutdown);
      let shutdown = appInstance.lookup('mirage:shutdown');
      shutdown.testContext = testContext;
    }
  }
}

export default {
  initialize,
};
