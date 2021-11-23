## Converting from Ember-cli-mirage

When MirageJS was extracted, ember-cli-mirage continued to re-export many objects that are now part of mirageJS. While this
addon does require mirageJS, it does not re-export any of those objects. You should update all the current imports to import
the objects from mirageJS instead of ember-cli-mirage. You can do that now while continuing to use ember-cli-mirage. Once
the imports have been completed you will find there is only a couple steps to convert to using this addon.

The following is no longer re-exported
* Model, belongTo, hasMany
* Factories, Traits
* JSONAPISerializer, ActiveModelSerializer, RestSerializer


You adjust for the re-exports no longer happeneing by doing the following: That should fix almost all the potential import problems.
* Replace all `ember-cli-mirage` with `miragejs`.
* Then replace all `import { setupMirage } from 'miragejs';` (Adjust for syntax if you are not using standard prettier) 
with `import { setupMirage } from 'ember-mirage';`

If your old `mirage/config.js` just exports a default function of all your routes, example

```js
export default function() {
  // example routes
  this.get('/posts');
}
```

remove the export default and name the function. `routes` is shown here as an example. 
```js
function routes() {
  // example routes
  this.get('/posts');
}
```

Add the following function to the `mirage/config.js` file. If you did not name your function `routes` 
update the `routes` below to the name you choose
```js
import { createServer } from 'miragejs';
import {
  discoverEmberDataModels
} from 'ember-mirage';

export default function(config) {
  let finalConfig = {
    ...config,
    models: { ...discoverEmberDataModels(), ...config.models },
    routes,
  };

  return createServer(finalConfig);
}
```

The `...discoverEmberDataModels()` is discovering the ember data models. This was on by default in `ember-cli-mirage`.

If you have any environment variables in your `environment/config.js` make sure you change the `ember-cli-mirage` 
to `ember-mirage`. All environment variables are still supported except `discoverEmberDataModels`. 
If you had that set to false, just remove the `...discoverEmberDataModels()` from the `mirage/config.js` 




The following are no longer exported. If you are using them from ember-cl-mirage, change the import to the below 
name and import from miragejs;
* camelize (exported as _utilsInflectorCamelize from miragejs)
* dasherize (exported as _utilsInflectorDasherize from miragejs)
* underscore (exported as _utilsInflectorUnderscore from miragejs)
* capitalize (exported as _utilsInflectorCapitalize from miragejs)

The following are no longer re-exported from ember-inflector. If you were using them, import from ember-inflector.
* singularize
* pluralize
