import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  account: belongsTo(),
});
