/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'invoicePriceHeaderId',
  transforms: {
    master: { key: 'invoiceMasterId' },
    account: { key: 'accountId' },
  },
});
