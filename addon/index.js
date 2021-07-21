import setupMirage from './setup-mirage';
import startMirage from './start-mirage';
import {
  discoverEmberDataModels,
  applyEmberDataSerializers,
} from './ember-data';
import EmberDataSerializer from './serializers/ember-data-serializer';

export {
  setupMirage,
  startMirage,
  discoverEmberDataModels,
  applyEmberDataSerializers,
  EmberDataSerializer,
};
