import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  network: belongsTo('network'),
});
