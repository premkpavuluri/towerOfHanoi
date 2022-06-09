const { Game } = require('./src/game.js');
const { Tower } = require('./src/tower.js');
const { Disc } = require('./src/disc.js');
process.stdin.setEncoding('utf8');

const main = () => {
  const disc1 = new Disc(1);
  const disc2 = new Disc(2);
  const disc3 = new Disc(3);
  const tower1 = new Tower(1, disc3, disc2, disc1);
  const tower2 = new Tower(2);
  const tower3 = new Tower(3);
  const game = new Game(tower1, tower2, tower3);

  game.displayTowers();
  process.stdin.on('data', (moves) => {
    const [from, to] = moves.split(' ').map(digit => parseInt(digit));

    if (!game.areMovesValid(from, to)) {
      console.log('Invalid move');
      game.displayTowers();
      return;
    }

    game.move(from, to);
    game.displayTowers();

    if (game.isGameEnded()) {
      console.log('Congratulations!');
      process.exit();
    }
  });
};

main();
