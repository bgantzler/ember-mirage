/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'locationId',
  transforms: {
    name: { key: 'locationText' },
    facility: { key: 'facilityId' },
  },
});
