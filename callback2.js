const boardId = (board) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (board.length == 0) {
        reject('Boards is Empty..');
      } else {
        let idOfBoard = board.map((obj) => obj.id);
        resolve(idOfBoard);
      }
    }, 2000);
  });
};

const listInfo = (lists, id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Object.keys(lists).length === 0) {
        reject('lists is Empty..');
      } else {
        if (lists.hasOwnProperty(id)) {
          resolve(lists[id]);
        }
      }
    }, 2000);
  });
};

module.exports = { boardId, listInfo };
