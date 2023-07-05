import { belongsTo,Model } from 'miragejs';

export default Model.extend({
  status: belongsTo('status'),
});
