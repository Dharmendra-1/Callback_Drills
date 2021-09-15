/* 
	Problem 3: Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json.
  Then pass control back to the code that called it by using a callback function.
*/

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
