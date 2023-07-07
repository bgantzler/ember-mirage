import { createServer } from 'miragejs';

import factories from './factories';
import * as mirageModels from './models';
import addonConfig from './routes/config';
import scenariosDefault from './scenarios/default';
import mirageSerializers from './serializers';

export default function (config) {
  let { environment, trackRequests, inflector } = config;

  let finalConfig = {
    environment,
    trackRequests,
    identityManagers: {},
    inflector,

    factories,
    fixtures: {},
    models: mirageModels,
    serializers: mirageSerializers,

    routes,

    scenarios: {
      scenariosDefault,
    },
  };

  return createServer(finalConfig);
}

function routes() {
  // let dummy=1;
  this.config({ routes: addonConfig });
}
