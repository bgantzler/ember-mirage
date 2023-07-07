import * as models from './models';
import { factories } from './factories';
import * as serializers from './serializers';
import * as scenarios from './scenarios';

import ENV from 'embroider-app/config/environment';
import { createServer } from 'miragejs';

export function mirageConfig(config) {
  let { environment, trackRequests, inflector } = config;

  let finalConfig = {
    environment,
    trackRequests,
    identityManagers: {},
    inflector,

    factories,
    models,
    serializers,

    routes,

    scenarios: {
      scenariosDefault: scenarios.defaultScenario,
    },
  };

  return createServer(finalConfig);
}

function routes() {
  this.resource('user');
}
