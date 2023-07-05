import { belongsTo,Model } from 'miragejs';

export default Model.extend({
  role: belongsTo(),
  user: belongsTo(),
});
