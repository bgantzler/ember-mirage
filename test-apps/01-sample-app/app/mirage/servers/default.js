import { createServer } from 'miragejs';

import factories from '../factories';
import mirageModels from '../models';
import defaultRoutes from '../routes/default';
import additionalRoutes from '../routes/extra-routes';
import scenariosDefault from '../scenarios/default';
import mirageSerializers from '../serializers';

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

    routes: defineRoutes,

    scenarios: {
      scenariosDefault,
    },
  };

  return createServer(finalConfig);
}

function defineRoutes() {
  this.config({ routes: defaultRoutes });
  // You could conditionally define additional routes
  this.config({ routes: additionalRoutes });
}
