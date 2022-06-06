class Disc {
  #size;

  constructor(size) {
    this.#size = size;
  }

  isGreaterThan(givenSize) {
    return this.#size > givenSize;
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
