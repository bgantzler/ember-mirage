import { belongsTo, hasMany,Model } from 'miragejs';

export default Model.extend({
  submittedUser: belongsTo('user'),
  z120ExportUser: belongsTo('user'),
  master: belongsTo('invoice-master'),
  originalInvoiceHeader: belongsTo('invoice-header'),
  account: belongsTo('account'),
  details: hasMany('invoice_detail'),
});
