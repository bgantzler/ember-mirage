/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'ndc',
  transforms: {
    manufacturer: { serialize: 'records', deserialize: false },
    unitOfMeasure: { deserialize: 'records', serialize: 'records' },
    drugDisplayName: { deserialize: false },
  },
});
