const { boardsInfo, boardId } = require('../callback1');
const boards = require('../data/boards.json');

const BoardInfo = async () => {
  try {
    let idOfBoard = await boardId(boards);
    let allPromise = [];
    idOfBoard.forEach((id) => {
      allPromise.push(boardsInfo(boards, id));
    });

    allPromise.forEach(async (promise) => {
      console.log(await promise);
    });
  } catch (error) {
    console.log(error.message);
  }
};

BoardInfo();
