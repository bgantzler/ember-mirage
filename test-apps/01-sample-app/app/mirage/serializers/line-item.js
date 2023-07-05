/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'lineItemId',
  transforms: {
    manifest: { key: 'manifestHeaderId' },
    facility: { key: 'modifiedFacilityId' },
    lineItemSegment: { key: 'lineItemSegmentId' },
    patient: { key: 'patientId' },
  },
});
