const { boardId, listOfId, cardsInfo } = require('../callback3');
const boards = require('../data/boards.json');
const lists = require('../data/lists.json');
const cards = require('../data/cards.json');

const CardsInfo = async () => {
  try {
    let idOfBoard = await boardId(boards);
    let listData = await listOfId(lists, idOfBoard[0]);
    let singlePromise = [];
    listData.forEach((id) => {
      singlePromise.push(cardsInfo(cards, id));
    });

    singlePromise.forEach(async (cardInfo) => {
      console.log(await cardInfo);
    });
  } catch (error) {
    console.log(error.message);
  }
};

CardsInfo();
