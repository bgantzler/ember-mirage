/* global requirejs */
import Controller from '@ember/controller';
import ENV from 'basic-app/config/environment';

export default class ApplicationController extends Controller {
  environment = ENV.environment;

  get mirageModules() {
    return Object.keys(requirejs.entries).filter((key) =>
      key.match('^ember-mirage')
    );
  }

  get otherIncludedModules() {
    return Object.keys(requirejs.entries).filter((key) => {
      return (
        key.match('^pretender') ||
        key.match('^lodash') ||
        key.match('initializers/ember-mirage')
      );
    });
  }
}
