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
    if (!(otherTower instanceof Tower)) {
      return false;
    }

    return this.#discs.every((disc, index) => {
      return disc.equals(otherTower.#discs[index]);
    });
  }
}

exports.Tower = Tower;
