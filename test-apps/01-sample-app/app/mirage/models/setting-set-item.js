import { belongsTo,Model } from 'miragejs';

export default Model.extend({
  settingSet: belongsTo(),
  settingDefinition: belongsTo(),
});
