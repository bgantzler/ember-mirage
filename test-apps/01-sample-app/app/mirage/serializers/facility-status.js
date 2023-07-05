/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'facilityStatusId',
  transforms: {
    type: { key: 'statusType' },
    name: { key: 'statusText' },
    facility: { key: 'facilityId' },
  },
});
