import mirageConfig from 'test-app/mirage/servers/manual';

import { setupMirage as _setupMirage } from 'ember-mirage/test-support';

import { createServer as _createServer } from 'miragejs';

export function setupMirage(hooks, { createServer, config } = {}) {
  createServer ??= _createServer;
  config ??= mirageConfig;
  return _setupMirage(hooks, { createServer, config });
}
