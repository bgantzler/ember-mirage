import { getContext } from '@ember/test-helpers';

export default function (setup) {
  return async function (hooks, options) {
    if (hooks.beforeEach) {
      hooks.beforeEach(async function (assert) {
        let done = assert.async();
        await setup({ test: this, server: this.server, options });
        done();
      });
    } else {
      let config = hooks;
      if (config.options === undefined) {
        let context = getContext();
        config = { test: context, server: context.server, options: config };
      }
      await setup(config);
    }
  };
}
