const { boardId, listInfo } = require('../callback2');
const boards = require('../data/boards.json');
const lists = require('../data/lists.json');

const ListInfo = async () => {
  try {
    let idOfBoard = await boardId(boards);
    let allPromise = [];
    idOfBoard.forEach((id) => {
      allPromise.push(listInfo(lists, id));
    });

    allPromise.forEach(async (InfoOfList) => {
      console.log(await InfoOfList);
    });
  } catch (error) {
    console.log(error.message);
  }
};

ListInfo();
