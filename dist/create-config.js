import { _utilsInflectorCamelize } from 'miragejs';

async function getDefaultExports(modules) {
  return Promise.all(Object.entries(modules).map(([path, importFn]) => importFn().then(module => ({
    path,
    defaultExport: module.default
  }))));
}
function entityName(path) {
  const filenameWithoutExt = path.split('/').pop().split('.')[0];
  return _utilsInflectorCamelize(filenameWithoutExt);
}
async function createConfig(mirageImportMap = {}) {
  return {
    factories: await importEntities(mirageImportMap.factories),
    fixtures: await importEntities(mirageImportMap.fixtures),
    models: await importEntities(mirageImportMap.models),
    scenarios: await importEntities(mirageImportMap.scenarios),
    serializers: await importEntities(mirageImportMap.serializers),
    identityManagers: await importEntities(mirageImportMap.identityManagers)
  };
}
async function importEntities(importMap = {}) {
  const modules = await getDefaultExports(importMap);
  return modules.reduce((acc, {
    path,
    defaultExport
  }) => {
    const configName = entityName(path);
    acc[configName] = defaultExport;
    return acc;
  }, {});
}

export { createConfig, entityName };
//# sourceMappingURL=create-config.js.map
