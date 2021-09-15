const { boardsInfo, boardId } = require('../callback1');
const boards = require('../data/boards.json');

boardId(boards)
  .then((idOfBoard) => {
    let allPromise = [];
    idOfBoard.forEach((id) => {
      allPromise.push(boardsInfo(boards, id));
    });

    return Promise.all(allPromise);
  })
  .then((infoOfBoard) => {
    infoOfBoard.forEach((info) => console.log(info));
  })
  .catch((error) => {
    console.log(error.message);
  });
