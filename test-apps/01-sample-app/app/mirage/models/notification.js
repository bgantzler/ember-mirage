import { belongsTo,Model } from 'miragejs';

export default Model.extend({
  category: belongsTo('notification-category'),
});
