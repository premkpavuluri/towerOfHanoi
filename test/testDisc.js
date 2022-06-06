const assert = require('assert');
const { Disc } = require('../src/disc.js');

describe('Disc', () => {
  it('Should validate state and instance', () => {
    const disc1 = new Disc(1);
    const disc2 = new Disc(1);

    assert.ok(disc1.equals(disc2));
  });

  it('Should return true if disc size is greater', () => {
    const disc1 = new Disc(2);

    assert.equal(disc1.isGreaterThan(3), false);
    assert.equal(disc1.isGreaterThan(1), true);
  });
});
