/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'orderDetailId',
  transforms: {
    orderHeader: { key: 'orderHeaderId' },
    vendorAccount: {
      key: 'vendorAccountId',
      deserialize: 'ids',
      serialize: 'ids',
    },
  },
});
