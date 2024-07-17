import { settled } from '@ember/test-helpers';

export function setupMirage(hooks = self, { createServer }) {
  hooks.beforeEach(async function () {
    if (!this.owner) {
      throw new Error(
        'You must call one of the ember-qunit setupTest(),' +
          ' setupRenderingTest() or setupApplicationTest() methods before' +
          ' calling setupMirage()',
      );
    }

    this.server = await createServer();
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
