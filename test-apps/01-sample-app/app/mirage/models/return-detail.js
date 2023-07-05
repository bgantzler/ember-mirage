import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  returnHeader: belongsTo('return-header'),
  lineItem: belongsTo('lineItem'),
  status: belongsTo('status'),
  reasonCode: belongsTo('reason-code'),
  createdUser: belongsTo('user'),
  facility: belongsTo('facility'),
});
