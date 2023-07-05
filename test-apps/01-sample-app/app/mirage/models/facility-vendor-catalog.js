import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  facilityCatalog: belongsTo('facility-catalog'),
  vendorAccount: belongsTo('vendor-account'),
});
