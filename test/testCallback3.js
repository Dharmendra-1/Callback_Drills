const cardsInfo = require("../callback3");
const boards = require("../data/boards.json");
const lists = require("../data/lists.json");
const cards = require("../data/cards.json");

try {
  const result = cardsInfo(boards, lists, cards, (data, id) => {
    console.log(id);
    console.log(data);
  });
} catch (error) {
  console.log(error.message);
}
