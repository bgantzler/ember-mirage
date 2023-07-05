import { belongsTo,Model } from 'miragejs';

export default Model.extend({
  priceHeader: belongsTo('invoice-price-header'),
});
