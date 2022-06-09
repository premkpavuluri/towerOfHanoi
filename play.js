const { Game } = require('./src/game.js');
const { Tower } = require('./src/tower.js');
const { Disc } = require('./src/disc.js');

const main = () => {
  const disc1 = new Disc(1);
  const disc2 = new Disc(2);
  const disc3 = new Disc(3);
  const tower1 = new Tower(1, disc3, disc2, disc1);
  const tower2 = new Tower(2);
  const tower3 = new Tower(3);
  const game = new Game(tower1, tower2, tower3);

  //moves
  game.move(1, 2);
  game.move(1, 3);
  game.move(3, 2);
  game.move(1, 3);
  game.move(2, 1);
  game.move(2, 3);
  game.move(1, 3);
  console.log(game.isGameEnded() ? 'Game over' : 'Continue');
};

main();
