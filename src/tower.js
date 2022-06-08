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

  push(disc) {
    this.#discs.push(disc);
  }

  topDisc() {
    const discCount = this.#discs.length;
    return this.#discs[discCount - 1];
  }

  discCount() {
    return this.#discs.length;
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
