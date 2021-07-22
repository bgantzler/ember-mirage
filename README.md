https://github.com/ember-cli/ember-load-initializers/blob/master/addon/index.ts

# Ember Mirage

This addon provides test helpers to allow you to easily setup a mirage server for your tests.
It also provide the ability to have your models, serializers, factories, etc in separate files
within the proper directories without having to manage the imports yourself.

## Compatibility

- Ember.js v3.16 or above
- Ember CLI v2.13 or above
- Node.js v12 or above

## Installation

```
ember install ember-mirage
```

## Usage

This addon provides the following capabilities for using mirageJS with ember
* Allows for starting mirage in tests with setupMirage helper
* Allows for starting a mirage server for use in an application
* Allows for defining your Models, Factories, etc in separate files
* Allows for creating Models and Serializers from your Ember Data Models and Serializers (REST)

## Converting from Ember-cli-mirage

When MirageJS was extracted, ember-cli-mirage continued to re-export many objects that are now part of mirageJS. While this 
addon does require mirageJS, it does not re-export any of those objects. You should update all the current imports to import
the objects from mirageJS instead of ember-cli-mirage. You can do that now while continuing to use ember-cli-mirage. Once
the imports have been completed you will find there is only a couple steps to convert to using this addon.

Change the imports for all the following Objects
* Model, belongTo, hasMany
* Factories, Traits
* JSONAPISerializer, ActiveModelSerializer, RestSerializer

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
