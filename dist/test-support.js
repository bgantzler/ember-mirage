import { dependencySatisfies } from '@embroider/macros';
export { setupMirage } from './test-support/setup-mirage.js';

if (dependencySatisfies('ember-qunit', '*')) {
  window.QUnit.config.urlConfig.push({
    id: 'mirageLogging',
    label: 'Mirage logging'
  });
}
//# sourceMappingURL=test-support.js.map
