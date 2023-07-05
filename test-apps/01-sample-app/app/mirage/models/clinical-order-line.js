import { belongsTo, hasMany,Model } from 'miragejs';

export default Model.extend({
  clinicalOrder: belongsTo(),
  clinicalOrderLineDispenses: hasMany(),
});
