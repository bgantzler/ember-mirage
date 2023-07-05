import { belongsTo, hasMany,Model } from 'miragejs';

export default Model.extend({
  vendorType: belongsTo('vendor-type'),
  vendorAccounts: hasMany('vendor-account'),
  vendorNetworks: hasMany('vendor-network'),
});
