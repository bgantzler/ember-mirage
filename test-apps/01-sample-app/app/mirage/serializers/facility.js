/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'facilityId',
  transforms: {
    name: { key: 'facilityName' },
    network: { key: 'networkId' },
    account: { deserialize: 'records', serialize: 'records' },
    facilityNotifications: { deserialize: false, serialize: false },
  },
});
