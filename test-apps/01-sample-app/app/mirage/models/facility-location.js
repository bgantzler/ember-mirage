// the model in ember is called location, so when mirage creates models its called location.
// It should be called facilityLocation, so creating this to name it correctly. When we
// rename the ember mode, this can be deleted as mirage will create it automatically
import { belongsTo,Model } from 'miragejs';

export default Model.extend({
  facility: belongsTo(),
});
