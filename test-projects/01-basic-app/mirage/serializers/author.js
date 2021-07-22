import { EmberDataSerializer } from 'ember-mirage';

export default EmberDataSerializer.extend({
  appSerializer: true,
  root: false,
  embed: true,

  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  transforms: {
    books: { serialize: false },
  },

  normalize() {
    // The above root:false is not working for some reason.
    this.root = false;

    return EmberDataSerializer.prototype.normalize.apply(this, arguments);
  },
});
