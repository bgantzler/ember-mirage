import { createServer } from 'miragejs';

export default function makeServer(config) {
  let finalConfig = {
    ...config,
    routes,
  };

  return createServer(finalConfig);
}

function routes() {}
