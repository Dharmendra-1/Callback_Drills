const listInfo = require('../callback2');
const boards = require('../data/boards.json');
const lists = require('../data/lists.json');

try {
  const result = listInfo(boards, lists, (listData, id) => {
    console.log(id);
    console.log(listData);
  });
} catch (error) {
  console.log(error.message);
}
