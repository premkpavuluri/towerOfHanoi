const parseMoves = (moves) => {
  return moves.split(' ').map(digit => parseInt(digit));
};

const playMove = (game, srcTower, destTower, logger) => {
  if (!game.move(srcTower, destTower)) {
    logger('Invalid move');
    logger(game.getTowers());
    return;
  }

  logger(game.getTowers());

  if (game.isGameEnded()) {
    logger('Congratulations!');
    process.stdin.destroy();
  }
};

module.exports = { parseMoves, playMove };