import { setupMirage } from 'ember-cli-mirage';
import config from 'embroider-app/config/environment';
import makeServer from 'embroider-app/mirage/config';

export default {
  name: 'setup-mirage',
  initialize(application) {
    setupMirage(config, makeServer, application);
  },
};
