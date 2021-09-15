const boardId = (board) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (board.length == 0) {
        reject('Boards data is Empty..');
      } else {
        let idOfBoard = board.map((obj) => obj.id);
        resolve(idOfBoard);
      }
    }, 2000);
  });
};

const boardsInfo = (board, id) => {
  return new Promise((resolve, reject) => {
    if (board.length === 0) {
      reject('Boards is Empty..');
    }
    setTimeout(() => {
      board.forEach((obj) => {
        if (obj.id === id) {
          resolve(obj);
        }
      });
    }, 2000);
  });
};

module.exports = { boardsInfo, boardId };
