const infoOfMindAndList = require('../callback5');
const { cardsInfo } = require('../callback3');
const boards = require('../data/boards.json');
const lists = require('../data/lists.json');
const cards = require('../data/cards.json');

const Problem5 = async () => {
  try {
    let idOfList = await infoOfMindAndList(boards, lists, cards);
    let SinglePromise = [];
    idOfList.forEach((id) => {
      SinglePromise.push(cardsInfo(cards, id));
    });

    SinglePromise.forEach(async (promise) => {
      console.log(await promise);
    });
  } catch (error) {
    console.log(error.message);
  }
};

Problem5();
