const boardsInfo = (board, cb) => {
  if (board.length == 0) {
    throw new Error('Boards data is Empty..');
  }

  setTimeout(() => {
    let idOfBoard = board.map((obj) => obj.id);
    setTimeout(() => {
      idOfBoard.forEach((id) => {
        board.forEach((boardInfo) => {
          if (boardInfo.id === id) {
            return cb(boardInfo, id);
          }
        });
      });
    }, 2000);
  }, 2000);
};

module.exports = boardsInfo;
