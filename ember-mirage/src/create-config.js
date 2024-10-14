import { _utilsInflectorCamelize as camelize } from 'miragejs';

async function getDefaultExports(modules) {
  return Promise.all(
    Object.entries(modules).map(([path, importFn]) =>
      importFn().then((module) => ({ path, defaultExport: module.default })),
    ),
  );
}

export function entityName(path) {
  const filenameWithoutExt = path.split('/').pop().split('.')[0];
  return camelize(filenameWithoutExt);
}

export default async function createConfig(mirageImportMap = {}) {
  return {
    factories: await importEntities(mirageImportMap.factories),
    fixtures: await importEntities(mirageImportMap.fixtures),
    models: await importEntities(mirageImportMap.models),
    scenarios: await importEntities(mirageImportMap.scenarios),
    serializers: await importEntities(mirageImportMap.serializers),
    identityManagers: await importEntities(mirageImportMap.identityManagers),
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
