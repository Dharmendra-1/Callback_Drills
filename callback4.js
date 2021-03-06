const boardInfo = require('./callback1');
const listInfo = require('./callback2');
const cardsInfo = require('./callback3');

const infoOfThanosBoard = (boards, lists, cards) => {
  if (
    boards.length === 0 ||
    Object.keys(lists).length === 0 ||
    Object.keys(cards).length === 0
  ) {
    throw new Error('Boards or lists or cards is Empty..');
  }

  setTimeout(() => {
    boardInfo(boards, (data) => {
      if (data.name === 'Thanos') {
        console.log(data);
        let thanosId = data.id;

        setTimeout(() => {
          listInfo(boards, lists, (listData, id) => {
            if (thanosId == id) {
              console.log(listData);
              let idOfMind = listData
                .filter((obj) => obj.name === 'Mind')
                .map((obj) => obj.id);
              idOfMind = idOfMind[0];

              setTimeout(() => {
                cardsInfo(boards, lists, cards, (cardData, id) => {
                  if (idOfMind === id) {
                    console.log(cardData);
                  }
                });
              }, 2 * 1000);
            }
          });
        }, 2 * 1000);
      }
    });
  }, 2 * 1000);
};

module.exports = infoOfThanosBoard;
