const infoOfMindAndList = require('../callback5');
const { cardsInfo } = require('./callback3');
const boards = require('../data/boards.json');
const lists = require('../data/lists.json');
const cards = require('../data/cards.json');

infoOfMindAndList(boards, lists, cards)
  .then((idOfList) => {
    let SinglePromise = [];

    idOfList.forEach((id) => {
      SinglePromise.push(cardsInfo(cards, id));
    });

    return Promise.all(SinglePromise);
  })
  .then((card) => {
    card.forEach((info) => console.log(info));
  })
  .catch((error) => {
    console.log(error.message);
  });
