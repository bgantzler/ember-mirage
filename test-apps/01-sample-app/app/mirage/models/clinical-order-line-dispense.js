import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  lineItem: belongsTo(),
  clinicalOrderLine: belongsTo(),
});
