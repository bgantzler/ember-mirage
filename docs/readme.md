
This addon exports the following methods:

startMirage(makeServer, optionsHash) - Use this to start a server (normally during development)
makeServer - the method that will create and return your Mirage server
optionsHash - you must specify owner or env
owner - the container owner, required if you ember-mirage to lookup the environment for you
env - the environment config. This is the export from config/environment.js. It is registered
on the container as 'config:environment'
(any additional options you wish to pass into the createServer function)

setupMirage(hooks, optionsHash) - Use this to start a server (normally during tests)
hooks - The hooks from test. This looks for the beforeEach method and adds a hook for starting the MirageJS Server.
afterEach is also hooked into to stop the server.
optionsHash -
makeServer - required: the method that will create and return your Mirage server
(any additional options you wish to pass into the createServer function)


Define a helper method to create a MirageJS server. We suggest in the following file
app/mirage/servers/default.js. The config object will contain any of the options you choose to pass
on startMirage or setupMirage as well as some required by the server, environment and inflector.

This is the function that you will pass into startMirage or setMirage as the makeServer function.

```js   app/mirage/servers/default.js
export default function (config) {
  let { environment, trackRequests, inflector } = config;

  let finalConfig = {
    environment,
    trackRequests,
    inflector,

    routes() {
      this.namespace = "api"
    
      this.get("/movies", (schema, request) => {
          return schema.movies.all()
      })
    },
  };

  return createServer(finalConfig);
}

```

In each test, import the makeServer function and call setupMirage. Note that the mirage server will be set
on your test instance as server should you need access to the mirage server

```js    example-test.js
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';

import { setupMirage } from 'ember-mirage/test-support';
import makeServer from 'my-app/mirage/server/default';

module('Acceptance | bulletin', function (hooks) {
    setupApplicationTest(hooks);
    setupMirage(hooks, { makeServer });

    test('Visit bulletins', async function (assert) {
       ... 
        // this.server is the mirage server that was started
    });
});

```

The reason to put the default server config in a directory named servers, is you can define multiple servers and choose
which you wish to user per test by just importing the desired server.

Since most your tests will use the same server, rather than having to import the same server into every test, you could
create the following file in your test-support directory. If you pass in a makeServer, it will use that one.
If you do not, it will use the server your designated as the default server.

```js    tests/test-support/mirage.js
import { setupMirage as _setupMirage } from 'ember-mirage/test-support';
import mirageConfig from 'my-app/mirage/server/default';

export function setupMirage(hooks, options) {
  options = options || {};
  options.makeServer = options.makeServer || mirageConfig;
  return _setupMirage(hooks, options);
}
```
```js   example-test.js
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';

import { setupMirage } from 'my-app/tests/test-support/mirage';

module('Acceptance | bulletin', function (hooks) {
    setupApplicationTest(hooks);
    setupMirage(hooks);

    test('Visit bulletins', async function (assert) {
       ... 
        // this.server is the mirage server that was started
    });
});

```


defining Models
The docs for Mirage examples show defining the models in-line