import { settled } from '@ember/test-helpers';

import { startMirage } from './start-mirage';

/**
 Used to set up mirage for a test. Must be called after one of the
 `ember-qunit` `setup*Test()` methods. It starts the server and sets
 `this.server` to point to it, and shuts the server down when the test
 finishes.


@typedef {object} Options
@property {() => void} makeServer

@param {Hooks} hooks
@param {Options} options

 */
export default function setupMirage(hooks = self, options = {}) {
  // NOTE: the `hooks = self` is for mocha support

  if (!options.makeServer) {
    throw new Error('You must call setupMirage with the `makeServer` property set');
  }

  let makeServer = options.makeServer;

  delete options.makeServer;

  hooks.beforeEach(function () {
    if (!this.owner) {
      throw new Error(
        'You must call one of the ember-qunit setupTest(),' +
          ' setupRenderingTest() or setupApplicationTest() methods before' +
          ' calling setupMirage()'
      );
    }

    /**
     * NOTE: setting this.server is for backwards compatibility.
     *       TypeScript projects should not use this.
     *       (their types also won't let them see this.server anyway)
     */
    this.server = startMirage(makeServer, { owner: this.owner, ...options });
  });

  hooks.afterEach(async function () {
    await settled();

    if (this.server) {
      this.server.shutdown();
      delete this.server;
    }
  });
}
