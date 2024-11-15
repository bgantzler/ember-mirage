//import { createConfig } from 'ember-mirage';
//import defaultRoutes from '../routes/default';
//
//export async function config(store) {
//  const { importEmberDataModels, importEmberDataSerializers } = await import(
//    'ember-mirage/ember-data'
//  );
//
//  const mirageConfig = await createConfig({
//    factories: import.meta.glob('./factories/*'),
//    fixtures: import.meta.glob('./fixtures/*'),
//    // Don't import our mirage things that will be auto-discovered
//    // models: import.meta.glob('./models/*'),
//    // serializers: import.meta.glob('./serializers/*'),
//    identityManagers: import.meta.glob('./identity-managers/*'),
//  });
//
//  return {
//    ...mirageConfig,
//    models: {
//      // use ember-data model auto discovery
//      ...importEmberDataModels(store, import.meta.glob('../models/*')),
//      ...mirageConfig.models,
//    },
//    // apply ember-data serializer config details to mirage serializers
//    serializers: importEmberDataSerializers(store, mirageConfig.serializers),
//    routes() {
//      this.config({ routes: defaultRoutes });
//    },
//  };
//}
//
