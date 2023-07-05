/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'returnHeaderId',
  transforms: {
    createdUser: { key: 'createdUserId' },
    returnRequest: { key: 'returnRequestId' },
    facility: { key: 'facilityId' },
    submittedByUser: { key: 'submittedBy' },
    details: { deserialize: false, serialize: false },
    invoiceMaster: { key: 'invoiceMasterId' },
  },
});
