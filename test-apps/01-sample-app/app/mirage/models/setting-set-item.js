import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  settingSet: belongsTo(),
  settingDefinition: belongsTo(),
});
