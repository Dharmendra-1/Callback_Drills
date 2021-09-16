const infoOfThanosBoard = require('../callback4');
const boards = require('../data/boards.json');
const lists = require('../data/lists.json');
const cards = require('../data/cards.json');

infoOfThanosBoard(boards, lists, cards)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });
