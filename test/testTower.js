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

  it('Should pop the top disc from the tower', () => {
    const tower = new Tower(1, 2);
    const expectedTower = new Tower(1);
    const popedDisc = tower.pop();

    assert.ok(tower.equals(expectedTower));
    assert.equal(popedDisc, 2);
  });

  it('Should return true if tower is empty', () => {
    const tower1 = new Tower();
    const tower2 = new Tower(1);

    assert.equal(tower1.isEmpty(), true);
    assert.equal(tower2.isEmpty(), false);
  });
});
