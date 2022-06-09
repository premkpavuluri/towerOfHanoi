class Game {
  #towers;

  constructor(...towers) {
    this.#towers = towers;
  }

  #getTower(number) {
    return this.#towers.find(tower => number === tower.getTowerNumber());
  }

  move(sourceTower, destinationTower) {
    const disctToBeMoved = this.#getTower(sourceTower).pop();
    this.#getTower(destinationTower).push(disctToBeMoved);
  }

  isGameEnded() {
    const lastTower = this.#getTower(3);
    return lastTower.discCount() === 3;
  }

  areMovesValid(fromTower, toTower) {
    const sourceTower = this.#getTower(fromTower);
    const destinationTower = this.#getTower(toTower);
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
