const assert = require('assert');
const { Game } = require('../src/game.js');
const { Tower } = require('../src/tower.js');
const { Disc } = require('../src/disc.js');

describe('Game', () => {
  it('Should validate the given moves', () => {
    const disc1 = new Disc(1);
    const disc2 = new Disc(2);
    const tower1 = new Tower(1, disc1);
    const tower2 = new Tower(2, disc2);
    const game = new Game(tower1, tower2);

    const invalidPositions = game.move(2, 1);
    assert.equal(invalidPositions, false);
  });

  it('Should not move the disc if moves are invalid', () => {
    const disc1 = new Disc(1);
    const disc2 = new Disc(2);
    const tower1 = new Tower(1, disc1);
    const tower2 = new Tower(2, disc2);
    const game = new Game(tower1, tower2);

    const actual = game.move(2, 1);
    assert.equal(actual, false);
  });

  it('Should return false when source is tower is empty', () => {
    const tower1 = new Tower(1);
    const tower2 = new Tower(2);
    const game = new Game(tower1, tower2);

    const actual = game.move(1, 2);
    assert.equal(actual, false);
  });

  it('Should return true if game is end', () => {
    const disc1 = new Disc(1);
    const disc2 = new Disc(2);
    const disc3 = new Disc(3);
    const tower1 = new Tower(1);
    const tower2 = new Tower(2);
    const tower3 = new Tower(3, disc3, disc2, disc1);
    const game = new Game(tower1, tower2, tower3);

    assert.ok(game.isGameEnded());
  });

  it('Should move the disc from source tower to destination tower', () => {
    const disc1 = new Disc(1);
    const disc2 = new Disc(2);
    const tower1 = new Tower(1, disc1);
    const tower2 = new Tower(2, disc2);
    const game = new Game(tower1, tower2);
    game.move(1, 2);

    const expectedTower = new Tower(2, disc2, disc1);
    assert.ok(tower2.equals(expectedTower));
  });
});
