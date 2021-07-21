import { createServer } from 'miragejs';
import {
  discoverEmberDataModels,
  applyEmberDataSerializers,
} from 'ember-mirage';

export default function makeServer(config) {
  let finalConfig = {
    ...config,
    models: { ...discoverEmberDataModels(), ...config.models },
    serializers: applyEmberDataSerializers(config.serializers),
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  this.resource('users');
  this.resource('authors');
}
