/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'accountContactId',
  transforms: {
    contactType: { key: 'type' },
    account: { key: 'accountId' },
  },
});
