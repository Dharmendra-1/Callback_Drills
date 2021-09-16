const infoOfThanosBoard = require('../callback4');
const boards = require('../data/boards.json');
const lists = require('../data/lists.json');
const cards = require('../data/cards.json');

const Problem4 = async () => {
  try {
    let info = await infoOfThanosBoard(boards, lists, cards);
    console.log(info);
  } catch (error) {
    console.log(error.message);
  }
};

Problem4();
