/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'returnRequestId',
  transforms: {
    createdUser: { key: 'createdUserId', deserialize: 'ids', serialize: 'ids' },
    modifiedUser: {
      key: 'modifiedUserId',
      deserialize: 'ids',
      serialize: 'ids',
    },
  },
});
