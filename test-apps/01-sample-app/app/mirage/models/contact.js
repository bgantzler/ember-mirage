import { belongsTo,Model } from 'miragejs';

export default Model.extend({
  account: belongsTo(),
});
