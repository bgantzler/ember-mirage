import {
  applyEmberDataSerializers,
  discoverEmberDataModels,
} from 'ember-cli-mirage';
import ENV from 'embroider-app/config/environment';
import { createServer } from 'miragejs';

export default function (config) {
  let finalConfig = {
    ...config,
    models: { ...discoverEmberDataModels(ENV), ...config.models },
    serializers: applyEmberDataSerializers(config.serializers, ENV),
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  this.resource('user');
}
