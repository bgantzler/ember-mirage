/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'accountId',
  transforms: {
    dispenseGraceMinutes: { key: 'consumeGraceMinutes' },
    accountType: { deserialize: 'records', serialize: 'records' },
    accountExternalId: { key: 'accountExternalAccountId' },
    contacts: { deserialize: 'records', serialize: 'records' },
    products: { deserialize: 'records', serialize: false },
    pars: { deserialize: 'records', serialize: false },
  },
  // eslint-enable
});
