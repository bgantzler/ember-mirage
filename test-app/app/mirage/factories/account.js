import { faker } from '@faker-js/faker';
import { Factory } from 'miragejs';

export default Factory.extend({
  id(i) {
    return i;
  },

  modifiedTime() {
    return faker.date.past().getTime();
  },
});
