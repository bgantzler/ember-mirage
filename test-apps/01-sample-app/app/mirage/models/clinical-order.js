import { belongsTo, hasMany,Model } from 'miragejs';

export default Model.extend({
  patient: belongsTo(),
  physician: belongsTo(),
  status: belongsTo(),
  clinicalOrderLines: hasMany(),
});
