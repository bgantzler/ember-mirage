/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'facilityNotificationId',
  transforms: {
    notification: {
      key: 'notification',
      serialize: 'records',
      deserialize: 'records',
    },
    facility: { key: 'facilityId' },
  },
});
