import { Model, belongsTo, hasMany } from 'miragejs';

export default Model.extend({
  accountType: belongsTo(),
  contacts: hasMany(),
  products: hasMany(),
  pars: hasMany(),
});
