import { belongsTo, hasMany,Model } from 'miragejs';

export default Model.extend({
  rfidDeviceDefinition: belongsTo('rfid-device-definition'),
  facility: belongsTo('facility'),
  enclosurePasses: hasMany('rfid-enclosure-pass'),
});
