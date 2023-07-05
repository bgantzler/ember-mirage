/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'invoiceDetailId',
  transforms: {
    selectedAccount: { key: 'selectedAccountId' },
    master: { key: 'invoiceMasterId' },
    header: { key: 'invoiceHeaderId' },
    lineItem: { key: 'lineItemId' },
    price: { key: 'invoicePriceId' },
    originalInvoiceDetail: { key: 'originalInvoiceDetailId' },
    voidedUser: { key: 'voidedUserId' },
    disputedUser: { key: 'disputedUserId' },
    deferredUser: { key: 'deferredUserId' },
    forcedToInvoiceUser: { key: 'forcedToInvoiceUserId' },
    priceOverrideUser: { key: 'priceOverrideUserId' },
    disputedReason: { key: 'invoiceDisputedReasonId' },
  },
});
