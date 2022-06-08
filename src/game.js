class Game {
  #towers;

  constructor(...towers) {
    this.#towers = towers;
  }

  move(sourceTower, destinationTower) {
    const disctToBeMoved = this.#towers[sourceTower - 1].pop();
    this.#towers[destinationTower - 1].push(disctToBeMoved);
  }

  isGameEnded() {
    const lastTower = this.#towers[2];
    return lastTower.discCount() === 3;
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
