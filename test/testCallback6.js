const allCardsOfList = require('../callback6');

const boards = require('../data/boards.json');
const lists = require('../data/lists.json');
const cards = require('../data/cards.json');

try {
  allCardsOfList(boards, lists, cards);
} catch (error) {
  console.log(error.message);
}
