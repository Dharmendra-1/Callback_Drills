const boardsInfo = (board, cb) => {
  if (board.length == 0) {
    throw new Error('Boards data is Empty..');
  }

  setTimeout(() => {
    let idOfBoard = board.map((obj) => obj.id);
    idOfBoard.forEach((id) => {
      board.forEach((boardInfo) => {
        if (boardInfo.id === id) {
          return cb(boardInfo, id);
        }
      });
    });
  }, 2 * 1000);
};

module.exports = boardsInfo;
