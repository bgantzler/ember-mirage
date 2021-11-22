import { createServer } from 'miragejs';

export default function (config) {
  let finalConfig = {
    ...config,
    routes,
  };

  return createServer(finalConfig);
}

function routes() {}
