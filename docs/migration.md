---
layout: default
title: "Migration from ember-cli-mirage"
nav_order: 3
permalink: /migration/
---
## Migration from Ember-cli-mirage

You should be able to migrate your application in just a few minutes following the below notes.

MirageJS is now a peer dependency. Your application is required to add 
MirageJS to its package.json.

```bash
ember install miragejs
```

The following were MirageJS objects being re-exported in ember-cli-mirage. These are not re-exported in this addon
* Model, belongTo, hasMany
* Factories, Traits
* JSONAPISerializer, ActiveModelSerializer, RestSerializer

All of these objects are normally only imported in files within the `mirage` directory.
* Replace all `ember-cli-mirage` with `miragejs` in the `mirage` directory only.   NOTE: If you happen to be using 
the EmberDataSerializer, those imports will need to be changed to `ember-mirage`.
* Replace all `ember-cli-mirage/test-support` with `ember-mirage/test-support`

If your `mirage/config.js` is using the default export routes function

```js
export default function() {
  // example routes
  this.get('/posts');
}
```

remove the export default and name the function. `routes` shown here as an example. 
```js
function routes() {
  // example routes
  this.get('/posts');
}
```

Add the following function to the `mirage/config.js` file. If you did not name your function `routes` 
update the `routes` below to the name you chose
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
If you had that set to false, make the models property above look like this `models: config.models` 


The following MirageJS functions are no longer exported. 
If you are using them from ember-cl-mirage, update to import from MirageJS 

The names below are exported from MirageJS. Given that they start with an underscore, you should consult the
MirageJS documentation as these are likely intended to be private.
* camelize (exported as _utilsInflectorCamelize)
* dasherize (exported as _utilsInflectorDasherize)
* underscore (exported as _utilsInflectorUnderscore)
* capitalize (exported as _utilsInflectorCapitalize)

The following are no longer re-exported from ember-inflector. If you were using them, import from ember-inflector.
* singularize
* pluralize


# Why a new addon?

1) Originally ember-cli-mirage contained all the code authored by Sam Selikoff (Thanks Sam). Later The mirage part was 
extracted to its own repo [MirageJS](https://miragejs.com/) and is being maintained by Sam (Keep up the good work). Some re-exports were done for backward compatibility. Sam 
is no longer maintaining ember-cli-mirage. 

2) The parts of MirageJS that are being re-exported is misleading consumers that ember-cli-mirage is the owner of that
code and issues are being opened that should really be opened in MirageJS.  Removing these 
re-exports will clear up that confection

3) I can not find a way to deprecate re-exports, As a new addon that part of the migration can be expected

4) Since MirageJS was extracted, a lot of cruft was left in ember-cli-mirage that could more easily be removed
by creating a new addon. This kind of refactor/consolidation is similar to ember-cli-qunit/ember-qunit to ember-qunit,
ember-cli-test-helpers to @ember/test-helpers, etc

5) The ember-cli-mirage docs uses a version ember-cli-addon-docs that is very out of date. The docs are also published to 
a domain owned by Sam, not sure how long we would be able to use that. Most of the docs in ember-cli-mirage are no longer 
relevant. The equivalent (and updated) docs are now in MirageJS. Creating new docs that are relevant to what the 
addon is now responsible for and updating ember-cli-addon-docs (or dropping) is just easier if done as a new addon. 
