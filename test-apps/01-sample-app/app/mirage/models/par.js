import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  itemSegment: belongsTo('item-segment'),
});
