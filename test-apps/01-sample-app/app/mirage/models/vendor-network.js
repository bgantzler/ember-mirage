import { belongsTo, hasMany,Model } from 'miragejs';

export default Model.extend({
  vendor: belongsTo('vendor'),
  network: belongsTo('network'),
  vendorAccounts: hasMany('vendor-account'),
});
