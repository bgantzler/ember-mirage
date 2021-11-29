---
layout: default
title: "Server Configuration"
nav_order: 4
permalink: /config/
---
# Server configuration

The `/mirage/config.js` file contains a default export function that is called to allow
you to define your MirageJS server using the `createServer` imported from MirageJS. See the 
[MirageJS documentation](https://miragejs.com/docs/getting-started/overview/) for 
configuring a server.

This function is called with a config object. The config is defined as 
```js
config = {
  environment: "test", // The environment "test" or "development"
  factories: {},  // Object containing all the factories defined in /mirage/factories
  identityManagers: {},  // Object containing all the identity manages defined in /mirage/identity-managers
  models: {}, // Object containing all the models defined in /mirage/models
  scenarios: {}, // Object containing all the scenarios defined in /mirage/scenarios
  serializers: {}, // Object containing all the serializers defined in /mirage/serializers
};
```

This object can be used with the MirageJS `createServer` method to define a server;
```js
import { createServer } from 'miragejs';

export default function(config) {
  let finalConfig = {
    factories: config.factories,
    models: config.models,
  };

  return createServer(finalConfig);
}
```

To define the routes to your Mirage server you would include them here just as the MirageJS documentation shows
```js
import { createServer } from 'miragejs';

export default function(config) {
  let finalConfig = {
    factories: config.factories,
    models: config.models,
    routes() {
      this.namespace = "api"

      this.get("/movies", () => {
        return {
          movies: [
            { id: 1, name: "Inception", year: 2010 },
            { id: 2, name: "Interstellar", year: 2014 },
            { id: 3, name: "Dunkirk", year: 2017 },
          ],
        }
      })
    },
  };

  return createServer(finalConfig);
}
```

If you wish to define your routes as a separate function
```js
import { createServer } from 'miragejs';

export default function(config) {
  let finalConfig = {
    factories: config.factories,
    models: config.models,
    routes,
  };
  
  return createServer(finalConfig);
}

function routes() {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-mirage.com/docs/route-handlers/shorthands
  */
}

```

To auto-discover all the ember data models, import `discoverEmberDataModels` from
`ember-mirage` and add the results to your config
```js
import { createServer } from 'miragejs';
import { discoverEmberDataModels } from 'ember-mirage';

export default function(config) {
  let finalConfig = {
    factories: config.factories,
    models: { ...discoverEmberDataModels(), ...config.models },
  };

  return createServer(finalConfig);
}
```

The auto discovered ember data models are added first, then if any model was defined in the mirage/models directory are
added. If you defined a model in the mirage directory named the same as an ember data model, the mirage model will 
be used instead. 

## Serializers

If you would like to have Mirage adjust or create your serializers for you from your ember data serializers `applyEmberDataSerializers`
has been provided to do this. 

When Mirage auto discovers your ember data models, should you also have the same model defined in mirage, it will use the mirage
version of the model. With serializers, you may have created a mirage serializer to override some methods. In this case you would
want the serializers merged, not replaced.

`applyEmberDataSerializers` will apply the `primaryKey` and `attrs` from your ember data serializers to your mirage serializers.
If you have not created a mirage serializer it will create one and extend it from your mirage application serializer.
Ensure your application serializer extends from EmberDataSerializer as the default JSONApiSerializer will not understand
how to use `primaryKey` and `transforms`. If you have not created a mirage serializer named application, the created serializer
will extend EmberDataSerializer directly.

```javascript
// Example of having Mirage adjust/create your serializers similiar to ember data models
import { createServer } from 'miragejs';
import { discoverEmberDataModels, applyEmberDataSerializers } from 'ember-mirage';

export function makeServer(config) {
  let finalConfig = {
    factories: config.factories,
    models: { ...discoverEmberDataModels(), ...config.models },
    serializers: applyEmberDataSerializers(config.serializers),
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  // this.namespace = '/api'

  // this.resource('user')
}
```
