const boardsInfo = require('../callback1');
const boards = require('../data/boards.json');
const lists = require('../data/lists.json');

try {
  const result = boardsInfo(boards, lists, (data, id) => {
    console.log(id);
    console.log(data);
  });
} catch (error) {
  console.log(error.message);
}
