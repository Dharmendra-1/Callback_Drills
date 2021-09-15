const { boardId, listInfo } = require('../callback2');
const boards = require('../data/boards.json');
const lists = require('../data/lists.json');

boardId(boards)
  .then((boardOfId) => {
    let allPromise = [];
    boardOfId.forEach((id) => {
      allPromise.push(listInfo(lists, id));
    });

    return Promise.all(allPromise);
  })
  .then((infoOfList) => {
    infoOfList.forEach((info) => console.log(info));
  })
  .catch((error) => {
    console.log(error.message);
  });
