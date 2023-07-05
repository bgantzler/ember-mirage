/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'accountCatalogParId',
  transforms: {
    itemSegment: { key: 'lineItemSegmentId' },
  },
});
