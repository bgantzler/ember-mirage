import mirageConfig from 'test-app/mirage/servers/default';

import { setupMirage as _setupMirage } from 'ember-mirage/test-support';

export function setupMirage(hooks, options) {
  options = options || {};
  options.makeServer = options.makeServer || mirageConfig;

  return _setupMirage(hooks, options);
}
