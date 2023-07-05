/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'invoiceHeaderId',
  transforms: {
    submittedUser: { key: 'submittedUserId' },
    z120ExportUser: { key: 'z120ExportUserId' },
    master: { key: 'invoiceMasterId' },
    account: { key: 'accountId' },
    originalInvoiceHeader: { key: 'originalInvoiceHeaderId' },
  },
});
