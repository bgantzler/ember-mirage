import login, { loginUsers } from 'ember-rxid/mirage/login';
import setupMirageData from 'ember-rxid/mirage/seedData';
export default login;
export { setupMirageData,loginUsers as superUsers };
