const assert = require('assert');
const { Tower } = require('../src/tower.js');

describe('Tower', () => {
  it('Should validate the state and instance of other tower', () => {
    const tower1 = new Tower(1, 2);
    const tower2 = new Tower(1, 2);
    const tower3 = new Tower(1);

    assert.ok(tower1.equals(tower2));
    assert.ok(!tower1.equals(tower3));
  });
});
