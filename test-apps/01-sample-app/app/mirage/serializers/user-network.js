import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'userNetworkId',
  attrs: {
    user: { key: 'userId' },
    network: { key: 'networkId' },
    facility: { key: 'facilityId' },
  },
});
