import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  role: belongsTo(),
  user: belongsTo(),
});
