const assert = require('assert');
const { Tower } = require('../src/tower.js');
const { Disc } = require('../src/disc.js');

describe('Tower', () => {
  it('Should validate the state and instance of other tower', () => {
    const disc1 = new Disc(1);
    const disc2 = new Disc(2);
    const tower1 = new Tower(disc1, disc2);
    const tower2 = new Tower(disc1, disc2);
    const tower3 = new Tower(disc1);

    assert.ok(tower1.equals(tower2));
    assert.ok(!tower1.equals(tower3));
  });

  it('Should pop the top disc from the tower', () => {
    const disc1 = new Disc(1);
    const disc2 = new Disc(2);
    const tower = new Tower(disc2, disc1);
    const popedDisc = tower.pop();

    assert.ok(popedDisc.equals(disc1));
  });

  it('Should return true if tower is empty', () => {
    const tower1 = new Tower();
    const tower2 = new Tower(1);

    assert.equal(tower1.isEmpty(), true);
    assert.equal(tower2.isEmpty(), false);
  });

  it('Should return top disc of a tower', () => {
    const tower = new Tower(1, 2);
    const actual = tower.topDisc();
    const expected = 2;

    assert.equal(actual, expected);
  });

  it('Should push the disc into the tower stack', () => {
    const disc1 = new Disc(1);
    const disc2 = new Disc(2);
    const tower = new Tower(disc2);
    tower.push(disc1);
    const expected = new Tower(disc2, disc1);

    assert.ok(tower.equals(expected));
  });

  it('Should return the disc count of tower', () => {
    const tower = new Tower(1);

    assert.equal(tower.discCount(), 1);
  });
});
