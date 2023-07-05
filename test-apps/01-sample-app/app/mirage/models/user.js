import { Model, belongsTo, hasMany } from 'miragejs';

export default Model.extend({
  network: belongsTo('network'),
  userNetworks: hasMany('user-network'),
  userType: belongsTo('user-type'),
});
