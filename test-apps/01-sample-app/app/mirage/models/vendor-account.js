import { belongsTo, hasMany,Model } from 'miragejs';

export default Model.extend({
  facility: belongsTo('facility'),
  vendor: belongsTo('vendor'),
  facilityVendorCatalogs: hasMany('facility-vendor-catalog'),
});
