class Game {
  #towers;

  constructor(...towers) {
    this.#towers = towers;
  }

  areMovesValid(fromTower, toTower) {
    const sourceTower = this.#towers[fromTower - 1];
    const destinationTower = this.#towers[toTower - 1];
    if (sourceTower.isEmpty()) {
      return false;
    }

    if (destinationTower.isEmpty()) {
      return true;
    }

    const sourceTopDisc = sourceTower.topDisc();
    const destinationTopDisc = destinationTower.topDisc();
    return destinationTopDisc.isGreaterThan(sourceTopDisc);
  }
}

module.exports = { Game };
