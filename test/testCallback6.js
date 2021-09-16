const infoOfAllCards = require('../callback6');
const boards = require('../data/boards.json');
const lists = require('../data/lists.json');
const cards = require('../data/cards.json');
const { cardsInfo } = require('../callback3');

const Problem6 = async () => {
  try {
    let idOfList = await infoOfAllCards(boards, lists, cards);
    let SinglePromise = [];
    idOfList.forEach((id) => {
      SinglePromise.push(cardsInfo(cards, id));
    });

    SinglePromise.forEach(async (card) => {
      console.log(await card);
    });
  } catch (error) {
    console.log(error.message);
  }
};

Problem6();
