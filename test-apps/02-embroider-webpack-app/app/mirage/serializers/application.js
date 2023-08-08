import EmberDataSerializer from 'ember-mirage/ember-data-serializer';

export default class ApplicationSerializer extends EmberDataSerializer {
  appSerializer = true;
  root = false;
  embed = true;

  normalize() {
    // The above root:false is not working for some reason.
    this.root = false;

    return EmberDataSerializer.prototype.normalize.apply(this, arguments);
  }
}
