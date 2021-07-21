import RESTSerializer from '@ember-data/serializer/rest';

export default class AuthorSerializer extends RESTSerializer {
  attrs = {
    name: { key: 'fullName' },
  };
}
