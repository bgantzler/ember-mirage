import { Model, belongsTo, hasMany } from 'miragejs';

export default Model.extend({
  vendor: belongsTo('vendor'),
  network: belongsTo('network'),
  vendorAccounts: hasMany('vendor-account'),
});
