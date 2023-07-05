import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  facility: belongsTo('facility'),
});
