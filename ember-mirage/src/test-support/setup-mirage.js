import { assert } from '@ember/debug';
import { settled } from '@ember/test-helpers';
import { createServer as _createServer } from 'miragejs';

export function setupMirage(hooks = self, { createServer, config }) {
  assert(
    `Unexpected arity for setupMirage. Expected 2 (hooks, { createServer, or config })`,
    arguments.length <= 2 && arguments.length > 0,
  );
  assert(
    `Second argument to setupMirage must be an object and not null`,
    typeof arguments[1] === 'object' && arguments[1] !== null,
  );
  assert(
    `Second argument to setupMirage must on or both of createServer and/or config. You passed ${Object.keys(arguments[1]).join(', ')}`,
    'createServer' in arguments[1] || 'config' in arguments[1],
  );

  createServer ??= _createServer;

  hooks.beforeEach(async function () {
    if (!this.owner) {
      throw new Error(
        'You must call one of the ember-qunit setupTest(),' +
          ' setupRenderingTest() or setupApplicationTest() methods before' +
          ' calling setupMirage()',
      );
    }

    this.server = await createServer(config ?? {});
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
