import { singularize, pluralize } from 'ember-inflector';
import { _assert } from 'miragejs';

function startMirage(makeServer, {
  owner,
  env,
  ...otherOptions
} = {}) {
  _assert('There is no makeServer function passed to startMirage', makeServer);
  _assert('Mirage config default exported function must at least one parameter', makeServer.length > 0);
  if (!env) {
    _assert('You must pass `owner` to startMirage() to lookup environment', owner);
    env = owner.resolveRegistration('config:environment');
  }
  let environment = env.environment;
  let options = {
    env,
    environment,
    inflector: {
      singularize,
      pluralize
    },
    ...otherOptions
  };
  let server = makeServer(options);

  // Check to see if mirageLogging is on the URL. If so, enable logging on the server
  if (typeof location !== 'undefined' && location.search.indexOf('mirageLogging') !== -1) {
    server.logging = true;
  }
  return server;
}

export { startMirage as s };
//# sourceMappingURL=start-mirage-a6c9b823.js.map
