import { setupMirage as _setupMirage } from 'ember-mirage';
import mirageConfig from 'ember-mirage-sample/mirage/servers/default';

export function setupMirage(hooks, options) {
  options = options || {};
  options.makeServer = options.makeServer || mirageConfig;

  return _setupMirage(hooks, options);
}
