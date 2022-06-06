const assert = require('assert');

class Tower {
  #discs;

  constructor(...discs) {
    this.#discs = discs;
  }

  isEmpty() {
    return this.#discs.length === 0;
  }

  pop() {
    return this.#discs.pop();
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
