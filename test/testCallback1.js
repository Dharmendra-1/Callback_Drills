const boardsInfo = require('../callback1');
const boards = require('../data/boards.json');

try {
  const result = boardsInfo(boards, (data, id) => {
    console.log(id);
    console.log(data);
  });
} catch (error) {
  console.log(error.message);
}
