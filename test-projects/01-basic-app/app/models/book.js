import Model, { belongsTo } from '@ember-data/model';

export default class BookModel extends Model {
  @belongsTo('user')
  user;
}
