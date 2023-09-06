import { dependencySatisfies } from '@embroider/macros';
import { settled } from '@ember/test-helpers';
import { s as startMirage } from '../start-mirage-a6c9b823.js';

/**
 Used to set up mirage for a test. Must be called after one of the
 `ember-qunit` `setup*Test()` methods. It starts the server and sets
 `this.server` to point to it, and shuts the server down when the test
 finishes.

 NOTE: the `hooks = self` is for mocha support
 @hide
 */
function setupMirage(hooks = self, {
  makeServer,
  ...options
}) {
  hooks.beforeEach(function () {
    if (!this.owner) {
      throw new Error('You must call one of the ember-qunit setupTest(),' + ' setupRenderingTest() or setupApplicationTest() methods before' + ' calling setupMirage()');
    }
    this.server = startMirage(makeServer, {
      owner: this.owner,
      ...options
    });
  });
  hooks.afterEach(function () {
    return settled().then(() => {
      if (this.server) {
        this.server.shutdown();
        delete this.server;
      }
    });
  });
}

if (dependencySatisfies('ember-qunit', '*')) {
  window.QUnit.config.urlConfig.push({
    id: 'mirageLogging',
    label: 'Mirage logging'
  });
}

export { setupMirage };
//# sourceMappingURL=index.js.map
