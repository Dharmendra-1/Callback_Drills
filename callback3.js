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

const listOfId = (list, id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Object.keys(list).length === 0) {
        reject('list is empty..');
      } else {
        let idOflist = list[id].map((obj) => obj.id);
        resolve(idOflist);
      }
    }, 2000);
  });
};

const cardsInfo = (cards, id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Object.keys(cards).length === 0) {
        reject('cards is Empty..');
      } else {
        resolve(cards[id]);
      }
    }, 2000);
  });
};

module.exports = { boardId, listOfId, cardsInfo };
