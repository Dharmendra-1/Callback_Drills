const boardsInfo = (board) => {
  return new Promise((resolve, reject) => {
    if (board.length == 0) {
      throw new Error('Boards data is Empty..');
    }

    setTimeout(() => {
      let idOfBoard = board.map((obj) => obj.id);
      idOfBoard.forEach((id) => {
        board.forEach((boardInfo) => {
          if (boardInfo.id === id) {
            resolve(boardInfo);
          }
        });
      });
    }, 2000);
  });
};

module.exports = boardsInfo;
