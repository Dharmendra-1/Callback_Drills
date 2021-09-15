const cardsInfo = (board, lists, cards, cb) => {
  if (
    board.length === 0 ||
    Object.keys(lists).length === 0 ||
    Object.keys(cards).length === 0
  ) {
    throw new Error('Boards or lists or cards is Empty..');
  }

  setTimeout(() => {
    const boardId = board.map((obj) => obj.id);
    setTimeout(() => {
      boardId.forEach((id) => {
        let listOfId = lists[id].map((obj) => obj.id);
        setTimeout(() => {
          listOfId.forEach((id) => {
            if (cards.hasOwnProperty(id)) {
              return cb(cards[id], id);
            }
          });
        }, 2000);
      });
    }, 2000);
  }, 2000);
};

module.exports = cardsInfo;
