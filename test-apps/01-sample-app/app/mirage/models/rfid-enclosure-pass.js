import { belongsTo,Model } from 'miragejs';

export default Model.extend({
  enclosure: belongsTo('rfid-enclosure'),
  pass: belongsTo('rfid-pass'),
});
