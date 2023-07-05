import { belongsTo, hasMany,Model } from 'miragejs';

export default Model.extend({
  network: belongsTo('network'),
  userNetworks: hasMany('user-network'),
  userType: belongsTo('user-type'),
});
