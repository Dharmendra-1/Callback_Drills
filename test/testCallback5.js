const MindAndSpaceCards = require('../callback5');
const boards = require('../data/boards.json');
const lists = require('../data/lists.json');
const cards = require('../data/cards.json');

try {
  MindAndSpaceCards(boards, lists, cards);
} catch (error) {
  console.log(error.message);
}
