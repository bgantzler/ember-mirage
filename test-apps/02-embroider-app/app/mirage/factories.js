import { default as user } from './factories/user';
import { default as thing } from './factories/nested/thing';

export const factories = {
  user,
  'nested/thing': thing,
};
