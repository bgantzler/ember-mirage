import { belongsTo, hasMany,Model } from 'miragejs';

export default Model.extend({
  returnRequest: belongsTo('return-request'),
  facility: belongsTo('facility'),
  submittedUser: belongsTo('user'),
  createdUser: belongsTo('user'),
  status: belongsTo('status'),
  details: hasMany('return-detail'),
  invoiceMaster: belongsTo('invoice-master'),
});
