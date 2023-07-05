/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'vendorNetworkId',
  transforms: {
    vendor: { key: 'vendorId' },
    network: { key: 'networkId' },
  },
});
