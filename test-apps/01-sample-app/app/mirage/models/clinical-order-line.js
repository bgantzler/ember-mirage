import { Model, belongsTo, hasMany } from 'miragejs';

export default Model.extend({
  clinicalOrder: belongsTo(),
  clinicalOrderLineDispenses: hasMany(),
});
