import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class extends Controller {
  @service store;

  @tracked newName;

  @action
  createUser(event) {
    event.preventDefault();

    let name = this.newName;

    this.store
      .createRecord('user', { name })
      .save()
      .then(() => {
        this.newName = '';
      });
  }

  @action
  updateUser(user, event) {
    event.preventDefault();

    user.save();
  }

  @action
  deleteUser(user, event) {
    event.preventDefault();

    user.destroyRecord();
  }
}
