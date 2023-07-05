import { belongsTo,Model } from 'miragejs';

export default Model.extend({
  manufacturer: belongsTo(),
  unitOfMeasure: belongsTo(),
});
