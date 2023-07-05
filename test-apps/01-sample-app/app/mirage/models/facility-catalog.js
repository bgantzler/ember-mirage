import { belongsTo, hasMany,Model } from 'miragejs';

export default Model.extend({
  facility: belongsTo('facility'),
  drug: belongsTo('drug'),
  facilityVendorCatalogs: hasMany('facility-vendor-catalog'),
  pars: hasMany('facility-catalog-par'),
});
