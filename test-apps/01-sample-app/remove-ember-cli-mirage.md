Ember CLI Mirage does a couple of things for you
1. auto imports all the files in the separate folders and creates an options hash for mirage
2. auto looks up the config to make the server (this is why it is difficult to have different versions of the server to test with) 
3. provides an auto discover and conversion of ember data models to mirage models
4. provides and auto discover and conversion of ember data serializers to mirage serializers
5. Provides a setupMirage qunit hook that calls start mirage for you in tests
6. Provides a startMirage method to start the mirage server
   a. for tests this is called via the setupMirage
   b. for dev/production this is called by an app initializer. This is why it is difficult to provide different
      mirage configs for each environment, or even for different tests



For each point you will need to provide for this on your own.
1. embroider wants your app to be statically analyzable, for this reason you should import the files yourself and
and not let CLI Mirage build them for you. Create a models.js file that imports all your models and exports them as 
a hash. Do this for serializers, factories, etc. You will note from the MirageJS docs, they show creating the models
in the config file directly which is also an option
You could create this in the mirage models folder or in the root mirage folder. 

mirage/models.js
```js
import bulletin from './models/bulletin';
import facilityLocation from './models/facility-location';

export default {
  bulletin,
  facilityLocation
}

```
mirage/config.js
```js
import {
discoverEmberDataModels,
applyEmberDataSerializers,
} from 'ember-cli-mirage';
import { createServer } from 'miragejs';
import addonConfig from 'ember-rxid/mirage/routes/config';
import models from './models';

export default function (config) {
let finalConfig = {
...config,
models: { ...discoverEmberDataModels(), ...models },  // using what was imported, not config.models
serializers: applyEmberDataSerializers(config.serializers),
routes,
};

return createServer(finalConfig);
}

function routes() {
// let dummy=1;
this.config({ routes: addonConfig });
}

```


2. SetupMirage and startMirage take a second option hash that allows you to specfiy the server to use. This allows you to 
sepcify the mirage server config on a test by test basis. It is suggested that you do this for every test. This gives a
clear indication of what tests use what config and this auto lookup is no longer needed.

mirage/test2-config.js
```js
import {
  discoverEmberDataModels,
  applyEmberDataSerializers,
} from 'ember-cli-mirage';
import { createServer } from 'miragejs';
import addonConfig from 'ember-rxid/mirage/routes/config';
import models from './models';

export default function (config) {
  let finalConfig = {
    ...config,
    models: { ...discoverEmberDataModels(), ...models },
    serializers: applyEmberDataSerializers(config.serializers),
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  // let dummy=1;
  this.config({ routes: addonConfig });
}

```
An example test file
```js
import mirageConfig from 'ember-rxid/mirage/test2-config';
import { setupMirage } from 'ember-cli-mirage/test-support';
...

module('Acceptance | bulletin', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks, { mirageConfig });

  test('a test', async function (assert) {
  ...    
  }
})
```






