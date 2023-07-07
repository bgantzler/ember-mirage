import { faker } from '@faker-js/faker';
import { Factory } from 'miragejs';

export default Factory.extend({
  age() {
    return faker.datatype.number({ min: 32, max: 32 });
  },
});
