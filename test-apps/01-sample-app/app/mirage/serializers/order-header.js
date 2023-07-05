/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'orderHeaderId',
  transforms: {
    status: { key: 'statusId' },
    createdUser: { key: 'createdUserId' },
    submittedUser: { key: 'submittedUserId' },
    vendorAccount: { key: 'vendorAccountId' },
  },
});
