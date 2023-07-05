import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  category: belongsTo('notification-category'),
});
