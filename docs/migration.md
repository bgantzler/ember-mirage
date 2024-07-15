# Migration

Ember Mirage does not provide a lot of the features that ember-cli-mirage does. It is many of those features that is causing the ember-data issues as well as preventing support for embroider.

Ember mirage does not support the following.

* auto discover of models
* auto discover of serializers
* auto load of mirage files (models/serializers/factories/etc)
* auto discover of the server config
* auto start of mirage in development
* auto register inflector

This guides goes through what you need to do to migrate from ember-cli-mirage and how to accomplish the things needed
to use mirageJS

ECM also contains code to exclude the mirage files during certain builds, for example production. This addon does not include that feature and instead relies on embroider. If you are not on embroider yet, you may desire to wait until an non-embroider solution is completed.

Steps 1 - 6 should be completed in ember-cli-mirage prior to converting to ember-mirage, Consider this a form of removing deprecations so that you can move to the next version (this addon).

1) Remove the use of autoDiscoverModels.

    Since ECM auto discovers your models, it creates a mirage model even if you don't need it. Since we don't know what models you actually use, you will need to create a mirage model for every model in ember data. Using the blueprints do `ember g mirage-model model-name` for each model you have. This will create a file in your mirage/models directory. Edit each model and add the belongsTo and hasMany. Mirage does not require you to define the attributes.

   ```js
   //app/models/account.js
   import Model, { belongsTo, hasMany, attr } from '@ember-data/model';

   export default class AccountModel extends Model {
       @attr
       name;

       @belongsTo('accountType', { async: true, inverse: null }),
       accountType;
       
       @hasMany('product', { async: true, inverse: null }),
       products;
   }
   ```

   would look like this in MirageJS. See the mirage guides if you have any questions on defining models [MirageJS Models](https://miragejs.com/docs/main-concepts/models/)

   ```js
   //mirage/models/account.js
   import { Model, belongsTo, hasMany } from 'miragejs';

   export default Model.extend({
     accountType: belongsTo(),
     products: hasMany(),
   });
   ```

   Your make server function previously looked like this

   ```js
   export default function (config) {
     let finalConfig = {
       ...config,
       models: { ...discoverEmberDataModels(), ...config.models },
       routes,
     };

     return createServer(finalConfig);
   }
   ```

   It will now look like this:

   ```js
   export default function (config) {
     let finalConfig = {
       ...config,
       routes,
     };

     return createServer(finalConfig);
   }
   ```

   If you were having issues with the deprecation from ember-data 5, you will no longer have that as the autoDiscover is no longer being called.

2) Remove discover of serializers. If you were using the auto discovery of serializers, you need to remove that by creating mirageJS serializers. If you were not using the auto discover you can skip this. For every serializer needed do `ember g mirage-serializer` to create a file in mirage/serializers The auto discover handled the primaryKey and attr hash.

   ```js
   // serializers/account.js
   export default AppSerializer.extend({
      primaryKey: 'accountId',
      attrs: {
         name: { key: 'accountName' },
         accountType: { deserialize: 'records', serialize: 'records' },
         products: { deserialize: 'records', serialize: false },
      },
   });
   ```

   would be. Note the is you are using serialize/deserialize you would switch them, as you are on the other side. Transforms is used instead of attr because attr was already used by mirageJS for a different purpose

   ```js
   // mirage/serializers/account.js
   /* eslint-disable ember/avoid-leaking-state-in-ember-objects */
   import EmberDataSerializer from 'ember-mirage/ember-data-serializer';

   export default EmberDataSerializer.extend({
    primaryKey: 'accountId',
      transforms: {
         name: { key: 'accountName' },
         accountType: { deserialize: 'records', serialize: 'records' },
         products: { deserialize: false, serialize: 'records' },
      },
    // eslint-enable
   });
   ```

   Your config would have been:

   ```js
   export default function (config) {
     let finalConfig = {
       ...config,
       serializers: applyEmberDataSerializers(config.serializers),
       routes,
     };

     return createServer(finalConfig);
   }
   ```

   and should now be

   ```js
   export default function (config) {
     let finalConfig = {
       ...config,
       routes,
     };

     return createServer(finalConfig);
   }
   ```

