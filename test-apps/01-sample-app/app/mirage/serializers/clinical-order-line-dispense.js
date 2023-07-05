/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'clinicalOrderLineDispenseId',
  transforms: {
    clinicalOrderLine: { key: 'clinicalOrderLineId' },
    lineItem: { key: 'lineItemId' },
  },
});
