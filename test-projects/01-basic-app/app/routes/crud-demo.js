import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class CrudDemoRoute extends Route {

  async model() {
    debugger;
    let response = await fetch('/users');
    return  response.json();
  }
}
