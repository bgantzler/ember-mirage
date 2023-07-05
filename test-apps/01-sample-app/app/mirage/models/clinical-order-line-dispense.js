import { belongsTo,Model } from 'miragejs';

export default Model.extend({
  lineItem: belongsTo(),
  clinicalOrderLine: belongsTo(),
});
