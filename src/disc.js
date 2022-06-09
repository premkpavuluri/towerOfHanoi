class Disc {
  #size;

  constructor(size) {
    this.#size = size;
  }

  isGreaterThan(otherDisc) {
    return this.#size > otherDisc.#size;
  }

  getSize() {
    return this.#size;
  }

  equals(otherDisc) {
    return otherDisc instanceof Disc && this.#size === otherDisc.#size;
  }
}

exports.Disc = Disc;
