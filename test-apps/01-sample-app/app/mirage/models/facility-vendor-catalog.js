import { belongsTo,Model } from 'miragejs';

export default Model.extend({
  facilityCatalog: belongsTo('facility-catalog'),
  vendorAccount: belongsTo('vendor-account'),
});
