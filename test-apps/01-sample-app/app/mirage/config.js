import { createServer } from 'miragejs';
import addonConfig from './routes/config';
import mirageModels from './models';
import mirageSerializers from './serializers';
import factories from './factories';
import scenariosDefault from './scenarios/default';

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
