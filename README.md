This is currently an experiment, please use https://github.com/miragejs/ember-cli-mirage 

# Ember Mirage

This addon provides test helpers to allow you to easily setup a mirage server for your tests.
It also provide the ability to have your models, serializers, factories, etc in separate files
within the proper directories without having to manage the imports yourself.

## Compatibility

- Ember.js v3.16 or above
- Ember CLI v3.16 or above
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

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
