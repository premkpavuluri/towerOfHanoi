class Disc {
  #size;

  constructor(size) {
    this.#size = size;
  }

  isGreaterThan(otherDisc) {
    return this.#size > otherDisc.#size;
  }

  equals(otherDisc) {
    const isStateEqual = this.#size === otherDisc.#size;
    if (isStateEqual && otherDisc instanceof Disc) {
      return true;
    }

    return false;
  }
}

exports.Disc = Disc;
