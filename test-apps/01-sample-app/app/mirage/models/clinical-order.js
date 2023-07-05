import { Model, belongsTo, hasMany } from 'miragejs';

export default Model.extend({
  patient: belongsTo(),
  physician: belongsTo(),
  status: belongsTo(),
  clinicalOrderLines: hasMany(),
});
