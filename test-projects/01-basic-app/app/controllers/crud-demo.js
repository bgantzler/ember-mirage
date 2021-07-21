import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CrudDemoController extends Controller {
  @service
  store;

  @tracked
  newName;

  @action
  async createUser() {
    let name = this.newName;

    let model = this.store.createRecord('user', { name });
    await model.save();

    this.newName = '';
  }

  @action
  updateUser(user) {
    user.save();
  }

  @action
  deleteUser(user) {
    user.destroyRecord();
  }
}
