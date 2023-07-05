import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

import { setupRenderingTest } from 'ember-mirage-sample/tests/helpers';

module('Integration | Component | movies', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Movies />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Movies>
        template block text
      </Movies>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
