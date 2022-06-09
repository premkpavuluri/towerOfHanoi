class Tower {
  #discs;
  #number;

  constructor(number, ...discs) {
    this.#number = number;
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

  getTowerNumber() {
    return this.#number;
  }

  equals(otherTower) {
    if (!(otherTower instanceof Tower && this.#number === otherTower.#number)) {
      return false;
    }

    return this.#discs.every((disc, index) => {
      return disc.equals(otherTower.#discs[index]);
    });
  }
}

exports.Tower = Tower;
