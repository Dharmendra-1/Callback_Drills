const infoOfAllCards = require('../callback6');
const boards = require('../data/boards.json');
const lists = require('../data/lists.json');
const cards = require('../data/cards.json');
const { cardsInfo } = require('../callback3');

infoOfAllCards(boards, lists, cards)
  .then((idOfList) => {
    const SinglePromise = [];

    idOfList.forEach((id) => {
      SinglePromise.push(cardsInfo(cards, id));
    });

    return Promise.all(SinglePromise);
  })
  .then((allCard) => {
    allCard.forEach((card) => console.log(card));
  })
  .catch((error) => {
    console.log(error.message);
  });
