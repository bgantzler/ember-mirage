import { belongsTo,Model } from 'miragejs';

export default Model.extend({
  itemSegment: belongsTo('item-segment'),
});
