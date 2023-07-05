import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  status: belongsTo('status'),
});
