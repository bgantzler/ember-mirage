import { belongsTo, hasMany,Model } from 'miragejs';

export default Model.extend({
  master: belongsTo('invoice-master'),
  priceDetails: hasMany('invoice_price_detail'),
  account: belongsTo('account'),
});
