import { Model, belongsTo, hasMany } from 'miragejs';

export default Model.extend({
  application: belongsTo('network-application'),
  facilities: hasMany('facility'),
});
