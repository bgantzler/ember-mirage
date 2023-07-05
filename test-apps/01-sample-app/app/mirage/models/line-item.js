import { belongsTo,Model } from 'miragejs';

export default Model.extend({
  lineItemSegment: belongsTo('item-segment'),
  manifest: belongsTo('manifest'),
  facility: belongsTo('facility'),
  patient: belongsTo('patient'),
});
