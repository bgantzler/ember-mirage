import { Model, belongsTo, hasMany } from 'miragejs';

export default Model.extend({
  rfidDeviceDefinition: belongsTo('rfid-device-definition'),
  facility: belongsTo('facility'),
  enclosurePasses: hasMany('rfid-enclosure-pass'),
});
