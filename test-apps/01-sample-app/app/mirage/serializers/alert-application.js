/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'alertApplicationId',
  transforms: {
    alertDefinition: { key: 'alertDefinitionId' },
    alertDefaultSeverity: { key: 'alertDefaultSeverityId' },
  },
});
