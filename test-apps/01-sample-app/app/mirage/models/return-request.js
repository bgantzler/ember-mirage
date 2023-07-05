import { Model, belongsTo, hasMany } from 'miragejs';

export default Model.extend({
  status: belongsTo('status'),
  modifiedUser: belongsTo('user'),
  requestedBy: belongsTo('user'),
  createdUser: belongsTo('user'),
  headers: hasMany('return-header'),
});
