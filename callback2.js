/*
	Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given data in lists.json. Then pass control back to the code that called it by using a callback function.
*/

const listInfo = (board, lists, cb) => {
  if (board.length === 0 || Object.keys(lists).length === 0) {
    throw new Error('Board or lists is Empty..');
  }

  setTimeout(() => {
    let boardsId = board.map((obj) => obj.id);
    setTimeout(() => {
      boardsId.forEach((id) => {
        return cb(lists[id], id);
      });
    }, 2000);
  }, 2000);
};

module.exports = listInfo;
