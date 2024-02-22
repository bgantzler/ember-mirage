import { belongsTo, hasMany, Model } from 'miragejs';

export default Model.extend({
  accountType: belongsTo(),
  products: hasMany(),
});
