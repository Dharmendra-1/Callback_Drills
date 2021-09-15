const { boardId, listOfId, cardsInfo } = require('../callback3');
const boards = require('../data/boards.json');
const lists = require('../data/lists.json');
const cards = require('../data/cards.json');

boardId(boards)
  .then((idOfBoard) => {
    return listOfId(lists, idOfBoard[0]);
  })
  .then((idOflist) => {
    let singlePromise = [];
    idOflist.forEach((id) => {
      singlePromise.push(cardsInfo(cards, id));
    });
    return Promise.all(singlePromise);
  })
  .then((cardsData) => {
    cardsData.forEach((cardInfo) => console.log(cardInfo));
  })
  .catch((error) => {
    console.log(error.message);
  });
