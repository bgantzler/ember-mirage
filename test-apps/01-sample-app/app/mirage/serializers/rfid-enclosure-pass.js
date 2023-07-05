import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'rfidEnclosurePassId',
  attrs: {
    enclosure: { key: 'rfidEnclosureId' },
    pass: { key: 'rfidPassId' },
  },
});
