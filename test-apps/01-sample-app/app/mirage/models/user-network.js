import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  user: belongsTo('user'),
  network: belongsTo('network'),
  facility: belongsTo('facility'),
});
