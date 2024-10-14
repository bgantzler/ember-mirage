import { Model, belongsTo, hasMany } from 'miragejs';
import EmberDataSerializer from './ember-data-serializer';
import { entityName } from './create-config';

const MirageModelCache = {};
const MirageSerializerCache = {};

export function importEmberDataModels(store, importMap = {}) {
  return Object.keys(importMap).reduce((acc, path) => {
    const configName = entityName(path);
    acc[configName] = createMirageModel(store, configName);
    return acc;
  }, {});
}

// TODO: Replace with original `applyEmberDataSerializers` function
function importEmberDataSerializers(mirageSerializers, emberDataConfig = {}) {
  const { store, serializers = {} } = emberDataConfig;
  return Object.keys(serializers).reduce((acc, path) => {
    const configName = entityName(path);
    acc[configName] = createMirageSerializer(
      store,
      mirageSerializers,
      configName,
    );
    return acc;
  }, {});
}

function createMirageModel(store, modelName) {
  if (MirageModelCache[modelName]) {
    return MirageModelCache[modelName];
  }

  const model = store.modelFor(modelName);
  const relationships = {};

  model.eachRelationship((name, r) => {
    if (r.kind === 'belongsTo') {
      relationships[name] = belongsTo(r.type, r.options);
    } else if (r.kind === 'hasMany') {
      relationships[name] = hasMany(r.type, r.options);
    }
  });
  const mirageModel = Model.extend(relationships);

  MirageModelCache[modelName] = mirageModel;

  return mirageModel;
}

export function createMirageSerializer(store, serializers, serializerName) {
  if (MirageSerializerCache[serializerName]) {
    return MirageSerializerCache[serializerName];
  }

  let mirageSerializer =
    serializers[serializerName] ||
    serializers.application ||
    EmberDataSerializer;

  let dsSerializer = store.serializerFor(serializerName);

  let transforms;
  let primaryKey = dsSerializer.primaryKey;
  let attrs = dsSerializer.attrs;
  if (primaryKey || attrs) {
    if (attrs) {
      let serializer = mirageSerializer.create
        ? mirageSerializer.create()
        : new mirageSerializer();

      transforms = serializer.transforms || {};

      Object.keys(attrs).forEach((key) => {
        let transform = attrs[key];
        let serializerTransform = serializer.transforms
          ? serializer.transforms[key]
          : {};
        let resolvedTransform =
          typeof attrs[key] === 'string'
            ? {
                key: attrs[key],
              }
            : {
                key: attrs[key].key,
              };

        if (transform.serialize !== undefined) {
          resolvedTransform.deserialize = transform.serialize;
        }

        if (transform.deserialize !== undefined) {
          resolvedTransform.serialize = transform.deserialize;
        }

        transforms[key] = Object.assign(resolvedTransform, serializerTransform);
      });
    }

    mirageSerializer = mirageSerializer.extend({
      primaryKey,
      transforms,
    });
  }

  MirageSerializerCache[serializerName] = mirageSerializer;

  return mirageSerializer;
}
