const assert = require('assert');
const { Game } = require('../src/game.js');
const { Tower } = require('../src/tower.js');
const { Disc } = require('../src/disc.js');

describe('Game', () => {
  it('Should validate the given moves', () => {
    const disc1 = new Disc(1);
    const disc2 = new Disc(2);
    const tower1 = new Tower(disc1);
    const tower2 = new Tower(disc2);
    const tower3 = new Tower();
    const game = new Game(tower1, tower2, tower3);

    const validPositions = game.areMovesValid(1, 2);
    const invalidPositions = game.areMovesValid(2, 1);
    assert.equal(validPositions, true);
    assert.equal(invalidPositions, false);
  });

  it('Should return false when source is tower is empty', () => {
    const tower1 = new Tower();
    const tower2 = new Tower();
    const game = new Game(tower1, tower2);

    const actual = game.areMovesValid(1, 2);
    assert.equal(actual, false);
  });

  it('Should return true if game is end', () => {
    const disc1 = new Disc(1);
    const disc2 = new Disc(2);
    const disc3 = new Disc(3);
    const tower1 = new Tower();
    const tower2 = new Tower();
    const tower3 = new Tower(disc3, disc2, disc1);
    const game = new Game(tower1, tower2, tower3);

    assert.ok(game.isGameEnded());
  });
});
