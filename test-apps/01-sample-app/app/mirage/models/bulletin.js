import { Model } from 'miragejs';

export default Model.extend({
  critical: false,
  bulletinText: null,
  startDate: null,
  expirationDate: null,
  location: null,
  networkApplication: null,
});
