/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'rfidEnclosureId',
  transforms: {
    facility: { key: 'facilityId' },
    enclosurePasses: { serialize: false, deserialize: false },
    rfidDeviceDefinition: { key: 'deviceDefinitionId' },
  },
});
