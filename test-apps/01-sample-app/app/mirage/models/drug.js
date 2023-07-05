import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  manufacturer: belongsTo(),
  unitOfMeasure: belongsTo(),
});
