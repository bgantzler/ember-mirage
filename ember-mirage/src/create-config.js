import { createMirageModel, createMirageSerializer } from './ember-data';
import { _utilsInflectorCamelize as camelize } from 'miragejs';

async function getDefaultExports(modules) {
  return Promise.all(
    Object.entries(modules).map(([path, importFn]) =>
      importFn().then((module) => ({ path, defaultExport: module.default })),
    ),
  );
}

function entityName(path) {
  const filenameWithoutExt = path.split('/').pop().split('.')[0];
  return camelize(filenameWithoutExt);
}

export default async function createConfig(
  mirageImportMap = {},
  emberDataConfig = {},
) {
  const serializers = await importEntities(mirageImportMap.serializers);

  return {
    factories: await importEntities(mirageImportMap.factories),
    fixtures: await importEntities(mirageImportMap.fixtures),
    models: {
      ...importEmberDataModels(emberDataConfig),
      ...(await importEntities(mirageImportMap.models)),
    },
    scenarios: await importEntities(mirageImportMap.scenarios),
    serializers: {
      ...importEmberDataSerializers(serializers, emberDataConfig),
      ...serializers,
    },
    identityManagers: importEntities(mirageImportMap.identityManagers),
  };
}

async function importEntities(importMap = {}) {
  const modules = await getDefaultExports(importMap);

  return modules.reduce((acc, { path, defaultExport }) => {
    const configName = entityName(path);
    acc[configName] = defaultExport;
    return acc;
  }, {});
}

function importEmberDataModels(emberDataConfig = {}) {
  const { store, models = {} } = emberDataConfig;
  return Object.keys(models).reduce((acc, path) => {
    const configName = entityName(path);
    acc[configName] = createMirageModel(store, configName);
    return acc;
  }, {});
}

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