3) Remove auto load of mirage files.

   For each directory that mirage auto reads all the files (factories/models/scenarios/serializers/etc), if there are only a few files, you could import them directly and use them in the config as

   ```js
   // mirage/config.js
   import accountModel from './models/account';
   import accountTypeModel from './models/account-type';

   export default function (config) {
     let finalConfig = {
       ...config,
       models: { accountModel, accountTypeModel },
       routes,
     };

     return createServer(finalConfig);
   }
   ```

   Or you can create an import file and import that into the server config.

   ```js
   // mirage/models.js
   import accountModel from './models/account';
   import accountTypeModel from './models/account-type';

   export default {
       accountModel,
       accountTypeModel,
   }
   ```

   ```js
   import myModels from './models';

   export default function (config) {
     let finalConfig = {
       ...config,
       models: myModels,
       routes,
     };

     return createServer(finalConfig);
   }
   ```

   Repeat this process for the other types (factories/serializers/etc)
   This could be added back once an official way to discover these files exists. There is an [RFC](https://github.com/emberjs/rfcs/blob/import-glob/text/0939-import-glob.md) in the works.

4) Register inflectors.

   If you have registered custom inflector rules for pluralization you will need to update your mirage config to tell it to use these rules internally. Mirage uses it's own [custom inflector](https://miragejs.com/docs/advanced/customizing-inflections/) which you can override with Ember's.

   ```js
   // mirage/config.js
   import { pluralize, singularize } from 'ember-inflector';

   export default function (config) {
     let finalConfig = {
       ...config,
      inflector: {
        pluralize,
        singularize,
      },
     };

     return createServer(finalConfig);
   }
   ```

5) Remove auto discover of the server config in ECM the server config is looked up, as it must be the name config in the mirage directory. ECM however does allow you to specify the config you wish to use in each test by doing the following. Note this also allows you to specify a different mirage server for a test is needed.

   ```js
   import { currentURL,visit } from '@ember/test-helpers';
   import { module, test } from 'qunit';

   import mirageConfig from 'myApp/mirage/config';
   import { setupApplicationTest } from 'myApp/tests/helpers';

   import { setupMirage } from 'ember-mirage/test-support';

   module('Acceptance | example test', function (hooks) {
       setupApplicationTest(hooks);
       setupMirage(hooks, { makeServer: mirageConfig });

       test('visiting /example', async function (assert) {
         await visit('/example');
       
         assert.strictEqual(currentURL(), '/example');
       });
   });

   ```

   Since most the time the tests will be using the same server, instead of importing it
   in every test, create the following helper in test-support and change the import of `setupMirage` to use this helper

   ```js
   // tests/test-support/mirage
   import { setupMirage as _setupMirage } from 'ember-mirage/test-support';

   import mirageConfig from 'myApp/mirage/config';

   export function setupMirage(hooks, options) {
     options = options || {};
     options.makeServer = options.makeServer || mirageConfig;
     return _setupMirage(hooks, options);
   }

   ```

   Change the import in your test to

   ```js
   import { setupMirage } from 'myApp/tests/test-support/mirage';
   ```

   You are now specifying the server setup in each test and ECM is no longer using the default config.

6) Remove auto start of the of the server in development or production
   If you are using the mirage server for development or production, instead of having the addon start the server for you, in your code start the server your self. A possible location is in the application route.

   Import startMirage, your server config, then call start mirage. Note that this would allow you, by checking your current environment or any other condition you wish, to start with a different server for each condition

   ```js
   import startMirage  from 'ember-mirage/start-mirage';
   import mirageConfig from 'myApp/mirage/config';
   import { getOwner } from '@ember/owner';

   export default ApplicationRoute extends Route {
     constructor() {
       super(...arguments);
       
       startMirage(mirageConfig, {
         owner: getOwner(this),
       });
     }
   }
   ```

   At this point you are using ECM setupMirage, startMirage and ECM is controlling if mirage is included in the final build via the config settings.

   Implementing this addon:

6) Remove ECM and add this addon to your package.json.
7) Change the import in `myApp/tests/test-support/mirage.js`
   from `import { setupMirage as _setupMirage } from 'ember-cli-mirage/test-support';` to `import { setupMirage as _setupMirage } from 'ember-mirage/test-support';`.
8) Move the mirage directory to the `app`. If your mirage directory is named something    other than mirage, rename it to mirage.
9) Update the ember-cli-build.js to add staticPaths. This will cause embroider to tree shake out the files if they are not imported. If you do use mirage in development or production, make sure the imports use the embroider macro importSync.

   ```js
   return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAppPaths: ['mirage']
   });
   ```
