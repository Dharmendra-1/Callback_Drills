const boardInfo = require('./callback1');
const listInfo = require('./callback2');
const cardsInfo = require('./callback3');

const MindAndSpaceCards = (boards, lists, cards) => {
  if (
    board.length === 0 ||
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
              let idOfList = [];
              listData.forEach((obj) => {
                if (obj.name === 'Mind' || obj.name === 'Space') {
                  idOfList.push(obj.id);
                }
              });

              setTimeout(() => {
                cardsInfo(boards, lists, cards, (cardData, id) => {
                  idOfList.forEach((idOfList) => {
                    if (idOfList === id) {
                      console.log(cardData);
                    }
                  });
                });
              }, 2000);
            }
          });
        }, 2000);
      }
    });
  }, 2000);
};

module.exports = MindAndSpaceCards;
