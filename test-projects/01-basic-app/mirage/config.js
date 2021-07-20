import { createServer } from 'miragejs';

export default function makeServer(config) {
  debugger;
  let finalConfig = {
    ...config,
    models: { /*...discoverEmberDataModels(),*/ ...config.models },
    // serializers: applyEmberDataSerializers(config.serializers),
    serializers: config.serializers,
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  this.resource('users');
}
