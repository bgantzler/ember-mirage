import RestSerializer from '@ember-data/serializer/rest';

// eslint-disable-next-line ember/no-classic-classes
export default RestSerializer.extend({
  attrs: {
    address: 'addressId',
    blogPosts: { deserialize: 'records' },
  },
});
