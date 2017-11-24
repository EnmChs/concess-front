import { moduleForModel, test } from 'ember-qunit';

moduleForModel('concess', 'Unit | Model | concess', {
  // Specify the other units that are required for this test.
  needs: ['model:comment', 'model:vehicle']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
