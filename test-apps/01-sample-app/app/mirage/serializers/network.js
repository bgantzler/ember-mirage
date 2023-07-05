/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'networkId',
  transforms: {
    name: { key: 'networkName' },
    code: { key: 'networkCode' },
    application: { key: 'networkApplication' },
  },
});
