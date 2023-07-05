import { belongsTo,Model } from 'miragejs';

export default Model.extend({
  network: belongsTo('network'),
});
