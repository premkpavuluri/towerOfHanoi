const assert = require('assert');

class Tower {
  #discs;

  constructor(...discs) {
    this.#discs = discs;
  }

  equals(otherTower) {
    try {
      assert.deepStrictEqual(otherTower.#discs, this.#discs);
    } catch (error) {
      return false;
    }

    return otherTower instanceof Tower;
  }
}

exports.Tower = Tower;
