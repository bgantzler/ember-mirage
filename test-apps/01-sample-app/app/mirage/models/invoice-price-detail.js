import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  priceHeader: belongsTo('invoice-price-header'),
});
