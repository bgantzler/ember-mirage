import { belongsTo, hasMany,Model } from 'miragejs';

export default Model.extend({
  network: belongsTo('network'),
  account: belongsTo('account'),
  enclosures: hasMany('rfid-enclosure'),
  accounts: hasMany('account'),
  vendorAccounts: hasMany('vendor-account'),
  facilityStatus: hasMany('facility-status'),
  facilityCatalogs: hasMany('facility-catalog'),
  facilityNotifications: hasMany('facility-notification'),
});
