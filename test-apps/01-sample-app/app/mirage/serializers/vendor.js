/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'vendorId',
  transforms: {
    vendorType: { key: 'vendorTypeId' },
    vendorAccounts: { serialize: false, deserialize: false },
    vendorNetworks: { serialize: false, deserialize: false },
  },
});
