import {
  createServer,
} from 'miragejs';

export default function makeServer(config) {
  let finalConfig = {
    ...config,
    // models: { ...discoverEmberDataModels(), ...config.models },
    // serializers: applyEmberDataSerializers(config.serializers),
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
}
