/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'rfidPassId',
  transforms: {
    user: { key: 'userId' },
    facility: { key: 'facilityId' },
    enclosurePasses: { serialize: false, deserialize: false },
  },
});
