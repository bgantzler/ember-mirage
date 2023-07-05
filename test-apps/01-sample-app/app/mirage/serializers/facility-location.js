/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default class FacilityLocationSerializer extends ApplicationSerializer {
  primaryKey = 'locationId';
  transforms = {
    facility: { key: 'facilityId' },
  };
}
