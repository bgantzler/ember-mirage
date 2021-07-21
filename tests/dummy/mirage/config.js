import { createServer } from 'miragejs';

export function makeServer(config) {
  let finalConfig = {
    ...config,
    // models: { ...discoverEmberDataModels(), ...config.models },
    // serializers: applyEmberDataSerializers(config.serializers),
    routes,
  };

  return createServer(finalConfig);
}

function routes() {}
