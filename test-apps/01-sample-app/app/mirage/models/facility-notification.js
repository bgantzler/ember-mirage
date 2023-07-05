import { belongsTo,Model } from 'miragejs';

export default Model.extend({
  notification: belongsTo('notification'),
  facility: belongsTo('facility'),
});
