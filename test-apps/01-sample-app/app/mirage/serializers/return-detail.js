/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'returnDetailId',
  transforms: {
    createdUser: { key: 'createdUserId', deserialize: 'id', serialize: 'id' },
    returnHeader: { key: 'returnHeaderId', deserialize: 'id', serialize: 'id' },
    lineItem: { key: 'lineItemId', deserialize: 'id', serialize: 'id' },
    reasonCode: { key: 'reasonCodeId', deserialize: 'id', serialize: 'id' },
    transferToFacility: {
      key: 'transferToFacilityId',
      deserialize: 'id',
      serialize: 'id',
    },
  },
});
