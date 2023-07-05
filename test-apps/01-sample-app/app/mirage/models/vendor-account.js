import { Model, belongsTo, hasMany } from 'miragejs';

export default Model.extend({
  facility: belongsTo('facility'),
  vendor: belongsTo('vendor'),
  facilityVendorCatalogs: hasMany('facility-vendor-catalog'),
});
