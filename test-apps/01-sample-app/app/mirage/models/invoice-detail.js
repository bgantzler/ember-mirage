import { belongsTo,Model } from 'miragejs';

export default Model.extend({
  selectedAccount: belongsTo('account'),
  header: belongsTo('invoice-header'),
  master: belongsTo('invoice-master'),
  lineItem: belongsTo('line-item'),
  price: belongsTo('invoice-price-detail'),
  originalInvoiceDetail: belongsTo('invoice-detail'),
  voidedUser: belongsTo('user'),
  disputedUser: belongsTo('user'),
  deferredUser: belongsTo('user'),
  forcedToInvoiceUser: belongsTo('user'),
  priceOverrideUser: belongsTo('user'),
  disputedReason: belongsTo('invoice-disputed-reason'),
  createdUser: belongsTo('user'),
});
