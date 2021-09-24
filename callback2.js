const listInfo = (board, lists, cb) => {
  if (board.length === 0 || Object.keys(lists).length === 0) {
    throw new Error('Board or lists is Empty..');
  }

  setTimeout(() => {
    let boardsId = board.map((obj) => obj.id);
    boardsId.forEach((id) => {
      return cb(lists[id], id);
    });
  }, 2 * 1000);
};

module.exports = listInfo;
