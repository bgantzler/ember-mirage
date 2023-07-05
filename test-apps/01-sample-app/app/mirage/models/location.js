import { belongsTo,Model } from 'miragejs';

export default Model.extend({
  facility: belongsTo('facility'),
});
