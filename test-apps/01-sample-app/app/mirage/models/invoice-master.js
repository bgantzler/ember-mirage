import { belongsTo, hasMany,Model } from 'miragejs';

export default Model.extend({
  facility: belongsTo('facility'),
  status: belongsTo('status'),
  invoiceType: belongsTo('invoice-type'),
  headers: hasMany('invoice-header'),
  details: hasMany('invoice-detail'),
  priceHeaders: hasMany('invoice-price-header'),
});
