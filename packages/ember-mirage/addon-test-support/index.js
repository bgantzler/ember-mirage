import { dependencySatisfies } from '@embroider/macros';

if (dependencySatisfies('ember-qunit', '*')) {
  window.QUnit.config.urlConfig.push({
    id: 'mirageLogging',
    label: 'Mirage logging',
  });
}

export { default as setupMirage } from '../setup-mirage';
