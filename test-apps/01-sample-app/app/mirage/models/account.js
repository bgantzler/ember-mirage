import { belongsTo, hasMany,Model } from 'miragejs';

export default Model.extend({
  accountType: belongsTo(),
  contacts: hasMany(),
  products: hasMany(),
  pars: hasMany(),
});
