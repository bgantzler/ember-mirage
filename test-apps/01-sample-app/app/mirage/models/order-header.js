import { Model, belongsTo, hasMany } from 'miragejs';

export default Model.extend({
  vendorAccount: belongsTo('vendor-account'),
  status: belongsTo('status'),
  submittedUser: belongsTo('user'),
  createdUser: belongsTo('user'),
  orderDetails: hasMany('order-detail'),
});
