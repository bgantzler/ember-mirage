import ENV from '../config/environment';
import startMirageImpl from 'ember-mirage/start-mirage';
import getRfc232TestContext from 'ember-mirage/get-rfc232-test-context';
import makeServer from '../mirage/config';

//
// This initializer does two things:
//
// 1. Pulls the mirage config objects from the application's config and
//    registers them in the container so `ember-mirage/start-mirage` can
//    find them (since it doesn't have access to the app's namespace).
// 2. Provides legacy support for auto-starting mirage in pre-rfc268 acceptance
//    tests.
//
export default {
  name: 'ember-mirage',
  initialize(application) {
    if (makeServer) {
      application.register('mirage:make-server', makeServer, {
        instantiate: false,
      });
    }

    ENV['ember-mirage'] = ENV['ember-mirage'] || {};
    if (_shouldUseMirage(ENV.environment, ENV['ember-mirage'])) {
      startMirage(ENV);
    }
  },
};

export function startMirage(env = ENV) {
  return startMirageImpl(null, { env, makeServer });
}

function _shouldUseMirage(env, addonConfig) {
  if (typeof FastBoot !== 'undefined') {
    return false;
  }
  if (getRfc232TestContext()) {
    return false;
  }
  let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
  let defaultEnabled = _defaultEnabled(env, addonConfig);

  return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
}

/*
  Returns a boolean specifying the default behavior for whether
  to initialize Mirage.
*/
function _defaultEnabled(env, addonConfig) {
  let usingInDev = env === 'development' && !addonConfig.usingProxy;
  let usingInTest = env === 'test';

  return usingInDev || usingInTest;
}
