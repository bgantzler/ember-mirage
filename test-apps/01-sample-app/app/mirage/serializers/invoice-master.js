/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'invoiceMasterId',
  transforms: {
    facility: { key: 'facilityId' },
    status: { key: 'statusId' },
    invoiceType: { key: 'invoiceTypeId' },
  },
});
