/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'userId',
  transforms: {
    active: { key: 'enabled' },
    userName: { key: 'username' },
    userNetworks: { serialize: 'records', deserialize: false },
    network: { serialize: 'records', deserialize: false },
    userType: { serialize: 'records', deserialize: 'records' },
  },
});
